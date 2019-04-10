exports.run = (client, message, args, profile) => {


    if (!message.mentions.members.first()) return message.channel.send("specify a user to arrest.");

    const user = message.mentions.members.first();

    args.shift();

    const reason = args.join(" ") || "unspecified";

    if (user.user.id === "565471475507789825") return message.reply("how dare you try that on me!");

    if (!message.guild.roles.find(r => r.name === "Detained")) return message.channel.send(`couldn't find a "Detained" role. please make one.`)
    
    if (user.roles.find(r => r.name === "Detained")) return message.channel.send(`${user.user.username} is already detained.`);

    user.addRole(message.guild.roles.find(r => r.name == "Detained"))
    .catch(err => message.channel.send(`couldn't detain ${user.user.username}: ${err}`));

    message.reply(`alright, detained ${user.user.username}.`);

    message.guild.mod.send(`${message.author.username} arrested ${user.user.username} for: \n ${reason}`);

}

exports.conf = {
    aliases: ["detain", "ar"]
}