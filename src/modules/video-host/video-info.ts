import { trackInfo } from "modules/subtitle";
import { parseLinktext, TFile, Vault } from "obsidian";
import { getSubtitleTracks } from "modules/subtitle";

export enum Host {
  youtube,
  bili,
  vimeo,
}

type mediaType = "audio" | "video";
const acceptedExt: Map<mediaType, string[]> = new Map([
  ["audio", ["mp3", "wav", "m4a", "ogg", "3gp", "flac"]],
  ["video", ["mp4", "webm", "ogv"]],
]);

export function getMediaType(src: string | URL | TFile): mediaType | null {
  // if url contains no extension, type = null
  let ext: string | null = null;
  if (src instanceof TFile) {
    ext = src.extension;
  } else if (typeof src === "string") {
    const { path } = parseLinktext(src);
    if (path.includes(".")) {
      ext = path.split(".").pop() as string;
    }
  } else if (src.pathname.includes(".")) {
    ext = src.pathname.split(".").pop() as string;
  }
  if (!ext) return null;

  let fileType: mediaType | null = null;
  for (const [type, extList] of acceptedExt) {
    if (extList.includes(ext)) fileType = type;
  }
  return fileType;
}

export type videoInfo = videoInfo_Direct | videoInfo_Host | videoInfo_Internal;

export interface videoInfo_Internal {
  type: mediaType;
  /** resource path */
  link: URL;
  filename: string;
  src: TFile;
  trackInfo?: trackInfo;
}
export interface videoInfo_Direct {
  type: mediaType;
  /** converted src that is safe to use inside Obsidian */
  link: URL;
  filename: string;
  src: URL;
}
export function isDirect(info: videoInfo): info is videoInfo_Direct {
  return (info as videoInfo_Host).host === undefined && info.src instanceof URL;
}
export function isInternal(info: videoInfo): info is videoInfo_Internal {
  return info.src instanceof TFile;
}
export interface videoInfo_Host {
  host: Host;
  id: string;
  iframe: URL;
  src: URL;
}
export function isHost(info: videoInfo): info is videoInfo_Host {
  return (
    (info as videoInfo_Host).host !== undefined &&
    (info as videoInfo_Host).id !== undefined
  );
}

export async function getVideoInfo(
  src: URL | string,
): Promise<videoInfo | null>;
export async function getVideoInfo(
  src: TFile,
  hash: string,
  vault: Vault,
): Promise<videoInfo | null>;
export async function getVideoInfo(
  src: TFile | URL | string,
  hash?: string,
  vault?: Vault,
): Promise<videoInfo | null> {
  if (typeof src === "string") {
    try {
      src = new URL(src);
    } catch (error) {
      console.error("invalid url: ", src);
      return null;
    }
  }

  const mediaType = getMediaType(src);
  let trackInfo: trackInfo | undefined = undefined;

  if (mediaType) {
    let link: URL;
    if (src instanceof TFile) {
      if (!vault)
        throw new TypeError("no vault provided to parse resource path");
      if (!hash) hash = "";
      else if (!hash.startsWith("#")) hash = "#" + hash;
      const resourcePath = vault.getResourcePath(src);
      try {
        link = new URL(resourcePath + hash);
      } catch (error) {
        console.error("invalid url: ", resourcePath);
        return null;
      }
      trackInfo = (await getSubtitleTracks(src, vault)) ?? undefined;
      return { type: mediaType, link, filename: src.name, src, trackInfo };
    } else if (src.protocol === "file:")
      link = new URL(src.href.replace(/^file:\/\/\//, "app://local/"));
    else link = src;
    const rawFilename = decodeURI(link.pathname).split("/").pop() ?? "";
    return {
      type: mediaType,
      link,
      filename: decodeURI(rawFilename),
      src,
      trackInfo,
    };
  } else if (src instanceof TFile) return null;

  switch (src.hostname) {
    case "www.bilibili.com":
      if (src.pathname.startsWith("/video")) {
        let videoId = src.pathname.replace("/video/", "");
        let queryStr: string;
        if (/^bv/i.test(videoId)) {
          queryStr = `?bvid=${videoId}`;
        } else if (/^av/i.test(videoId)) {
          queryStr = `?aid=${videoId}`;
        } else {
          console.log(`invaild video id: ${videoId}`);
          return null;
        }
        let page = src.searchParams.get("p");
        if (page) queryStr += `&page=${page}`;
        return {
          host: Host.bili,
          id: videoId,
          iframe: new URL(
            `https://player.bilibili.com/player.html${queryStr}&high_quality=1&danmaku=0`,
          ),
          src,
        };
      } else {
        console.log("bilibili video url not supported or invalid");
        return null;
      }
      break;
    case "www.youtube.com":
    case "youtu.be":
      if (src.pathname === "/watch") {
        let videoId = src.searchParams.get("v");
        if (videoId) {
          return {
            host: Host.youtube,
            id: videoId,
            iframe: new URL(`https://www.youtube.com/embed/${videoId}`),
            src,
          };
        } else {
          console.log(`invalid video id: ${src.toString()}`);
          return null;
        }
      } else if (src.host === "youtu.be") {
        if (/^\/[^\/]+$/.test(src.pathname)) {
          let videoId = src.pathname.substring(1);
          return {
            host: Host.youtube,
            id: videoId,
            iframe: new URL(`https://www.youtube.com/embed/${videoId}`),
            src,
          };
        } else {
          console.log(`invalid video id: ${src.toString()}`);
          return null;
        }
      } else {
        console.log("youtube video url not supported or invalid");
        return null;
      }
      break;
    case "vimeo.com":
      const path = src.pathname;
      let match;
      if ((match = path.match(/^\/(\d+)$/))) {
        let videoId = match[1];
        return {
          host: Host.vimeo,
          id: videoId,
          iframe: new URL(`https://player.vimeo.com/video/${videoId}`),
          src,
        };
      } else {
        console.log("vimeo video url not supported or invalid");
        return null;
      }
    default:
      return null;
  }
}
