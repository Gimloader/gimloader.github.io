---
title: Scoped Api
description: Documentation for the Scoped Api
prev: false
---
A scoped api is available to all scripts with the `api` variable.

## Properties

### hotkeys

> **hotkeys**: `Readonly`\<[`ScopedHotkeysApi`](/api/scopedhotkeys)\>

Functions to listen for key combinations

***

### lib()

> **lib**: (`name`) => `any` = `Api.libs.get`

Gets the exported values of a library

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

***

### libs

> **libs**: `Readonly`\<[`LibsApi`](/api/libs)\> = `Api.libs`

Methods for getting info on libraries

***

### net

> **net**: `Readonly`\<[`ScopedNetApi`](/api/scopednet)\>

Ways to interact with the current connection to the server,
and functions to send general requests

***

### onStop()

> **onStop**: (`callback`) => `void`

Run a callback when the plugin or library is disabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

### openSettingsMenu()

> **openSettingsMenu**: (`callback`) => `void`

Run a callback when the plugin's settings menu button is clicked

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

> **plugin**: (`name`) => `any` = `Api.plugins.get`

Gets the exported values of a plugin, if it has been enabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

***

### plugins

> **plugins**: `Readonly`\<[`PluginsApi`](/api/plugins)\> = `Api.plugins`

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

### UI

> **UI**: `Readonly`\<[`ScopedUIApi`](/api/scopedui)\>

Functions for interacting with the DOM

## Accessors

### notification

#### Get Signature

> **get** **notification**(): `any`

Gimkit's notification object, only available when joining or playing a game

[https://ant.design/components/notification](https://ant.design/components/notification)

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
