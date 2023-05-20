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
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт" +
        " и качаем: https://code.visualstudio.com\n",{
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
function back6(chatId, bot,){
    bot.sendMessage(chatId,"Django — свободный фреймворк для веб-приложений на языке Python, использующий шаблон проектирования MVC. Проект поддерживается организацией Django Software Foundation.\n" +
        "Сайт на Django строится из одного или нескольких приложений, которые рекомендуется дел" +
        "ать отчуждаемыми и подключаемыми. Это одно из существенных архитектурных отличий этого фреймворка от некоторых других (например, Ruby on Rails). Один из основных принципов фреймворка — DRY (англ. Don't repeat yourself)\n" +
        "Также, в отличие от других фреймворков, обработчики URL в Django " +
        "конфигурируются явно при помощи регулярных выражений.\n" +
        "Для работы с базой данных Django использует собственный ORM, в котором модель данных описывается классами Python, и по " +
        "ней генерируется схема базы данных.",{
        reply_markup: {
            keyboard:[
                ["Качаем"]
            ],resize_keyboard: true
        }
    })
}
function back7(chatId, bot,){
    bot.sendMessage(chatId,"Теперь необходимо скачать и установить фреймворк с сайта:\n" +
        "\n" +
        "https://www.djangoproject.com/download/\n" +
        "И смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLA0M1Bcd0w8xO_39zZll2u1lz_Q-Mwn1F",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}

//java
function back8(chatId, bot,){
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт" +
        " и качаем: https://code.visualstudio.com\n",{
        reply_markup: {
            keyboard:[
                ["Среда разработки установленa"]
            ],resize_keyboard: true
        }
    })
}
function back9(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования Java.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Java на базовом уровне: https://youtube.com/playlist?list=PLAma_mKffTOSUkXp26rgdnC0PicnmnDak\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта:\n" +
        "https://www.codewars.com/kata/java",{
        reply_markup: {
            keyboard:[
                ["Готов идти дальше!"]
            ],resize_keyboard: true
        }
    })
}

function back10(chatId, bot,){
    bot.sendMessage(chatId,"Фреймворк Java Spring предоставляет разработчикам инструменты для создания сложных систем, например мног" +
        "опользовательских корпоративных веб-приложений со множеством функций для бизнеса. Он позволяет быстро создавать пр" +
        "иложения, которые умеют работать с базами данных и облаками, состоят из разных модулей, обмениваются данными с пользователя" +
        "ми через интернет по защищённым каналам.",{
        reply_markup: {
            keyboard:[
                ["Качаем!"]
            ],resize_keyboard: true
        }
    })
}
function back11(chatId, bot,){
    bot.sendMessage(chatId,"смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLAma_mKffTOR5o0WNHnY0mTjKxnCgSXrZ\n",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}


//js
function back12(chatId, bot,){
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт" +
        " и качаем: https://code.visualstudio.com\n",{
        reply_markup: {
            keyboard:[
                ["Среда разработки установленa!"]
            ],resize_keyboard: true
        }
    })
}
function back13(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования JavaScipt.\n" +
        "\n" +
        "Вот ссылка на источники, которые помогут ознакомиться с JavaScript: https://learn.javascript.ru/\n" +
        "https://loftschool.com/course/javascript/\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта:\n" +
        "https://www.codewars.com/kata/search/javascript",{
        reply_markup: {
            keyboard:[
                ["Готов идти дальше!"]
            ],resize_keyboard: true
        }
    })
}

function back14(chatId, bot,){
    bot.sendMessage(chatId,"Node или Node.js — программная платформа, основанная на движке V8 (компилирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel, low.js и Espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.",{
        reply_markup: {
            keyboard:[
                ["Качаeм!"]
            ],resize_keyboard: true
        }
    })
}
function back15(chatId, bot,){
    bot.sendMessage(chatId,"Теперь необходимо скачать и установить фреймворк с сайта:\n" +
        "https://nodejs.org/ru\n" +
        "И смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}
//c#

function back16(chatId, bot,){
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт" +
        " и качаем: https://code.visualstudio.com\n",{
        reply_markup: {
            keyboard:[
                ["Среда разработки устанoвленa!"]
            ],resize_keyboard: true
        }
    })
}
function back17(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования С#.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с C#:\n" +
        "https://youtube.com/playlist?list=PLDyJYA6aTY1laYPs6iS-SrYl9DZLVCUKr\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта:\n" +
        "https://www.codewars.com/kata/search/csharp",{
        reply_markup: {
            keyboard:[
                ["Готов идти дальше!"]
            ],resize_keyboard: true
        }
    })
}

function back18(chatId, bot,){
    bot.sendMessage(chatId,"ASP.NET MVC. Данная платформа основана на шаблонах, которые ускоряют и упрощают разработку динамических веб-сайтов. При этом программист может четко разделять проблемы и получает абсолютный контроль над разметкой, что делает процесс более гибким.",{
        reply_markup: {
            keyboard:[
                ["Качаeм"]
            ],resize_keyboard: true
        }
    })
}
function back19(chatId, bot,){
    bot.sendMessage(chatId,"Теперь необходимо скачать и установить фреймворк с сайта:\n" +
        "https://www.microsoft.com/ru-ru/download/details.aspx?id=30683\n" +
        "И смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLL-k0Ff5RfqXnwdDG61WqZ2j3KXUPnfmq",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}

//php
function back20(chatId, bot,){
    bot.sendMessage(chatId,"Первый шаг к вашему становлению программистом, скачать среду разработки. Поэтому заходим на сайт" +
        " и качаем: https://code.visualstudio.com\n",{
        reply_markup: {
            keyboard:[
                ["Средa разработки устанoвленa!"]
            ],resize_keyboard: true
        }
    })
}
function back21(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования PHP.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с PHP:\n" +
        "https://youtube.com/playlist?list=PLDyJYA6aTY1m5zGQVcEYIoSFz2GD8u7cC\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта:\n" +
        "https://www.codewars.com/kata/search/php",{
        reply_markup: {
            keyboard:[
                ["Готов идти дальше!"]
            ],resize_keyboard: true
        }
    })
}

function back22(chatId, bot,){
    bot.sendMessage(chatId,"Laravel  — это бесплатный PHP-фреймворк с открытым исходным кодом, специально разработанный для создания сложных сайтов и веб-приложений. Позволяет упростить аутентификацию, маршрутизацию, сессии, кэширование, архитектуру приложения, работу с базой данных.",{
        reply_markup: {
            keyboard:[
                ["Кaчaeм!"]
            ],resize_keyboard: true
        }
    })
}
function back23(chatId, bot,){
    bot.sendMessage(chatId,"Теперь необходимо скачать и установить фреймворк с сайта:\n" +
        "https://laravel.su/docs/8.x/installation\n" +
        "И смотрим плейлист:\n" +
        "https://youtube.com/playlist?list=PLd2_Os8Cj3t8pnG4ubQemoqnTwf0VFEtU",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
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
    back6:back6,
    back7:back7,
    back8:back8,
    back9:back9,
    back10:back10,
    back11:back11,
    back12:back12,
    back13:back13,
    back14:back14,
    back15:back15,
    back16:back16,
    back17:back17,
    back18:back18,
    back19:back19,
    back20:back20,
    back21:back21,
    back22:back22,
    back23:back23,
}
