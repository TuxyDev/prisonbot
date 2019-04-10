const { Client, Collection } = require("discord.js");
const client = new Client();
const config = require("../config.json");
const fs = require("fs");

client.commands = new Collection(),
client.aliases = new Collection(),
client.util = require("./util/util");

const init = async () => {

    for (let file of fs.readdirSync(`${__dirname}/commands/`)) {
        if (!file.endsWith(".js")) return;
        const commandName = file.split(".")[0];
        try {
            console.log(`Loading Command: ${commandName}`);
            const props = require(`./commands/${commandName}`);
            client.commands.set(commandName, props);

            if (props.conf && props.conf.aliases) {
                props.conf.aliases.forEach(alias => {
                  client.aliases.set(alias, commandName);
                });
            }
        
          } catch (e) {
            console.error(`Unable to load command ${commandName}: ${e}`);
          }
    };

    for (let file of fs.readdirSync(`${__dirname}/events/`)) {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        client.on(file.split(".")[0], event.bind(null, client))
    };

    await client.login(config.token);
}

init();