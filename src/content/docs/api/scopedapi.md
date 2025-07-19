---
title: Scoped Api
description: Documentation for the Scoped Api
prev: false
---
A scoped api can be created with `new GL()` within a plugin or library.

## Properties

### hotkeys

> **hotkeys**: `Readonly`\<[`ScopedHotkeysApi`](/api/scopedhotkeys)\>

Functions to listen for key combinations

***

### lib()

> **lib**: \<`T`\>(`name`) => `T` = `Api.libs.get`

Gets the exported values of a library

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`T`

***

### libs

> **libs**: `Readonly`\<[`LibsApi`](/api/libs)\> = `Api.libs`

Methods for getting info on libraries

***

### net

> **net**: `Readonly`\<[`ScopedNetApi`](/api/scopednet) & `Connection`\>

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

> **plugin**: \<`T`\>(`name`) => `T` = `Api.plugins.get`

Gets the exported values of a plugin, if it has been enabled

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`T`

***

### plugins

> **plugins**: `Readonly`\<[`PluginsApi`](/api/plugins)\> = `Api.plugins`

Methods for getting info on plugins

***

### rewriter

> **rewriter**: `Readonly`\<[`ScopedRewriterApi`](/api/scopedrewriter)\>

Functions to edit Gimkit's code

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

> **get** **stores**(): `any`

A variety of gimkit internal objects available in 2d gamemodes

##### Returns

`any`
