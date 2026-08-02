---
title: Scoped Api
description: Documentation for the Scoped Api
prev: false
---
A scoped api is available to all scripts with the `api` variable.

## Properties

### commands

> **commands**: `Readonly`\<[`ScopedCommandsApi`](/api/scopedcommands)\>

Functions for adding commands to the command palette

***

### Components

> **Components**: [`SvelteComponents`](../interfaces/SvelteComponents.md)

Useful svelte components which can be used by scripts

***

### headers

> **headers**: `Readonly`\<`ScriptHeaders`\>

The headers containing this script's metadata

***

### hotkeys

> **hotkeys**: `Readonly`\<[`ScopedHotkeysApi`](/api/scopedhotkeys)\>

Functions to listen for key combinations

***

### lib()

> **lib**: \<`T`\>(`name`) => `Libraries`\[`T`\] = `Api.libs.get`

Gets the exported values of a library

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `T` |

#### Returns

`Libraries`\[`T`\]

***

### libs

> **libs**: `Readonly`\<[`ScopedLibsApi`](/api/scopedlibs)\>

Methods for getting info on libraries

***

### logger

> **logger**: `Readonly`\<[`LoggerApi`](/api/logger)\>

Utilities for pretty logs with a tag showing they are from this script

***

### net

> **net**: `Readonly`\<[`ScopedNetApi`](/api/scopednet)\>

Ways to interact with the current connection to the server,
and functions to send general requests

***

### onStop()

> **onStop**: (`callback`) => `void`

Run a callback when this script is disabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

### openSettingsMenu()

> **openSettingsMenu**: (`callback`) => `void`

Run a callback when this plugin's settings menu button is clicked

This function is not available for libraries

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

### patcher

> **patcher**: `Readonly`\<[`ScopedPatcherApi`](/api/scopedpatcher)\>

Functions for intercepting the arguments and return values of functions

***

### plugin()

> **plugin**: \<`T`\>(`name`) => `Plugins`\[`T`\] = `Api.plugins.get`

Gets the exported values of a plugin, if it has been enabled

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `T` |

#### Returns

`Plugins`\[`T`\]

***

### plugins

> **plugins**: `Readonly`\<[`ScopedPluginsApi`](/api/scopedplugins)\>

Methods for getting info on plugins

***

### rewriter

> **rewriter**: `Readonly`\<[`ScopedRewriterApi`](/api/scopedrewriter)\>

Functions to edit Gimkit's code

***

### settings

> **settings**: `[`Pluginsettings`](/api/settings)`

A utility for creating persistent settings menus, only available to plugins

***

### storage

> **storage**: `Readonly`\<[`ScopedStorageApi`](/api/scopedstorage)\>

Functions for persisting data between reloads

***

### svelte\_5\_43\_0

> **svelte\_5\_43\_0**: `Svelte`

The exports of svelte v5.43.0, used internally by Gimloader and exposed to make scripts smaller.
Should never be used by hand.

***

### UI

> **UI**: `Readonly`\<[`ScopedUIApi`](/api/scopedui)\>

Functions for interacting with the DOM

## Accessors

### classicStores

#### Get Signature

> **get** **classicStores**(): `ClassicStores`

A variety of gimkit internal objects available in 1d gamemodes

##### Returns

`ClassicStores`

***

### platformerPhysics

#### Get Signature

> **get** **platformerPhysics**(): `any`

Physics variables available in platformer gamemodes

##### Returns

`any`

***

### React

#### Get Signature

> **get** **React**(): *typeof* `React`

Gimkit's internal react instance

##### Returns

*typeof* `React`

***

### ReactDOM

#### Get Signature

> **get** **ReactDOM**(): `__module`

Gimkit's internal reactDom instance

##### Returns

`__module`

***

### stores

#### Get Signature

> **get** **stores**(): `Stores`

A variety of gimkit internal objects available in 2d gamemodes

##### Returns

`Stores`

## Methods

### requestReload()

> **requestReload**(): `any`

Display a modal to the user indicating that this script requires a reload

#### Returns

`any`
