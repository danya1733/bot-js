function back0(chatId, bot,){
    bot.sendMessage(chatId,"Вы выбрали Back-End, давайте приступим",{
        reply_markup: {
            keyboard:[
                ["Начать изучение Back-end"]
            ],resize_keyboard: true
        }
    })
}
function back1(chatId, bot,){
    bot.sendMessage(chatId,"Знание бэка 1",{
        reply_markup: {
            keyboard:[
                ["Перейти к знанию бэка 2"]
            ],resize_keyboard: true
        }
    })
}


module.exports = {
    back0 : back0,
    back1 : back1,


}
