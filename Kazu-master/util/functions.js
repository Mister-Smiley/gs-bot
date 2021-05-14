const mongoose = require("mongoose");
const { Guild, User, Profile } = require("../models/index");

module.exports = client => {
  //* Guild
  client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);
    createGuild.save();
  };

  client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return client.config.DEFAULTSETTINGS;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  //* User
  client.createUser = async user => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);
    createUser.save();
  };

  client.getUser = async user => {
    const data = await User.findOne({ userID: user.id });
    if (data) return data;
    else return;
  };

  client.updateUser = async (user, settings) => {
    let data = await client.getUser(user);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  client.addExp = async (client, member, exp) => {
    const userToUpdate = await client.getUser(member);
    const updatedExp = userToUpdate.experience + exp;
    await client.updateUser(member, { experience: updatedExp })
  }

  client.removeExp = async (client, member, exp) => {
    const userToUpdate = await client.getUser(member);
    const updatedExp = userToUpdate.experience - exp;
    await client.updateUser(member, { experience: updatedExp })
  }

  //* profile
  client.createProfile = async profile => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, profile);
    const createProfile = await new Profile(merged);
    createProfile.save();
  };

  client.getProfile = async profile => {
    const data = await Profile.findOne({ profileID: profile.id });
    if (data) return data;
    else return;
  };

  client.updateProfile = async (profile, settings) => {
    let data = await client.getProfile(profile);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
};