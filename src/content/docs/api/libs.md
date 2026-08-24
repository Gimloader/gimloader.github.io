---
title: Libs Api
description: Documentation for Gimloader's Libs Api
---

# [api](/api/api).libs

Methods for getting info on libraries

## Accessors

### list

#### Get Signature

> **get** **list**(): `string`[]

A list of all the libraries installed

##### Returns

`string`[]

## Methods

### get()

> **get**\<`T`\>(`name`): `Libraries`\[`T`\]

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

### getHeaders()

> **getHeaders**(`name`): [`ScriptHeaders`](/api/ScriptHeaders) \| `null`

Gets the headers of a library, such as version, author, and description

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`ScriptHeaders`](/api/ScriptHeaders) \| `null`

***

### isEnabled()

> **isEnabled**(`name`): `boolean`

Gets whether or not a plugin is installed and enabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

***

### require()

> **require**\<`T`\>(`name`, `downloadUrl?`): `Promise`\<`Libraries`\[`T`\]\>

Gets a library by name, prompting the user to enable/download it if necessary. Returns a promise with its exports.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `T` |
| `downloadUrl?` | `string` |

#### Returns

`Promise`\<`Libraries`\[`T`\]\>

#### Example

```js
api.libs.require("Communication", "https://raw.githubusercontent.com/Gimloader/builds/main/libraries/Communication.js");
```
