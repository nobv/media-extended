import { assertNever } from "assert-never";
import { Plyr_TF, getSetupTool, setPlyr } from "modules/player-setup";
import Plyr from "plyr";
import { fetchBiliThumbnail, fetchVimeoThumbnail } from "./thumbnail";
import { Host, videoInfo_Host } from "./video-info";

const playButtonHtml = `<svg aria-hidden="true" focusable="false"> <svg id="plyr-play" viewBox="0 0 18 18"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></svg></svg ><span class="plyr__sr-only">Play</span>`;

export function setupPlyr(
  container: HTMLDivElement,
  info: videoInfo_Host,
  useYtControls = false,
): Plyr_TF {
  const tool = getSetupTool(info.src.hash);
  const { timeSpan } = tool;

  let options: Parameters<typeof setPlyr>[3];
  if (info.host === Host.youtube) {
    options = {};
    if (timeSpan && timeSpan.start !== 0) {
      if (!options.youtube) options.youtube = {};
      // @ts-ignore
      options.youtube.start = timeSpan.start;
    }
    if (useYtControls) {
      if (!options.youtube) options.youtube = {};
      options.controls = ["play-large"];
      // @ts-ignore
      options.youtube.controls = true;
      container.classList.add("yt-controls");
    }
  } else options = undefined;
  const player = setPlyr(container, getIFrame(info), tool, options);
  if (info.host === Host.youtube && useYtControls) {
    player.on("ready", (event) => {
      player.play();
      player.pause();
    });
  }
  return player;
}

export async function setupThumbnail(
  container: HTMLDivElement,
  info: videoInfo_Host,
  useYtControls = false,
): Promise<void> {
  const { id: videoId } = info;

  let thumbnailUrl: string | null;
  let fakePlayHandler: typeof PlyrHandler;
  function PlyrHandler() {
    const player = setupPlyr(container, info, useYtControls);
    player.once("ready", function (evt) {
      this.play();
    });
    container.removeChild(thumbnail);
  }

  switch (info.host) {
    case Host.youtube:
      thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
      fakePlayHandler = PlyrHandler;
      break;
    case Host.bili:
      if (info.id.startsWith("av"))
        thumbnailUrl = await fetchBiliThumbnail(+info.id.substring(2));
      else thumbnailUrl = await fetchBiliThumbnail(info.id);
      fakePlayHandler = () => {
        setupIFrame(container, info);
        container.removeChild(thumbnail);
      };
      break;
    case Host.vimeo:
      thumbnailUrl = await fetchVimeoThumbnail(info.src);
      fakePlayHandler = PlyrHandler;
      break;
    default:
      assertNever(info.host);
  }

  const thumbnail = createDiv(
    {
      cls: ["thumbnail", "plyr plyr--full-ui plyr--video"],
    },
    (el) => {
      if (thumbnailUrl) el.style.backgroundImage = `url("${thumbnailUrl}")`;
      el.appendChild(
        createEl(
          "button",
          {
            cls: "plyr__control plyr__control--overlaid",
            attr: {
              type: "button",
              "data-plyr": "play",
              "aria-label": "Play",
            },
          },
          (button) => {
            button.innerHTML = playButtonHtml;
            button.onClickEvent(fakePlayHandler);
          },
        ),
      );
    },
  );

  container.appendChild(thumbnail);
}

function getIFrame(info: videoInfo_Host) {
  return createEl("iframe", {
    cls: "external-video",
    attr: {
      src: info.iframe.toString(),
      scrolling: "no",
      border: "0",
      frameborder: "no",
      framespacing: "0",
      allowfullscreen: false,
      sandbox:
        "allow-forms allow-presentation allow-same-origin allow-scripts allow-modals",
    },
  });
}

export function setupIFrame(
  container: HTMLDivElement,
  info: videoInfo_Host,
): void {
  container.appendChild(getIFrame(info));
  container.addClass("bili-embed");
}
