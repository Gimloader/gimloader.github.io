---
title: The Gimloader Api
description: An overview of the Gimloader api
---

The Gimloader API is accessible through the script-specific `api` variable. It contains many tools that are useful for making scripts. There is also a global api available through the global `GL` variable, which is primarily for debugging and should not be used in scripts.

## Important API Elements

Obviously, the entire API can't be included here. See the the [api docs](/api/scopedapi) if you want that. Below are some of the things that will be most useful to a new dev.

### api.stores

`api.stores` is by far the most important thing which Gimloader provides. `stores` is an internal variable which contains nearly everything going on within 2d Gimkit gamemodes (it does not exist in classic modes). It is undocumented, so it is recommended that you familiarize yourself with it by typing `api.stores` in your browser console and looking around.

#### api.stores.phaser.mainCharacter

This is the object that represents the character the player controls. The character's coordinates can be found at `mainCharacter.body.x` and `mainCharacter.body.y`, and most things related to visuals are present. For example, the player's skin can be updated client-side to the unobtainable [Clown](https://gimkit.wiki/wiki/Clown) skin by running the following:

```js
api.stores.phaser.mainCharacter.skin.updateSkin({ id: "clown" });
```

#### api.stores.phaser.scene.worldManager

The world manager is responsible for several things, notably devices. Plugins are able to see devices in `worldManager.devices.allDevices`, and they can be triggered by doing `device.interactiveZones.onInteraction()`.

#### api.stores.me

This contains a variety of things, but one of the more important ones is the player's inventory at `me.inventory`.

### api.net.state

Once again, this is only available in 2d modes. The `state` contains everything that is synchronised between the client and the server. Gimkit uses [Colyseus.js](https://colyseus.io) for this, and information on listening to changes can be found in their [docs](https://docs.colyseus.io/state/schema-callbacks/). For example, `state.session.phase` shows whether the game is currently active or in the lobby.