

exports.run = (client, message, args, profile) => {

    const help = `
    ?catch <user> <reason>
    ?trade <item> <user>
    ?craft
    ?inventory
    ?search <user>
    ?present
    ?whisper <message>
    ?dispose <item>
    ?profile
    ?shop
    ?work
    ?eat
    ?shoot <user>
    ?arrest <user>
    ?getjob
    ?study
    ?exercise
    `;

    message.channel.send(help);
}