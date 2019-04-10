
const settings = {
    prefix: "?"
}



module.exports = async (client, message) => {

    if (message.author.bot) return;

    if (!message.guild.mod) message.guild.mod = message.guild.channels.find(c => c.name == "mod-log" && c.type === "text");

    if (message.content.indexOf(settings.prefix) !== 0) return;

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.guild && !message.member) await message.guild.fetchMember(message.author);

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command)); if (!cmd) return;

    cmd.run(client, message, args, null);

};