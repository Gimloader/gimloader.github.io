---
title: Gimkit's Internals
description: An overview of important libraries Gimkit uses
---

In order to be able to effectively make scripts it's important to understand what Gimkit uses so you can leverage its documentation rather that attempting to reverse engineer everything on your own.

## Important Libraries

This list is not exhaustive, but it covers the libraries most relevant to script development.

| Library | Purpose |
| ------- | ------- |
| [Phaser](https://phaser.io/) | Game framework |
| [Rapier](https://rapier.rs/) | Physics engine for 2d gamemodes |
| [Colyseus](https://colyseus.io/) | Networking for 2d gamemodes |
| [Spine](https://esotericsoftware.com/) | Characters in 2d modes |
| [Compress-Json](https://github.com/beenotung/compress-json) | Compressing character model data |
| [React](https://react.dev/) | UI Framework |
| [Ant Design](https://ant.design) | UI Components |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Mobx](https://mobx.js.org/) | State management |
| [Blueboat](https://github.com/Gimkit/blueboat) | Networking for 1d games |
| [howler.js](https://howlerjs.com/) | Audio |