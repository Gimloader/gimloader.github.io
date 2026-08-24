---
title: Script Api
description: Documentation for Gimloader's Script Api
---

# Script Api

The Gimloader api which is exposed to scripts via the `api` variable.
Contains many utilities for things like interacting with Gimkit and user interaction.

## Properties

### commands

> **commands**: `Readonly`\<[`commands`](/api/commands)\>

Functions for adding commands to the command palette

***

### Components

> **Components**: [`SvelteComponents`](/api/SvelteComponents)

Useful svelte components which can be used by scripts

***

### headers

> **headers**: `Readonly`\<[`ScriptHeaders`](/api/ScriptHeaders)\>

The headers containing this script's metadata

***

### hotkeys

> **hotkeys**: `Readonly`\<[`hotkeys`](/api/hotkeys)\>

Functions to listen for key combinations

***

### lib

> **lib**: \<`T`\>(`name`) => `Libraries`\[`T`\]

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

> **libs**: `Readonly`\<[`libs`](/api/libs)\>

Methods for getting info on libraries

***

### logger

> **logger**: `Readonly`\<[`logger`](/api/logger)\>

Utilities for pretty logs with a tag showing they are from this script

***

### net

> **net**: `Readonly`\<[`net`](/api/net)\>

Functions to interact with the current connection to the server

***

### openSettingsMenu

> **openSettingsMenu**: (...`callbacks`) => `void`

Run a callback when this plugin's settings menu button is clicked

This function is not available for libraries

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`callbacks` | () => `void`[] |

#### Returns

`void`

***

### patcher

> **patcher**: `Readonly`\<[`patcher`](/api/patcher)\>

Functions for intercepting the arguments and return values of functions

***

### plugin

> **plugin**: \<`T`\>(`name`) => `Plugins`\[`T`\]

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

> **plugins**: `Readonly`\<[`plugins`](/api/plugins)\>

Methods for getting info on plugins

***

### rewriter

> **rewriter**: `Readonly`\<[`rewriter`](/api/rewriter)\>

Functions to edit Gimkit's code or to expose internals

***

### settings

> **settings**: [`settings`](/api/settings)

A utility for creating persistent settings menus, only available to plugins

***

### storage

> **storage**: `Readonly`\<[`storage`](/api/storage)\>

Functions for persisting data between reloads

***

### svelte\_5\_43\_0

> **svelte\_5\_43\_0**: `SvelteExport`

The exports of svelte v5.43.0, used internally by Gimloader and exposed to make scripts smaller.
Should never be used by hand.

***

### UI

> **UI**: `Readonly`\<[`UI`](/api/UI)\>

Functions for interacting with user interfaces

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

### cleanup()

> **cleanup**(): `void`

Cleans up everything performed through this script's api

#### Returns

`void`

***

### onStop()

> **onStop**(...`callbacks`): `void`

Run a callback when this script is disabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`callbacks` | () => `void`[] |

#### Returns

`void`

***

### requestReload()

> **requestReload**(): `any`

Display a modal to the user indicating that this script requires a reload

#### Returns

`any`
