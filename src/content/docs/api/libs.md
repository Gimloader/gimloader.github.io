---
title: Global Libs Api
description: Documentation for the Global Libs Api
---
# [GL](/api/api).libs

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

> **getHeaders**(`name`): `ScriptHeaders`

Gets the headers of a library, such as version, author, and description

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`ScriptHeaders`

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
