---
title: Script Structure
description: How Gimloader scripts are structured
---

All scripts must begin with a header to declare things such as name, description, version etc. This header is structured like a [jsdoc](https://jsdoc.app/) comment and must be the first thing in the file.

## Headers

| Name | Required* | Plugin Only? | Purpose |
| ---- | --------- | ------------ | ------- |
| name | Yes | No | The script's name. |
| description | Yes | No | A description of what the script does. |
| author | Yes | No | Who made the script. |
| version | No | No | What version the script is on, used for updates. |
| downloadUrl | No | No | Where a raw version of the script be found, used for updates. |
| webpage | No | No | A webpage where users can get more information about the script. |
| reloadRequired | No | No | Whether the page needs to reload after a script is installed for it to work. Set to `true` for always, set to `ingame` for only when a game is currently active. |
| hasSettings | No | Yes | Whether a plugin has a settings menu, used to show it does when it's disabled. |
| needsLib | No | No | Any libraries the script needs to be enabled to work. Formatted like `[Name] \| [Url]`, can be repeated. |
| optionalLib | No | No | The same as needsLib, but the script will still work without these and will not try to automatically download them. |
| gamemode | No | No | Automatically limits `api.net.onLoad` to only firing in certain gamemodes by default. See below for details on gamemode ids. Case insensitive, can be repeated. |
| changelog | No | No | A message to display when the script is updated to the current version. Can be repeated. |
| isLibrary | No** | No | Libraries must include this header so that clueless users don't accidentally install them as a plugin. |

<small>
* For legacy reasons these values will simply use a default of "Unknown" if not specified, so they are technically not needed.

** This is required for libraries, not plugins.
</small>

## Plugin Headers Example
```js
/**
 * @name ScriptName
 * @description Does something awesome
 * @author Joe
 * @version 1.5.0
 * @downloadUrl https://raw.githubusercontent.com/Joe/GimloaderPlugins/main/plugins/ScriptName/ScriptName.js
 * @webpage https://github.com/Joe/GimloaderPlugins/tree/main/plugins/ScriptName/README.md
 * @reloadRequired ingame
 * @hasSettings true
 * @isLibrary false
 * @needsLib QuickSettings | https://raw.githubusercontent.com/Gimloader/client-plugins/main/build/libraries/QuickSettings.js
 * @optionalLib CommandLine | https://raw.githubusercontent.com/Blackhole927/gimkitmods/main/libraries/CommandLine/CommandLine.js
 * @gamemode dontLookDown
 * @changelog New thing has been added
 */
```

## The @gamemode header

Whenever a game loads Gimloader will attempt to determine an id for the gamemode that is being played. The rules are as follows:

1. The gamemode id is sent by the server for 1d modes
2. The gamemode id is determined based off the music file path for official 2d modes
3. The gamemode id is set to "creative" if the map is not published
4. Otherwise the gamemode id is "unknown".

There are also special ids, such as "2d" and "1d" for all 2d/1d gamemodes respectively. A full list of ids, as of the time of writing, can be found [here](/development/gamemodes).

## Exports

Plugins and libraries can export things using the normal esm syntax. These exported values can then be imported by other plugins and libraries through `GL.lib(name)` and `GL.plugin(name)`. This is especially helpful for libraries, since they will typically be exporting functions that will be used by other plugins. Exporting something from a library and importing it in a plugin might look something like this:

#### The library
```js
/**
 * @name MyLib
 * ...
 * @isLibrary true
 */
export function sayHi() {
    console.log("Hello from a library!");
}
```

#### The plugin
```js
/**
 * @needsLib MyLib
 */
const myLib = api.lib("MyLib");

myLib.sayHi();
```

There are also two exports with special meaning- `onStop` and `openSettingsMenu`. As the name implies, `onStop` is called when the user disables the script, and `openSettingsMenu` is called when the user clicks the button to open a plugin's setting menu (this does nothing special when used in a library). However, it is discouraged to use these. If possible, use the scoped api's `onStop` and `openSettingsMenu` methods instead.