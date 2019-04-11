exports.run = (client, message, args, profile) => {
    message.channel.send(`Kapow! {user} went out with a bang. (shot by ${message.author.username})`)
}