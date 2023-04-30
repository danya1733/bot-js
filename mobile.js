function mobile0(chatId, bot,){
    bot.sendMessage(chatId, "Мобильная разработка - это создание приложений для мобильных устройств, таких как смартфоны и планшеты", {
        reply_markup: {
            keyboard: [
                ["Начать изучение мобильной разработки"]
            ], resize_keyboard: true
        }
    });
}
function mobile1(chatId, bot,){
    bot.sendMessage(chatId,"Знание мобилы 1",{
        reply_markup: {
            keyboard:[
                ["Перейти к знанию мобилы 2"]
            ],resize_keyboard: true
        }
    })
}


module.exports = {
    mobile0 : mobile0,
    mobile1 : mobile1,


}
