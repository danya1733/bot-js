
function android0(chatId, bot,){
    bot.sendMessage(chatId,"ыфвыфвыф",{
        reply_markup: {
            keyboard:[
                ["☕️Java☕️"],
                ["💜Kotlin💜"]
            ],resize_keyboard: true
        }
    })
}


module.exports = {
    android0:android0,
}
