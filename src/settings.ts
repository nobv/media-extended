import { App, PluginSettingTab, Setting } from "obsidian";
import MediaExtended from "./main";

export interface MxSettings {
  mediaFragmentsEmbed: boolean;
  timestampLink: boolean;
  extendedImageEmbedSyntax: boolean;
  interalBiliPlayback: boolean;
}

export const DEFAULT_SETTINGS: MxSettings = {
  mediaFragmentsEmbed: true,
  timestampLink: false,
  extendedImageEmbedSyntax: false,
  interalBiliPlayback: false,
};

export class MESettingTab extends PluginSettingTab {
  plugin: MediaExtended;

  constructor(app: App, plugin: MediaExtended) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    const options: option[] = [
      {
        k: "mediaFragmentsEmbed",
        name: "Embed Media Fragments",
        desc: createFragment(descEl => {
          descEl.appendText(
            "If enabled, you can write ![[demo.mp4#t=10]] to embed the specific fragment of video/audio. "
          );
          descEl.createEl('br');
          descEl.appendText(
            "Loop is also available by append #loop or #t=...&loop to the end of filename"
          );
          descEl.createEl('br');
          descEl.appendText("Restart the app to take effects");
        })
      },
      {
        k: "timestampLink",
        name: "Timestamps for Media",
        desc: createFragment(descEl => {
          descEl.appendText(
            "If enabled, you can write [[demo.mp4#t=10]] to create timestamp link to the video/audio. Click on the link would open the media file if it's not opened yet. "
          );
          descEl.createEl('br');
          descEl.appendText(
            "PS: Only works in preview mode, hover preview on link is not available"
          );
          descEl.createEl('br');
          descEl.appendText("Restart the app to take effects");
        })
      },
      {
        k: "extendedImageEmbedSyntax",
        name: "Extended Image Embed Syntax",
        desc: createFragment(descEl => {
          descEl.appendText(
            "If enabled, you can write ![](link/to/demo.mp4) to embed video and audio."
          );
          descEl.createEl('br');
          descEl.appendText(
            "Support direct file links (with file extension) and videos from video hosts (Youtube, Bilibili)"
          );
          descEl.createEl('br');
          descEl.appendText("Restart the app to take effects");
        })
      },
      {
        k: "interalBiliPlayback",
        name: "Play bilibili video with local player",
        desc: createFragment(descEl => {
          descEl.appendText(
            "在本地播放Bilibili视频，替代嵌入式iframe播放器，支持播放1080p视频"
          );
          descEl.createEl('br');
          descEl.appendText(
            "bilibili视频的时间戳功能需要开启该功能"
          );
          descEl.createEl('br');
          descEl.appendText("重启Obsidian生效");
        })
      },
    ];

    for (const o of options) {
      setOption(o, this);
    }
  }
}
type option = {
  k: keyof MxSettings;
  name: string;
  desc: string | DocumentFragment;
};
function setOption({ k, name, desc }: option, tab: MESettingTab) {
  new Setting(tab.containerEl)
    .setName(name)
    .setDesc(desc)
    .addToggle((toggle) =>
      toggle.setValue(tab.plugin.settings[k]).onChange(async (value) => {
        tab.plugin.settings[k] = value;
        tab.plugin.saveData(tab.plugin.settings);
        tab.display();
      })
    );
}
