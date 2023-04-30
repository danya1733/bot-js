function front0(chatId, bot,){
    bot.sendMessage(chatId,"Вы выбрали Front-End, давайте приступим",{
        reply_markup: {
            keyboard:[
                ["Начать изучение Front-end"]
            ],resize_keyboard: true
        }
    })
}
function front1(chatId, bot,){
    bot.sendMessage(chatId,"Знание фронта 1",{
        reply_markup: {
            keyboard:[
                ["Перейти к знанию фронта 2"]
            ],resize_keyboard: true
        }
    })
}


module.exports = {
    front0 : front0,
    front1 : front1,


}
