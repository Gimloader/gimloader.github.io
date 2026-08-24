---
title: Plugins Api
description: Documentation for Gimloader's Plugins Api
---

# [api](/api/api).plugins

Methods for getting info on plugins

## Accessors

### list

#### Get Signature

> **get** **list**(): `string`[]

A list of all the plugins installed

##### Returns

`string`[]

## Methods

### get()

> **get**\<`T`\>(`name`): `Plugins`\[`T`\]

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

### getHeaders()

> **getHeaders**(`name`): [`ScriptHeaders`](/api/ScriptHeaders) \| `null`

Gets the headers of a plugin, such as version, author, and description

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`ScriptHeaders`](/api/ScriptHeaders) \| `null`

***

### isEnabled()

> **isEnabled**(`name`): `boolean`

Whether a plugin exists and is enabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

***

### require()

> **require**\<`T`\>(`name`, `downloadUrl?`): `Promise`\<`Plugins`\[`T`\]\>

Gets a plugin by name, prompting the user to enable/download it if necessary. Returns a promise with its exports

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

`Promise`\<`Plugins`\[`T`\]\>

#### Example

```js
api.libs.require("Desynchronize", "https://raw.githubusercontent.com/Gimloader/builds/main/plugins/Desynchronize.js");
```
