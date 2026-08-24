---
title: The Gimloader Api
description: An overview of the Gimloader api
---

The Gimloader API is accessible through the script-specific `api` variable, and contains many tools that are useful for making scripts. There is also a global `GL` variable which contains an instance of the api for debugging.

## Cleanup

Because the api is scoped to a specific script, functions will generally automatically clean themselves up when the script is disabled. They can also typically be manually cleaned up by running the callback returned by the function.

```js
// These styles will automatically be removed when this script is turned off
api.UI.addStyles("#thing { color: red }");

// These styles will manually be removed after 5 seconds
const cleanup = api.UI.addStyles("#thing2 { color: blue }");
setTimeout(() => cleanup(), 5000);
```

Certain changes you make might also need to be manually cleaned up. For this, you can use `api.onStop`, which runs one or more callbacks when the script is disabled.

```js
window.myThingExists = true;
api.onStop(() => window.myThingExists = false);
```

## Settings Menus

Only plugins are allowed to have settings menus, since users generally should not interact with libraries directly. Settings menus can be created in two ways: `api.openSettingsMenu` or `api.settings`. The former runs a callback when the user clicks the settings icon, and the latter is a utility which easily creates settings menus which automatically persist data. `api.settings` is generally preferred since it makes settings consistent between plugins. See the [docs](/api/settings) for more information.

```js
const settings = api.settings.create([
    {
        id: "test",
        type: "toggle",
        title: "Do something",
        description: "Hello",
        default: false,
        onChange: (value) => console.log(value)
    }
]);

console.log(settings.test); // false by default
console.log(api.settings.test); // this works too
```

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