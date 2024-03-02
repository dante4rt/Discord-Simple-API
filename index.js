const axios = require('axios');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

class Discord {
  constructor(token) {
    if (!token) {
      logger.error('No Discord token provided');
      throw new Error('Please provide a Discord token');
    }

    this.baseURL = 'https://discord.com/api/v10';
    this.headers = { headers: { Authorization: `Bot ${token}` } };
  }

  async getUserInformation() {
    try {
      const url = `${this.baseURL}/users/@me`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error fetching user information: ' + error.message);
      throw error;
    }
  }

  async getMessagesInChannel(channelId, limit) {
    try {
      const url = `${this.baseURL}/channels/${channelId}/messages?limit=${limit}`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error fetching messages in channel: ' + error.message);
      throw error;
    }
  }

  async sendMessageToChannel(channelId, message) {
    try {
      const data = { content: message };
      const url = `${this.baseURL}/channels/${channelId}/messages`;
      const response = await axios.post(url, data, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error sending message to channel: ' + error.message);
      throw error;
    }
  }

  async deleteMessageInChannel(channelId, messageId) {
    try {
      const url = `${this.baseURL}/channels/${channelId}/messages/${messageId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error deleting message in channel: ' + error.message);
      throw error;
    }
  }

  async joinGuildByInvite(inviteCode) {
    try {
      const data = {};
      const url = `${this.baseURL}/invites/${inviteCode}`;
      const response = await axios.post(url, data, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error joining guild by invite: ' + error.message);
      throw error;
    }
  }

  async leaveGuild(guildId) {
    try {
      const url = `${this.baseURL}/users/@me/guilds/${guildId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error leaving guild: ' + error.message);
      throw error;
    }
  }

  async getGuildRoles(guildId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles`;
      const response = await axios.get(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error retrieving guild roles: ' + error.message);
      throw error;
    }
  }

  async addRoleToMember(guildId, memberId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      const response = await axios.put(url, {}, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error adding role to member: ' + error.message);
      throw error;
    }
  }

  async removeRoleFromMember(guildId, memberId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error removing role from member: ' + error.message);
      throw error;
    }
  }

  async createGuildRole(guildId, roleData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles`;
      const response = await axios.post(url, roleData, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error creating guild role: ' + error.message);
      throw error;
    }
  }

  async updateGuildRole(guildId, roleId, roleData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
      const response = await axios.patch(url, roleData, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error updating guild role: ' + error.message);
      throw error;
    }
  }

  async deleteGuildRole(guildId, roleId) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/roles/${roleId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error deleting guild role: ' + error.message);
      throw error;
    }
  }

  async muteMemberInVoiceChannel(guildId, memberId, mute = true) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/members/${memberId}`;
      const data = { mute };
      const response = await axios.patch(url, data, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error muting member in voice channel: ' + error.message);
      throw error;
    }
  }

  async createChannel(guildId, channelData) {
    try {
      const url = `${this.baseURL}/guilds/${guildId}/channels`;
      const response = await axios.post(url, channelData, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error creating channel: ' + error.message);
      throw error;
    }
  }

  async updateChannel(channelId, channelData) {
    try {
      const url = `${this.baseURL}/channels/${channelId}`;
      const response = await axios.patch(url, channelData, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error updating channel: ' + error.message);
      throw error;
    }
  }

  async deleteChannel(channelId) {
    try {
      const url = `${this.baseURL}/channels/${channelId}`;
      const response = await axios.delete(url, this.headers);
      return response.data;
    } catch (error) {
      logger.error('Error deleting channel: ' + error.message);
      throw error;
    }
  }

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
      logger.error('Error adding reaction to message: ' + error.message);
      throw error;
    }
  }

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
      logger.error('Error removing reaction from message: ' + error.message);
      throw error;
    }
  }
}

module.exports = Discord;
