import { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, MESettingTab, MxSettings } from "./settings";
import {
  processInternalEmbeds,
  processExternalEmbeds,
  processInternalLinks,
} from "./processor";
import { Server } from "node:http";
import { getServer } from "fake-bili";

export default class MediaExtended extends Plugin {
  settings: MxSettings = DEFAULT_SETTINGS;

  server: Server | undefined;

  async loadSettings() {
    Object.assign(this.settings, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onload(): Promise<void> {
    console.log("loading media-extended");

    await this.loadSettings();

    this.addSettingTab(new MESettingTab(this.app, this));

    if (this.settings.mediaFragmentsEmbed) {
      this.registerMarkdownPostProcessor(processInternalEmbeds);
    }
    if (this.settings.timestampLink) {
      this.registerMarkdownPostProcessor(processInternalLinks.bind(this));
    }
    if (this.settings.extendedImageEmbedSyntax) {
      // additional process for bili required
      this.registerMarkdownPostProcessor(processExternalEmbeds);
    }
    if (this.settings.interalBiliPlayback) {
      this.server = getServer(2233);
      // additional process for bili required
    }

    // this.registerMarkdownPostProcessor(processVideoPlayer.bind(this));
  }

  onunload() {
    console.log("unloading media-extended");
    this.server?.close();
  }
}

// function processVideoPlayer(el:HTMLElement, ctx:MarkdownPostProcessorContext) {
//    this.player = new Plyr("span.internal-embed > video")
// }
