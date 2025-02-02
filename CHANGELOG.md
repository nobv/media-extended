## [2.7.2](https://github.com/alx-plugins/media-extended/compare/2.7.1...2.7.2) (2021-05-29)


### Bug Fixes

* **temporal-frag.ts:** convertTime() error in handling hours ([66cc014](https://github.com/alx-plugins/media-extended/commit/66cc014b6c4b0f5628a97bd4a9a0655df20b8046)), closes [#38](https://github.com/alx-plugins/media-extended/issues/38)

## [2.7.1](https://github.com/alx-plugins/media-extended/compare/2.7.0...2.7.1) (2021-05-29)


### Bug Fixes

* **external-embed.ts:** external embed syntax not working with direct links ([d2affb7](https://github.com/alx-plugins/media-extended/commit/d2affb7e2584e84874a36d6d2a26f21ab4a0aa3a)), closes [#39](https://github.com/alx-plugins/media-extended/issues/39)

# [2.7.0](https://github.com/alx-plugins/media-extended/compare/2.6.0...2.7.0) (2021-05-24)


### Bug Fixes

* **main.css:** youtube iframe no longer response to mouse when paused ([739600c](https://github.com/alx-plugins/media-extended/commit/739600cb5f081ae898e1c9dec473653a1ab16417))


### Features

* add the option to use youtube built-in controls ([990ce0b](https://github.com/alx-plugins/media-extended/commit/990ce0b582f42f882db9cb4e957a299e068eedf6))

# [2.6.0](https://github.com/alx-plugins/media-extended/compare/2.5.3...2.6.0) (2021-05-19)


### Bug Fixes

* **main.ts:** click on link boundary of external media in sourceMode no longer open link in browser ([e4beb54](https://github.com/alx-plugins/media-extended/commit/e4beb54afc38dd6eb6c2c3ebb7bd484448600556))
* **media-view.ts:** fix pip issues ([6568848](https://github.com/alx-plugins/media-extended/commit/65688482776f484248f3380a1c0e1ed628eb9990))
* **media-view.ts:** leaf with ExternalMediaView no longer sync with markdown ([bd847c7](https://github.com/alx-plugins/media-extended/commit/bd847c7325d4851404662296f83ef470dbd354e3))
* **misc.ts:** fix mainpart() return empty string when no hash in URL ([dbd205c](https://github.com/alx-plugins/media-extended/commit/dbd205cd5507bc462eb4e87d5edf795de53cdf33))
* **player-setup.ts:** fix full-screen control not showing up ([4815ea8](https://github.com/alx-plugins/media-extended/commit/4815ea840e10148e3db4d1e34cfceab9f80f8b89))


### Features

* **main.ts:** add cmd/ctrl + t as default shortcut to get timestamp ([a259f24](https://github.com/alx-plugins/media-extended/commit/a259f24634a04b548fe99220b673fb8495b89830))
* add initial support for timestamp link to external media ([837fd50](https://github.com/alx-plugins/media-extended/commit/837fd5029daa4bcffa8333e49aacf9287223402b)), closes [#14](https://github.com/alx-plugins/media-extended/issues/14)
* add internal link support for MediaView ([6b0d959](https://github.com/alx-plugins/media-extended/commit/6b0d95930eea75bc8ca11079b6aeaf7b7b3a2efe))
* **media-view.ts:** add pip toggle in MediaView ([fe82393](https://github.com/alx-plugins/media-extended/commit/fe823936fb7fe87fb6497a7d1521e38fc6cc8406))
* external media links in sourceMode is now clickable ([f70579b](https://github.com/alx-plugins/media-extended/commit/f70579bbae810e7ddc39061b7c3f9eb435668fe8))
* **main.ts:** add command to insert timestamp when in sourceMode ([a5cc2cb](https://github.com/alx-plugins/media-extended/commit/a5cc2cb6963aeacd6faa606613618678f42e1b92))
* **media-view.ts:** add group binding to ExternalMediaView ([951d17b](https://github.com/alx-plugins/media-extended/commit/951d17b8ee87d9b9fb6abd7e155dae3f2c266291))
* **media-view.ts:** initial support to insert timestamp from player to doc ([c83a982](https://github.com/alx-plugins/media-extended/commit/c83a982086cb20c3c39e3704f2c839852f1f02c3)), closes [#9](https://github.com/alx-plugins/media-extended/issues/9)

## [2.5.3](https://github.com/alx-plugins/media-extended/compare/2.5.2...2.5.3) (2021-05-17)


### Bug Fixes

* **player-setup.ts:** enable pip and fullscreen by default ([1ff6dad](https://github.com/alx-plugins/media-extended/commit/1ff6dad91e52b3273538b37948aea33b9fb6072a))
* caption is enable by default when subtitle file is present ([28539fa](https://github.com/alx-plugins/media-extended/commit/28539fa4c4706c38b8eae3ac9f88a60c024f1fb3))
* enable plyr for direct links ([4ef6f53](https://github.com/alx-plugins/media-extended/commit/4ef6f53956d9d2dd10c86998254525dc03d958a9))

## [2.5.2](https://github.com/alx-plugins/media-extended/compare/2.5.1...2.5.2) (2021-05-16)


### Bug Fixes

* **main.css:** slider-thumb no longer get misaligned across different theme ([4b47f61](https://github.com/alx-plugins/media-extended/commit/4b47f61eaf74fa0001adfbb9846161e6e6be8b61))

## [2.5.1](https://github.com/alx-plugins/media-extended/compare/2.5.0...2.5.1) (2021-05-16)


### Bug Fixes

* adjust css to fix frame size not responsive ([4d011bf](https://github.com/alx-plugins/media-extended/commit/4d011bf0fe90f3062e7f6e979f247159b5a64ea3))
* **handlers.ts:** fix internal embed not reading subtitles ([a964c0b](https://github.com/alx-plugins/media-extended/commit/a964c0b6e98b7fef6f35ac5d67cb203de0212013))
* **player-setup.ts:** fix internal webm embed not working ([7fab710](https://github.com/alx-plugins/media-extended/commit/7fab71048d5e480452982e7445fa887fa31228fb))

# [2.5.0](https://github.com/alx-plugins/media-extended/compare/2.4.0...2.5.0) (2021-05-15)


### Bug Fixes

* subtitle can be selected and selection color is adjusted ([8641f84](https://github.com/alx-plugins/media-extended/commit/8641f840efd2c614940ad1dfdbd2db63b00c339a))
* **handlemedia:** plyr should work with internal embeds with hash now ([078f807](https://github.com/alx-plugins/media-extended/commit/078f8071d8fb89c6429303e7a44d5cba70f0db34))
* config plyr to respond to div.external-video size setting ([8ad5570](https://github.com/alx-plugins/media-extended/commit/8ad557095ff778b5ca2e79a67703741cabc3271a))


### Features

* add inline autoplay support ([12ebe8f](https://github.com/alx-plugins/media-extended/commit/12ebe8fc1c95ce59a37e13be0644f83daf13ee8c))
* **getsetuptool():** add inline mute support ([86a5a2a](https://github.com/alx-plugins/media-extended/commit/86a5a2a7d43e708f4386254a878b0a4b4bc98b7e))
* add global plyr size control ([d42f369](https://github.com/alx-plugins/media-extended/commit/d42f369e1fb6a0131903b79abdefeebf584b4aa0))

# [2.4.0](https://github.com/alx-plugins/media-extended/compare/2.3.0...2.4.0) (2021-05-14)


### Bug Fixes

* add filterDuplicates() for MutationRecord[] to avoid duplicate calls ([c256db6](https://github.com/alx-plugins/media-extended/commit/c256db6d988937eeefe08f4504fde04803821b58))


### Features

* add local subtitle support; set plyr as default local media player ([c005b9f](https://github.com/alx-plugins/media-extended/commit/c005b9fc7628a7b530b0d142660d9b65f9dd784e)), closes [#7](https://github.com/alx-plugins/media-extended/issues/7) [#25](https://github.com/alx-plugins/media-extended/issues/25)
* add toolkit to load local subtitle ([fddf2d3](https://github.com/alx-plugins/media-extended/commit/fddf2d3839ab8e0942afd7f70cb6ddf4742cf14f))

# [2.3.0](https://github.com/alx-plugins/media-extended/compare/2.2.1...2.3.0) (2021-05-13)


### Bug Fixes

* **handlers.ts:** directlink external embed should respond to temporal fragment now ([fcea4e1](https://github.com/alx-plugins/media-extended/commit/fcea4e1454d91877d740d8a4794450a530800209))
* **playersetup.ts:** looped media without temporal fragement should work again ([a7bf7a6](https://github.com/alx-plugins/media-extended/commit/a7bf7a6ee32cb6e22f2c2a1cae913e440f07ad9f))


### Features

* add setting for thumbnailPlaceholder ([411b1de](https://github.com/alx-plugins/media-extended/commit/411b1deda424199afc7720db5c7e4c4ee10648f3))
* **videohosttools.ts:** add thumbnail support for vimeo and bilibili video ([3e3d5d4](https://github.com/alx-plugins/media-extended/commit/3e3d5d48acf0149219cb2e2844da162e7d8c05d7))
* **videohosttools.ts:** add thumbnail support for youtube video ([c927ede](https://github.com/alx-plugins/media-extended/commit/c927eded0e3f2d0b090f15ca7ecaa00f3ea710ae))
* add unregister method for MarkdownPostProcessor ([d6e39b9](https://github.com/alx-plugins/media-extended/commit/d6e39b90f9f65f9c7cf6575c377d33f8f7fb030f))

## [2.2.1](https://github.com/alx-plugins/media-extended/compare/2.2.0...2.2.1) (2021-05-12)


### Bug Fixes

* **embed-process.ts:** player no longer paused when first loop ends ([d0f8e24](https://github.com/alx-plugins/media-extended/commit/d0f8e24686579bf31e79e67c66fad12a161e58ca)), closes [#21](https://github.com/alx-plugins/media-extended/issues/21)
* **processor.ts:** fix loop tag not attached to player in processInternalLinks() ([8e933dd](https://github.com/alx-plugins/media-extended/commit/8e933dd3cdc962adc8b9314590789f7c559db8f1))
* **processor.ts:** internal timestamp link now works with audio files again ([c5d5afa](https://github.com/alx-plugins/media-extended/commit/c5d5afaf74449d6cd36e386e8c73384b0cd87d3d)), closes [#20](https://github.com/alx-plugins/media-extended/issues/20)

# [2.2.0](https://github.com/alx-plugins/media-extended/compare/2.1.0...2.2.0) (2021-04-15)


### Features

* add youtube short link support ([18bef61](https://github.com/alx-plugins/media-extended/commit/18bef6158eb0001b7987886be694b167cc2e0b67))

# [2.1.0](https://github.com/alx-plugins/media-extended/compare/2.0.0...2.1.0) (2021-04-14)


### Bug Fixes

* **styles.css:** fix misaligned slider-thumb ([77faab4](https://github.com/alx-plugins/media-extended/commit/77faab47fb6c05bf1bad227e8309d45a0b3908be))


### Features

* **embed-process.ts:** add vimeo support ([3962151](https://github.com/alx-plugins/media-extended/commit/3962151e775557685639a3a56708fdef2d750c61))
* **embed-process.ts:** allow youtube video timestamp control ([c93e2ac](https://github.com/alx-plugins/media-extended/commit/c93e2acc939ae77997a8e76b196e8ccdae5977a3))
* **embed-process.ts:** use plyr as youtube player ([09d1993](https://github.com/alx-plugins/media-extended/commit/09d19938c8d744136c493562ad6e3d6e87e0821a))
* **processor.ts:** update bilibili iframe rules ([6866dd7](https://github.com/alx-plugins/media-extended/commit/6866dd788f5fb1d76626e40fab21bf76c45ee7a0))
* **styles.css:** hide annoying "more videos" when paused for youtube video ([6966c07](https://github.com/alx-plugins/media-extended/commit/6966c07981dbda096368e639b0c70aa19e844100))

# [2.0.0](https://github.com/alx-plugins/media-extended/compare/1.0.1...2.0.0) (2021-04-12)


### Code Refactoring

* **processor.ts:** extract util function injectTimestamp() ([ef17898](https://github.com/alx-plugins/media-extended/commit/ef1789833f641db0aec678c3cbe22bb5a393419b))


### Features

* **processor.ts:** add external video hosts (Youtube, bilibili) embed support ([4708cd5](https://github.com/alx-plugins/media-extended/commit/4708cd5ac139ea533633dd1c52363ed7ef37a93d))


### BREAKING CHANGES

* **processor.ts:** now HME_TF is renamed to HTMLMediaEl_TF

## [1.0.1](https://github.com/alx-plugins/media-extended/compare/1.0.0...1.0.1) (2021-04-10)


### Bug Fixes

* change internalEmbedObs.disconnect() behavior to respond to media fallback ([4a277dc](https://github.com/alx-plugins/media-extended/commit/4a277dc266976ed8caf1a16672e519de18c646a8)), closes [#4](https://github.com/alx-plugins/media-extended/issues/4)



# [1.0.0](https://github.com/alx-plugins/media-extended/compare/1.0.0...1.0.1) (2021-04-06)

