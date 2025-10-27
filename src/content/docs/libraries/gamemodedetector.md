---
title: GamemodeDetector
description: A Gimloader library that detect which official gamemode is currently being played
---

GamemodeDetector is a utility library that lets other scripts easily check which official gamemode is being played.

The currently detected gamemodes are the following:

`Don't Look Down`, `Fishtopia`, `Capture The Flag`, `Knockback`, `Color Clash`, `Diamond Rush`, `Dig It Up`, `One Way Out`, `Snowbrawl`, `Blastball`, `Snowy Survival`, `Apocalypse`, `Tag`, and `Farmchain`.

## Usage

```js
/**
 * @needsLib GamemodeDetector | https://raw.githubusercontent.com/Gimloader/client-plugins/main/build/libraries/GamemodeDetector.js
 */

// Get the current gamemode
const gamemode = api.lib("GamemodeDetector").currentGamemode();
```