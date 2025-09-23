---
title: Scoped Plugins Api
description: Documentation for the Scoped Plugins Api
---
# [ScopedApi](/api/scopedapi).plugins

## Accessors

### list

#### Get Signature

> **get** **list**(): `string`[]

A list of all the plugins installed

##### Returns

`string`[]

## Methods

### get()

> **get**(`name`): `any`

Gets the exported values of a plugin, if it has been enabled

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

***

### getHeaders()

> **getHeaders**(`name`): `object`

Gets the headers of a plugin, such as version, author, and description

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`object`

##### author

> **author**: `string`

##### description

> **description**: `string`

##### downloadUrl

> **downloadUrl**: `string`

##### hasSettings

> **hasSettings**: `string`

Only available for plugins

##### isLibrary

> **isLibrary**: `string`

##### name

> **name**: `string`

##### needsLib

> **needsLib**: `string`[]

##### optionalLib

> **optionalLib**: `string`[]

##### reloadRequired

> **reloadRequired**: `string`

##### syncEval

> **syncEval**: `string`

##### version

> **version**: `string`

##### webpage

> **webpage**: `string`

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
