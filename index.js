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
    try {
      const url = this.baseURL + '/users/@me';
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Get messages in a channel
  async getMessagesInChannel(channelId, limit) {
    try {
      const url = `${this.baseURL}/channels/${channelId}/messages?limit=${limit}`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Send a message to a channel
  async sendMessageToChannel(channelId, message) {
    try {
      const data = { content: message };
      const url = `${this.baseURL}/channels/${channelId}/messages`;
      const response = await axios.post(url, data, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Delete a message in a channel
  async deleteMessageInChannel(channelId, messageId) {
    try {
      const url = `${this.baseURL}/channels/${channelId}/messages/${messageId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Join a guild by invite code
  async joinGuildByInvite(inviteCode) {
    try {
      const data = {};
      const url = `${this.baseURL}/invites/${inviteCode}`;
      const response = await axios.post(url, data, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Leave a guild
  async leaveGuild(guildId) {
    try {
      const url = `${this.baseURL}/users/@me/guilds/${guildId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Retrieve a list of roles in a guild
  async getGuildRoles(guildId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Add a role to a guild member
  async addRoleToMember(guildId, memberId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      const response = await axios.put(url, {}, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Remove a role from a guild member
  async removeRoleFromMember(guildId, memberId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Create a new role in a guild
  async createGuildRole(guildId, roleData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles`;
      const response = await axios.post(url, roleData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Update a guild role
  async updateGuildRole(guildId, roleId, roleData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
      const response = await axios.patch(url, roleData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Delete a guild role
  async deleteGuildRole(guildId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Mute a member in a voice channel
  async muteMemberInVoiceChannel(guildId, memberId, mute = true) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}`;
      const data = { mute };
      const response = await axios.patch(url, data, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Create a channel
  async createChannel(guildId, channelData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/channels`;
      const response = await axios.post(url, channelData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Update a channel
  async updateChannel(channelId, channelData) {
    try {
      const url = `${this.baseURL}/channels/${channelId}`;
      const response = await axios.patch(url, channelData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Delete a channel
  async deleteChannel(channelId) {
    try {
      const url = `${this.baseURL}/channels/${channelId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Add a reaction to a message
  async addReaction(channelId, messageId, emoji) {
    try {
      const url = `${
        this.baseURL
      }/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(
        emoji
      )}/@me`;
      const response = await axios.put(url, {}, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Remove a reaction from a message
  async removeReaction(channelId, messageId, emoji) {
    try {
      const url = `${
        this.baseURL
      }/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(
        emoji
      )}/@me`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Create a webhook
  async createWebhook(channelId, webhookData) {
    try {
      const url = `${this.baseURL}/channels/${channelId}/webhooks`;
      const response = await axios.post(url, webhookData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Update a webhook
  async updateWebhook(webhookId, webhookData) {
    try {
      const url = `${this.baseURL}/webhooks/${webhookId}`;
      const response = await axios.patch(url, webhookData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Delete a webhook
  async deleteWebhook(webhookId) {
    try {
      const url = `${this.baseURL}/webhooks/${webhookId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // List guild emojis
  async listGuildEmojis(guildId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/emojis`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Create a guild emoji
  async createGuildEmoji(guildId, emojiData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/emojis`;
      const response = await axios.post(url, emojiData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Update a guild emoji
  async updateGuildEmoji(guildId, emojiId, emojiData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/emojis/${emojiId}`;
      const response = await axios.patch(url, emojiData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Delete a guild emoji
  async deleteGuildEmoji(guildId, emojiId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/emojis/${emojiId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Set bot user's presence
  async setBotPresence(presenceData) {
    try {
      const url = `${this.baseURL}/users/@me/settings`;
      const response = await axios.patch(url, presenceData, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Send a direct message
  async sendDirectMessage(userId, messageData) {
    try {
      const url = `${this.baseURL}/users/@me/channels`;
      const channelResponse = await axios.post(
        url,
        { recipient_id: userId },
        this.headers
      );
      const channelId = channelResponse.data.id;
      return this.sendMessageToChannel(channelId, messageData.content);
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }

  // Retrieve audit logs
  async getAuditLogs(guildId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/audit-logs`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }
}

module.exports = Discord;
