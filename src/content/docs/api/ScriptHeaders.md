---
title: ScriptHeaders Type
description: Documentation for Gimloader's ScriptHeaders Type
topic: development
sidebar:
  hidden: true
---

# Interface: ScriptHeaders

## Properties

### author

> **author**: `string`[]

The authors who created this script

***

### changelog

> **changelog**: `string`[]

Changes which have been made since the previous version

***

### deprecated

> **deprecated**: `string` \| `null`

A message explaining why this script has been deprecated if it has been

***

### description

> **description**: `string`

A description of this script

***

### downloadUrl

> **downloadUrl**: `string` \| `null`

A URL which the raw code of this script can be downloaded from

***

### gamemode

> **gamemode**: `string`[]

Gamemodes in which this script's `net.onLoad` callbacks will fire when playing

***

### hasSettings

> **hasSettings**: `string`

Whether this script has a settings menu. Only available to plugins.

***

### isLibrary

> **isLibrary**: `string`

Whether this script is a library

***

### name

> **name**: `string`

The name of this script

***

### needsLib

> **needsLib**: `string`[]

Libraries which this script depends on

***

### needsPlugin

> **needsPlugin**: `string`[]

Plugins which this script depends on. Only available to plugins.

***

### optionalLib

> **optionalLib**: `string`[]

Libraries which this script may use, but does not require

***

### reloadRequired

> **reloadRequired**: `string`

`true` if this script always requires a reload when enabled after startup.
`ingame` if this script requires a reload when enabled while in a game.

***

### signature

> **signature**: `string` \| `null`

A signature included in official plugins to prove authenticity

***

### version

> **version**: `string` \| `null`

The current version of this script, ideally in the format `x.y.z`

***

### webpage

> **webpage**: `string` \| `null`

The URL of a webpage providing information about this script
