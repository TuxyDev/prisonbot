exports.run = (client, message, args, profile) => {

    if (!message.mentions.members.first()) return message.channel.send("specify a user to release.");

    const user = message.mentions.members.first();

    if (!user.roles.find(r => r.name == "Detained") && !user.roles.find(r => r.name == "Solitary Confinement")) return message.channel.send(`${user.user.username} doesn't seem to be detained or put to Solitary Confinement.`)

    if (user.roles.find(r => r.name == "Detained")) {
        user.removeRole(message.guild.roles.find(r => r.name == "Detained"))
        .catch(err => {
            message.channel.send(`couldn't release ${user.user.username}: ${err}`);
        });
    } else {
        if (user.roles.find(r => r.name == "Solitary Confinement")) {
            user.removeRole(message.guild.roles.find(r => r.name == "Solitary Confinement"))
            .catch(err => {
                message.channel.send(`couldn't release ${user.user.username}: ${err}`);
            });
        }

    }


    message.reply(`alright, released ${user.user.username}.`);

    message.guild.mod.send(`${message.author.username} released ${user.user.username}`);

}

exports.conf = {
    aliases: ["rel"]
}