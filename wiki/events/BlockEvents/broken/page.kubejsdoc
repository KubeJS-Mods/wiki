This event is triggered whenever a block is broken.

Here's an example, where whenever the user breaks a block, they will see "(username) broke (block)" in the chat.

```js
BlockEvents.broken(event => {
  event.player.tell(`${event.getEntity().getName().getString()} broke a ${event.getBlock()}`)
})
```

To get the player that broke a block, use the method `getEntity()`, to get the block that was broken, use the method `getBlock()`
