

function ios0(chatId, bot,){
    bot.sendMessage(chatId,"dsadsadsafsdvds",{
        reply_markup: {
            keyboard:[
                ["🐦Swift🐦"],
                ["🍎Objective-C🍎"]
            ],resize_keyboard: true
        }
    })
}



module.exports = {
    ios0:ios0,
}
