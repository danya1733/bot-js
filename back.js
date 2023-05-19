function back0(chatId, bot,){
    bot.sendMessage(chatId,"Теперь, раз вы определились, что хотите разрабатывать \"то, что под капотом\", то выберем язык, котор" +
        "ый подойдёт вам лучше всего, но нужно помнить, что выбор языка программирования для бэкэнд разработки зависит от конкр" +
        "етных требований проекта и предпочтений разработчиков.",{
        reply_markup: {
            keyboard:[
                ["Python","Java","JS"],
                ["C#","PHP"]
            ],resize_keyboard: true
        }
    })
}
function back1(chatId, bot,){
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт и качаем: https://code.visualstudio.com\n",{
        reply_markup: {
            keyboard:[
                ["Среда разработки установлена"]
            ],resize_keyboard: true
        }
    })
}
function back2(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования Python.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Python на базовом уровне: https://youtube.com/playlist?list=PLAma_mKffTOSUkXp26rgdnC0PicnmnDak\n" +
        "\n" +
        "\n" +
        "Так же можно читать лекции вот отсюда:\n" +
        "https://pythonru.com/tag/uroki-python-dlja-nachinajushhih\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта:\n" +
        "https://www.codewars.com/kata/python\n",{
        reply_markup: {
            keyboard:[
                ["Готов идти дальше!"]
            ],resize_keyboard: true
        }
    })
}
function back3(chatId, bot,){
    bot.sendMessage(chatId,"Теперь, когда вы уже выучили основы языка программирования, на котором собираетесь работать, то необходимо выучить что же такое базы данных и как они работают. Начнём изучение с MySQL.\n" +
        "MySQL — это реляционная система управления базами данных (СУБД), которая распространяется как свободное программное обеспечение. Является одной из наиболее популярных, так как отличается гибкостью, легкостью, удобством в использовании.\n" +
        "Слово «реляционный» означает, что базы представлены в виде связанной информации и описываются как набор связей. MySQL работает с языком запросов SQL, который традиционно используется в базах данных.\n" +
        "\n" +
        "Смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLDyJYA6aTY1lPhlF2iHiLlkDW6bd39VmE",{
        reply_markup: {
            keyboard:[
                ["Идeм дальшe"]
            ],resize_keyboard: true
        }
    })
}
function back4(chatId, bot,){
    bot.sendMessage(chatId,"Сейчас, когда вы уже знакомы с базами данных, необходимо иметь представление о протоколах передачи данных, чтобы понимать как они работают.\n" +
        "\n" +
        "Поэтому смотрим видео и запоминаем:\n" +
        "https://youtu.be/2I1HnSN1H9o",{
        reply_markup: {
            keyboard:[
                ["Следующий шаг"]
            ],resize_keyboard: true
        }
    })
}
function back5(chatId, bot,){
    bot.sendMessage(chatId,"А вот тут мы снова вспоминаем, зачем же мы учили языки программирования...\n" +
        "Чтобы писать бэкэнд можно, или даже нужно пользоваться сободными фреймворками, которые используются в разработке бэкэнд приложений.\n" +
        "Для каждого языка они свои, и сейчас ты узнаешь о самых популярных из них.",{
        reply_markup: {
            keyboard:[
                ["Django","Spring Boot","Node.JS"],
                ["ASP.NET Core","Laravel"]
            ],resize_keyboard: true
        }
    })
}


module.exports = {
    back0 : back0,
    back1 : back1,
    back2:back2,
    back3:back3,
    back4:back4,
    back5:back5,


}
