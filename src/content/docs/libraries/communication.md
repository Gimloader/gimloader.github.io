---
title: Communication
description: A Gimloader library that allows multiple clients in a 2d room to send messages to each other
---

Communication is a runtime library that allows plugins to set up isolated messaging with other clients in the lobby. It does this by "aiming" your character (which fortunately works even when you don't have a projectile) and sending a long float that converts to 8 bytes. It's important to note that this method requires headers, identifiers, angle distribution and server approval waiting, so **it can be slow** and you should be mindful of how messages are sent.

When you send a boolean or a positive integer that is less than 256, the message can be sent into a singular message. This should be the preferred message type whenever you can fit your data into it. Other messages you can send include any other type of number, a string, an array, or an object (stringified). The speed it takes to send is around `ping * (1 + (messageLength / 7))` - if the ping is 50, sending "Hello World, this is my new message" would take around 300 ms.

## Usage

```js
/**
 * @needsLib Communication | https://raw.githubusercontent.com/Gimloader/client-plugins/main/build/libraries/Communication.js
 */

api.net.onLoad(async () => {
    const Communication = api.lib("Communication");
    // Communication converts this string to an identifier under the hood so different plugins don't get in the way of each other
    const communication = new Communication("PluginName");

    // Cleans up all the callbacks that were registered
    api.onStop(communication.destroy);

    communication.onMessage((message, player) => {
        console.log(player.name, "sent a message:", message);
    })

    communication.onEnabled(() => {
        console.log("Communication is enabled");
        // Send a message
        communication.send("Hello world");
    });

    // Static class property: enabled
    if(Communication.enabled) {
        console.log("Communication is enabled initially");
    }

    // `send` is async
    await communication.send(2);
})
```

## Notes

- You can unfortunately not send messages in the lobby, use `Comms.enabled` to determine if you are in the lobby.
- Do not do `api.net.room.state.characters.onAdd(() => comms.send("Hello new player!"))` because `onAdd` is not necessarily the moment where the player can listen to messages. Instead, create a message for players to send once they have joined the lobby, and respond based on that message.
- If multiple plugins send messages at the same time, a message queue will be put in place to avoid messages being dropped by the server, and messages may be delayed.
- When sending strings, characters with codes larger than 255 will be filtered out.
- You can create multiple instances of Communication with different names if you need multiple "channels".