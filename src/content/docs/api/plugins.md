---
title: Global Plugins Api
description: Documentation for the Global Plugins Api
---
# [GL](/api/api).plugins

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

> **getHeaders**(`name`): `ScriptHeaders`

Gets the headers of a plugin, such as version, author, and description

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`ScriptHeaders`

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
