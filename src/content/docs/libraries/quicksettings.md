---
title: QuickSettings
description: A Gimloader library that makes it easy to make a settings menu for plugins
next: false
---

QuickSettings exposes an easy api to add a settings menu to your plugin. Settings are automatically saved when changed. The supported elements are `heading`, `boolean`, `number`, `text`, and `dropdown`. All options can be seen below.

## Usage

```js
/**
 * @needsLib QuickSettings | https://raw.githubusercontent.com/Gimloader/client-plugins/main/build/libraries/QuickSettings.js
 */

// Create a settings menu that this plugin can use
const settings = api.lib("QuickSettings")("MyPlugin", [
    {
        type: "heading",
        text: "Some Settings"
    },
    {
        type: "boolean",
        id: "bool",
        title: "A boolean!",
        default: true
    },
    {
        type: "number",
        id: "num",
        title: "A number!",
        default: 10,
        min: 0,
        max: 100,
        step: 1
    },
    {
        type: "text",
        id: "name",
        title: "Your name",
        maxLength: 18,
        default: "Josh"
    },
    {
        type: "dropdown",
        id: "difficulty",
        title: "Difficulty",
        options: [
            "Easy",
            "Medium",
            "Hard"
        ],
        default: "Medium"
    }
]);

// Listen to changes to settings
settings.listen("bool", (val) => console.log("bool changed to", val));
settings.listen("num", (val) => console.log("num changed to", val));
settings.listen("name", (val) => console.log("name changed to", val));
settings.listen("difficulty", (val) => console.log("difficulty changed to", val));

// Get the value of settings
console.log("The boolean is", settings.bool);
console.log("The number is", settings.num);
console.log("The name is", settings.name);
console.log("The difficulty is", settings.difficulty);

// Register the openSettingsMenu function
api.openSettingsMenu(settings.openSettingsMenu);
```
