exports.run = (client, message, args, profile) => {

    if (!message.mentions.members.first()) return message.channel.send("specify a user to send to Solitary Confinement.");

    const user = message.mentions.members.first(); 

    args.shift();

    const reason = args.join(" ") || "unspecified";

    if (!message.guild.roles.find(r => r.name === "Solitary Confinement")) return message.channel.send(`couldn't find a "Solitary Confinement" role. please make one.`)
    
    if (user.roles.find(r => r.name === "Solitary Confinement")) return message.channel.send(`${user.user.username} is already in solitary confinement.`);

    user.addRole(message.guild.roles.find(r => r.name == "Solitary Confinement"))
    .catch(err => message.channel.send(`couldn't send ${user.user.username} to Solitary Confinement: ${err}`));

    message.channel.send(`alright, sent ${user.user.username} to Solitary Confinement. for: ${reason}`);

    message.guild.mod.send(`${message.author.username} caught ${user.user.username} doing: \n ${reason}`);

}

exports.conf = {
    aliases: ["cat"]
}