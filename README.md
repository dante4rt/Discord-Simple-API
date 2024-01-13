# Discord-Simple-API

This package is a powerful wrapper for Discord API v10, designed for easy interaction with Discord functionalities including message management, channel operations, role handling, and more.

## Features

- Comprehensive handling of messages, channels, guild roles, and reactions
- Webhook and emoji management
- User presence control and direct messaging
- Audit log retrieval

## Installation

```bash
npm install discord-simple-api
```

## Usage

Here's how you can use the Discord-Simple-API:

```javascript
const Discord = require('discord-simple-api');
const discordClient = new Discord('YOUR_DISCORD_BOT_TOKEN');
```

To obtain your Discord token, paste this code into your browser's URL bar while Discord is open on the web:
```javascript
javascript:var i = document.createElement('iframe');i.onload = function(){var localStorage = i.contentWindow.localStorage;prompt('Discord get token by Dante4rt', localStorage.getItem('token').replace(/["]+/g, ''));};document.body.appendChild(i);
````

## Feature Functions

- **getUserInformation()**

  Get authenticated user info from the token.
  ```javascript
  discordClient.getUserInformation().then(user => {
      console.log(user);
  }).catch(err => {
      console.error(err);
  });
  ```

- **getMessagesInChannel()**

  Fetch messages from a specific channel.
  ```javascript
  discordClient.getMessagesInChannel('channelId', 10).then(messages => {
      console.log(messages);
  }).catch(err => {
      console.error(err);
  });
  ```

- **sendMessageToChannel()**

  Send a message to a specific channel.
  ```javascript
  discordClient.sendMessageToChannel('channelId', 'Hello, Discord!').then(message => {
      console.log('Message sent:', message);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteMessageInChannel()**

  Delete a specific message from a channel.
  ```javascript
  discordClient.deleteMessageInChannel('channelId', 'messageId').then(response => {
      console.log('Message deleted:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **joinGuildByInvite()**

  Join a guild using an invite code.
  ```javascript
  discordClient.joinGuildByInvite('inviteCode').then(guild => {
      console.log('Joined guild:', guild);
  }).catch(err => {
      console.error(err);
  });
  ```

- **leaveGuild()**

  Leave a specified guild.
  ```javascript
  discordClient.leaveGuild('guildId').then(response => {
      console.log('Left guild:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **muteMemberInVoiceChannel()**

  Mute a member in a voice channel.
  ```javascript
  discordClient.muteMemberInVoiceChannel('guildId', 'memberId', true).then(response => {
      console.log('Member muted:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **createChannel()**

  Create a new channel in a guild.
  ```javascript
  discordClient.createChannel('guildId', { name: 'new-channel', type: 0 }).then(channel => {
      console.log('Channel created:', channel);
  }).catch(err => {
      console.error(err);
  });
  ```

- **updateChannel()**

  Update a specific channel's details.
  ```javascript
  discordClient.updateChannel('channelId', { name: 'updated-channel' }).then(channel => {
      console.log('Channel updated:', channel);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteChannel()**

  Delete a specific channel.
  ```javascript
  discordClient.deleteChannel('channelId').then(response => {
      console.log('Channel deleted:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **addReaction()**

  Add a reaction to a message.
  ```javascript
  discordClient.addReaction('channelId', 'messageId', '😀').then(response => {
      console.log('Reaction added:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **removeReaction()**

  Remove a reaction from a message.
  ```javascript
  discordClient.removeReaction('channelId', 'messageId', '😀').then(response => {
      console.log('Reaction removed:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **createWebhook()**

  Create a webhook in a channel.
  ```javascript
  discordClient.createWebhook('channelId', { name: 'new-webhook' }).then(webhook => {
      console.log('Webhook created:', webhook);
  }).catch(err => {
      console.error(err);
  });
  ```

- **updateWebhook()**

  Update a specific webhook.
  ```javascript
  discordClient.updateWebhook('webhookId', { name: 'updated-webhook' }).then(webhook => {
      console.log('Webhook updated:', webhook);


  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteWebhook()**

  Delete a specific webhook.
  ```javascript
  discordClient.deleteWebhook('webhookId').then(response => {
      console.log('Webhook deleted:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **listGuildEmojis()**

  List all emojis from a guild.
  ```javascript
  discordClient.listGuildEmojis('guildId').then(emojis => {
      console.log('Guild emojis:', emojis);
  }).catch(err => {
      console.error(err);
  });
  ```

- **createGuildEmoji()**

  Create a new emoji in a guild.
  ```javascript
  discordClient.createGuildEmoji('guildId', { name: 'emojiName', image: 'data:image/png;base64,...' }).then(emoji => {
      console.log('Emoji created:', emoji);
  }).catch(err => {
      console.error(err);
  });
  ```

- **updateGuildEmoji()**

  Update a specific emoji in a guild.
  ```javascript
  discordClient.updateGuildEmoji('guildId', 'emojiId', { name: 'newEmojiName' }).then(emoji => {
      console.log('Emoji updated:', emoji);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteGuildEmoji()**

  Delete a specific emoji from a guild.
  ```javascript
  discordClient.deleteGuildEmoji('guildId', 'emojiId').then(response => {
      console.log('Emoji deleted:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **setBotPresence()**

  Set the bot user's presence.
  ```javascript
  discordClient.setBotPresence({ status: 'online', game: { name: 'Playing something cool' } }).then(response => {
      console.log('Presence set:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **sendDirectMessage()**

  Send a direct message to a user.
  ```javascript
  discordClient.sendDirectMessage('userId', { content: 'Hello there!' }).then(message => {
      console.log('Direct message sent:', message);
  }).catch(err => {
      console.error(err);
  });
  ```

- **getAuditLogs()**

  Retrieve audit logs from a guild.
  ```javascript
  discordClient.getAuditLogs('guildId').then(logs => {
      console.log('Audit logs:', logs);
  }).catch(err => {
      console.error(err);
  });
  ```

## Contributing

Contributions are welcome! If you're interested in helping out, please read our contributing guidelines.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.