---
title: Unscoped Api
description: Documentation for the Unscoped Api
---
The api is accessible via the global variable `GL`. Scripts are also encouraged to use the [scoped API](../scopedapi) which automatically handles cleanup. The scoped api is available with the script-specific `api` variable.
## Properties



### hotkeys

> `static` **hotkeys**: `Readonly`\<[`HotkeysApi`](/api/hotkeys)\>

Functions to listen for key combinations

***

### lib()

> `static` **lib**: \<`T`\>(`name`) => `T`

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

> `static` **libs**: `Readonly`\<[`LibsApi`](/api/libs)\>

Methods for getting info on libraries

***

### net

> `static` **net**: `Readonly`\<[`NetApi`](/api/net) & `Connection`\>

Ways to interact with the current connection to the server,
and functions to send general requests

***

### patcher

> `static` **patcher**: `Readonly`\<[`PatcherApi`](/api/patcher)\>

Functions for intercepting the arguments and return values of functions

***

### plugin()

> `static` **plugin**: \<`T`\>(`name`) => `T`

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

> `static` **plugins**: `Readonly`\<[`PluginsApi`](/api/plugins)\>

Methods for getting info on plugins

***

### rewriter

> `static` **rewriter**: `Readonly`\<[`RewriterApi`](/api/rewriter)\>

Functions to edit Gimkit's code

***

### storage

> `static` **storage**: `Readonly`\<[`StorageApi`](/api/storage)\>

Functions for persisting data between reloads

***

### UI

> `static` **UI**: `Readonly`\<[`UIApi`](/api/ui)\>

Functions for interacting with the DOM

## Accessors



### notification

#### Get Signature

> **get** `static` **notification**(): `any`

Gimkit's notification object, only available when joining or playing a game

[https://ant.design/components/notification](https://ant.design/components/notification)

##### Returns

`any`

***

### React

#### Get Signature

> **get** `static` **React**(): *typeof* `React`

Gimkit's internal react instance

##### Returns

*typeof* `React`

***

### ReactDOM

#### Get Signature

> **get** `static` **ReactDOM**(): `__module`

Gimkit's internal reactDom instance

##### Returns

`__module`

***

### stores

#### Get Signature

> **get** `static` **stores**(): `any`

A variety of Gimkit internal objects available in 2d gamemodes

##### Returns

`any`
