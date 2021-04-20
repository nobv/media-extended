import { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, MESettingTab, MxSettings } from "./settings";
import {
  processInternalEmbeds,
  processExternalEmbeds,
  processInternalLinks,
} from "./processor";
import { Express } from "express";
import { getServer } from "fake-bili";

export default class MediaExtended extends Plugin {
  settings: MxSettings = DEFAULT_SETTINGS;

  server: Express | undefined;

  async loadSettings() {
    Object.assign(this.settings, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onload(): Promise<void> {
    console.log("loading media-extended");

    this.server = getServer(2233);
    this.server.listen(2233);

    await this.loadSettings();

    this.addSettingTab(new MESettingTab(this.app, this));

    if (this.settings.mediaFragmentsEmbed) {
      this.registerMarkdownPostProcessor(processInternalEmbeds);
    }
    if (this.settings.timestampLink) {
      this.registerMarkdownPostProcessor(processInternalLinks.bind(this));
    }
    if (this.settings.extendedImageEmbedSyntax) {
      this.registerMarkdownPostProcessor(processExternalEmbeds);
    }

    // this.registerMarkdownPostProcessor(processVideoPlayer.bind(this));
  }

  onunload() {
    console.log("unloading media-extended");
  }
}

// function processVideoPlayer(el:HTMLElement, ctx:MarkdownPostProcessorContext) {
//    this.player = new Plyr("span.internal-embed > video")
// }
