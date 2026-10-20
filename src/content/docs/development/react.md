---
title: Modifying Gimkit's UI
description: An explanation of how to modify Gimkit's UI with a plugin
---

The `rewriter` api offers several powerful ways to modify Gimkit's UI. The simplest of these is [addParseHook](/api/rewriter/#addparsehook), which allows for direct modification of Gimkit's code. However, this comes at the cost of being difficult to read and requiring a reload before changes can take effect. Instead, [exposeVar](http://localhost:4321/api/rewriter/#exposevar) is recommended in conjunction with the react methods from the [patcher](/api/patcher/) api. Here is an example plugin which will be explained to give an understanding of how this generally works.

## Example Plugin

This plugin replaces the "Creative" title on the Gimkit Creative page with "Awesome Edition".

```js
api.rewriter.exposeVar("App-", {
    check: "Welcome to Gimkit Creative",
    find: /`800px`},\w{1,3}=\w{1,3}\(\),(\w{1,3})=/,
    callback: (component, initial) => {        
        api.patcher.afterReact(component, (thisVal, args, returnVal) => {
            const newText = "Awesome Edition";
            returnVal.props.children[0].props.children[1].props.children = newText;
        });

        if(!initial) api.UI.forceReactUpdate();
        api.onStop(() => api.UI.forceReactUpdate());
    }
});
```

## Breakdown

#### Finding the component in devtools

Before patching a component you need to locate it in the code. This is often achieved through react devtools, mentioned in the [devtools](/development/devtools/) section of this guide. You can also search strings which appear on the page nearby- in this case, searching "Welcome to Gimkit Creative" was enough to locate the component.

<details>
<summary>The code around the relevant component</summary>

```js
var U = e(u())
, W = {
    width: `90%`,
    maxWidth: `800px`
}
, G = D()
, le = () => (0, // "le" is the component we care about
G.jsxs)(ue, {
    children: [(0,
    G.jsxs)(de, {
        children: [(0,
        G.jsx)(fe, {
            src: `/client/img/svgLogoWhite.svg`
        }), (0,
        G.jsx)(pe, {
            children: `Creative`
        })]
    }), (0,
    G.jsx)(me, {
        children: (0,
        G.jsx)(ce, {
            children: `Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!`
        })
    })]
})
```
</details>

#### exposeVar

First, the component is then exposed through `exposeVar`. This requires creating regex which returns the name of the component as its first group. In this case, the regex is ``/`800px`},\w{1,3}=\w{1,3}\(\),(\w{1,3})=/``. This matches the string "800px", then a closing object, then a variable being set to the result of a function, then finally returns the name of the following variable. `exposeVar` also optionally takes a `check` option, which requires that a string be present in the file in order to run the regex.

#### afterReact

Next, the plugin patches the function with `afterReact`. This causes a function to be run after the component is rendered. In this case, the function replaces `returnVal.props.children[0].props.children[1].props.children` with "Awesome Edition". When finding the thing you want to modify it is usually easiest to log the returnValue to the console and then look through `props` and `children`.

#### forceReactUpdate

Finally, the plugin may force a react update, which causes the entire component tree to be re-rendered. This is only necessary if the plugin has loaded after the UI is already rendered. This is given to the `exposeVar` callback through the second `initial` argument. The plugin also forces a react update when it is stopped, which causes the change to be immediately undone. It is worth noting that `forceReactUpdate` waits an event loop before executing, so it may also be placed at the top of the function.