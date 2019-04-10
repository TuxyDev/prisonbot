
const { ShardingManager } = require("discord.js");
const config = require("./config.json");
const manager = new ShardingManager("./src/instance.js", {token: config.token});

manager.spawn("auto");