---
title: Settings Api
description: Documentation for Plugin Settings Api
---
# [ScopedApi](/api/scopedapi).settings

## Get/Set

Getting or setting any value on the settings api will get/set the value of the setting with the corresponding id, if it exists.

## Methods

### listen()

> **listen**(`key`, `callback`): () => `void`

Fires a callback whenever a setting changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `callback` | (`value`, `remote`) => `void` |

#### Returns

`Function`

A function to stop listening

***

### create()

> **create**(`description`): `void`

Initializes the settings menu for the script

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `(PluginSetting \| SettingGroup)[]` |

#### Settings

All settings (aside from "custom" and "group") inherit these properties.

| Property | Type | Description |
| ------ | ------ | ----- |
| `id` | `string` | The key which can be used to access the value of setting |
| `title` | `string` | The title of the setting in the settings menu |
| `description`? | `string` | A description for the setting in the settings menu |
| `default`? | `T` | The default value of the setting |
| `onChange`? | (`value`, `remote`) => `void` | A callback that fires when the setting changes |

| Setting | Type | Options | Notes |
| ----- | ----- | ----- | ------ |
| dropdown | `string` | `options`: `{ label: string; value: string }[]`<br>`allowNone`?: `boolean` |
| multiselect | `string[]` | `options`: `{ label: string; value: string }[]` |
| number | `number` | `min`?: `number`<br>`max`?: `number`<br>`step`?: `number` |
| toggle | `boolean` |
| text | `string` | `placeholder`?: `string`<br>`maxLength`?: `number` |
| slider | `number` | `min`: `number`<br>`max`: `number`<br>`step`?: `number`<br>`ticks`?: `number[]`<br>`formatter`?: `(value: number) => string` | Ticks are placed at the start and end by default |
| radio | `string` | `options`: `{ label: string; value: string }[]` |
| color | `string` | `rgba`?: `boolean` | When rgba is true, the value takes the form `rgba(100,120,140,0.5)`. Otherwise it is a hex code. |
| custom | `any` | `render`: `SettingRenderer` |
| customsection | `any` | `render`: `SettingRenderer` | Custom sections do not have a built-in title or description. |
| group | `N/A` | `title`: `string`<br>`settings`: `PluginSetting[]` |

The "custom" and "customsection" settings require a `render` function, which looks like so: `(container: HTMLElement, currentValue: any, update: (newValue: any) => void) => (() => void) | void`. The function can return a callback to be run when the element is unmounted.

#### Returns

`void`