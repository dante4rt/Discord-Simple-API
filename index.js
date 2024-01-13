const axios = require('axios');

class Discord {
  constructor(token) {
    if (!token) {
      throw new Error('Please provide a Discord token');
    }

    this.baseURL = 'https://discord.com/api/v10';
    this.headers = { headers: { authorization: token } };
  }

  // Get user information
  async getUserInformation() {
    const url = this.baseURL + '/users/@me';
    const response = await axios.get(url, this.headers);
    return response.data;
  }

  // Get messages in a channel
  async getMessagesInChannel(channelId, limit) {
    const url = `${this.baseURL}/channels/${channelId}/messages?limit=${limit}`;
    const response = await axios.get(url, this.headers);
    return response.data;
  }

  // Send a message to a channel
  async sendMessageToChannel(channelId, message) {
    const data = { content: message };
    const url = `${this.baseURL}/channels/${channelId}/messages`;
    const response = await axios.post(url, data, this.headers);
    return response.data;
  }

  // Delete a message in a channel
  async deleteMessageInChannel(channelId, messageId) {
    const url = `${this.baseURL}/channels/${channelId}/messages/${messageId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Join a guild by invite code
  async joinGuildByInvite(inviteCode) {
    const data = {};
    const url = `${this.baseURL}/invites/${inviteCode}`;
    const response = await axios.post(url, data, this.headers);
    return response.data;
  }

  // Leave a guild
  async leaveGuild(guildId) {
    const url = `${this.baseURL}/users/@me/guilds/${guildId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Retrieve a list of roles in a guild
  async getGuildRoles(guildId) {
    const url = `${this.baseURL}/guilds/${guildId}/roles`;
    const response = await axios.get(url, this.headers);
    return response.data;
  }

  // Add a role to a guild member
  async addRoleToMember(guildId, memberId, roleId) {
    const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
    const response = await axios.put(url, {}, this.headers);
    return response.data;
  }

  // Remove a role from a guild member
  async removeRoleFromMember(guildId, memberId, roleId) {
    const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Create a new role in a guild
  async createGuildRole(guildId, roleData) {
    const url = `${this.baseURL}/guilds/${guildId}/roles`;
    const response = await axios.post(url, roleData, this.headers);
    return response.data;
  }

  // Update a guild role
  async updateGuildRole(guildId, roleId, roleData) {
    const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
    const response = await axios.patch(url, roleData, this.headers);
    return response.data;
  }

  // Delete a guild role
  async deleteGuildRole(guildId, roleId) {
    const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Mute a member in a voice channel
  async muteMemberInVoiceChannel(guildId, memberId, mute = true) {
    const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}`;
    const data = { mute };
    const response = await axios.patch(url, data, this.headers);
    return response.data;
  }

  // Create a channel
  async createChannel(guildId, channelData) {
    const url = `${this.baseURL}/guilds/${guildId}/channels`;
    const response = await axios.post(url, channelData, this.headers);
    return response.data;
  }

  // Update a channel
  async updateChannel(channelId, channelData) {
    const url = `${this.baseURL}/channels/${channelId}`;
    const response = await axios.patch(url, channelData, this.headers);
    return response.data;
  }

  // Delete a channel
  async deleteChannel(channelId) {
    const url = `${this.baseURL}/channels/${channelId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Add a reaction to a message
  async addReaction(channelId, messageId, emoji) {
    const url = `${
      this.baseURL
    }/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(
      emoji
    )}/@me`;
    const response = await axios.put(url, {}, this.headers);
    return response.data;
  }

  // Remove a reaction from a message
  async removeReaction(channelId, messageId, emoji) {
    const url = `${
      this.baseURL
    }/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(
      emoji
    )}/@me`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Create a webhook
  async createWebhook(channelId, webhookData) {
    const url = `${this.baseURL}/channels/${channelId}/webhooks`;
    const response = await axios.post(url, webhookData, this.headers);
    return response.data;
  }

  // Update a webhook
  async updateWebhook(webhookId, webhookData) {
    const url = `${this.baseURL}/webhooks/${webhookId}`;
    const response = await axios.patch(url, webhookData, this.headers);
    return response.data;
  }

  // Delete a webhook
  async deleteWebhook(webhookId) {
    const url = `${this.baseURL}/webhooks/${webhookId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // List guild emojis
  async listGuildEmojis(guildId) {
    const url = `${this.baseURL}/guilds/${guildId}/emojis`;
    const response = await axios.get(url, this.headers);
    return response.data;
  }

  // Create a guild emoji
  async createGuildEmoji(guildId, emojiData) {
    const url = `${this.baseURL}/guilds/${guildId}/emojis`;
    const response = await axios.post(url, emojiData, this.headers);
    return response.data;
  }

  // Update a guild emoji
  async updateGuildEmoji(guildId, emojiId, emojiData) {
    const url = `${this.baseURL}/guilds/${guildId}/emojis/${emojiId}`;
    const response = await axios.patch(url, emojiData, this.headers);
    return response.data;
  }

  // Delete a guild emoji
  async deleteGuildEmoji(guildId, emojiId) {
    const url = `${this.baseURL}/guilds/${guildId}/emojis/${emojiId}`;
    const response = await axios.delete(url, this.headers);
    return response.data;
  }

  // Set bot user's presence
  async setBotPresence(presenceData) {
    const url = `${this.baseURL}/users/@me/settings`;
    const response = await axios.patch(url, presenceData, this.headers);
    return response.data;
  }

  // Send a direct message
  async sendDirectMessage(userId, messageData) {
    const url = `${this.baseURL}/users/@me/channels`;
    const channelResponse = await axios.post(
      url,
      { recipient_id: userId },
      this.headers
    );
    const channelId = channelResponse.data.id;
    return this.sendMessageToChannel(channelId, messageData.content);
  }

  // Retrieve audit logs
  async getAuditLogs(guildId) {
    const url = `${this.baseURL}/guilds/${guildId}/audit-logs`;
    const response = await axios.get(url, this.headers);
    return response.data;
  }
}

module.exports = Discord;
