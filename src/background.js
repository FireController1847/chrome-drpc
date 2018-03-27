let client = require('discord-rich-presence/browser');
console.log(client);
client = client('415350412472745984');
console.log(client);
client.on('error', console.error);
client.updatePresence({
  state: 'slithering',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  instance: true
});