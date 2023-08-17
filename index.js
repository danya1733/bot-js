const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const token = '6088249077:AAGiLBMWejNNGP97ZExk1evakcxccxzXQH123231mUOePZg'; // тут токен кторый мы получили от botFather
const fs = require('fs');
const {
    front0,
    front1, front2, front3, front4, front5, angular, vue, react, petweb, guide,
} = require('./front')

const {
    back0,
    back1,
    back2,
    back3,
    back4,
    back5,
    back6,
    back7,
    back8,
    back9,
    back10,
    back11,
    back12,
    back13,
    back14,
    back15,
    back16,
    back17,
    back18,
    back19,
    back20,
    back21,
    back22,
    back23
} = require('./back')


const {
    android0,
    android1,
    android2,
    android3,
    android4,
    android5,
    android6,
    android7,
    android8,
    android9,
    android10,
    android11,
    android12
} = require('./android')

const {
    ios0,
    ios1,
    ios2,
    ios3,
    ios4,
    ios5,
    ios6,

} = require('./ios')

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    // если равен, отправляем сообщение с клавиатурой
    bot.sendMessage(chatId, 'Привет! Я - бот, который поможет вам войти в IT сферу.\nЕсли ты хочешь ' +
        'научиться создавать веб-сайты или разрабатывать мобильные приложения, то ' +
        'ты попал в нужное место! У нас есть широкий выбор курсов, которые помогут вам достичь ваших целей и стать опытным разработчиком.' +
        'Не теряйте время и начните свой путь к успеху прямо сейчас!', {
        reply_markup: {
            keyboard:[
                ["💻Стать программистом!💻"]
            ],resize_keyboard: true
        }
    });
    fs.readFile('user_ids.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const userIDs = data.split('\n').filter(Boolean);
        if (userIDs.includes(String(userId))) {
            console.log(`User ID ${userId} is already recorded.`);
        } else {
            // Записываем уникальный ID пользователя в файл
            fs.appendFile('user_ids.txt', `${userId}\n`, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`User ID ${userId} has been written to file.`);
                }
            });
        }
    });
});

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const messageText = msg.text; // получаем текст сообщения
    if (messageText==="💻Стать программистом!💻"){
        bot.sendMessage(chatId, "В сфере IT существует множество направлений, но два из них являются основными: web-разработка и разработка мобильных приложений.\n" +
            "\n" +
            "Web-разработка занимается созданием сайтов и веб-приложений. Она включает в себя различные технологии, такие как HTML, CSS, JavaScript, PHP" +
            " и многие другие. С помощью веб-разработки ты можешь создавать сайты любой сложности: от простого одностраничного сайта до масштабных веб-порталов и интернет-магазинов.\n" +
            "\n" +
            "Разработка мобильных приложений, в свою очередь, занимается созданием приложений для мобильных устройств, таких как смартфоны и планшеты." +
            " Здесь используются различные технологии и платформы, такие как Android и iOS. Разработка мобильных приложений позволяет создавать разнообразные приложения: от игр и развлекательных приложений до приложений для бизнеса и образования.\n" +
            "\n" +
            "Какое направление тебе более интересно?",
            {
            reply_markup: {
                keyboard:[
                    ["💻Web-разработка💻"],
                    ["📱Мобильная разработка📱"]
                ],resize_keyboard: true
            }
        })
    }else if(messageText==="💻Web-разработка💻") {
        bot.sendMessage(chatId, "Фронтенд веб-сайта — это все, что пользователь видит и с чем может взаимодействовать " +
            "при помощи браузера. Создание этой визуальной части называется фронтенд-разработкой. Дизайнеров, создающих " +
            "пользовательские интерфейсы, тоже можно в какой-то смысле назвать фронтенд-разработчиками, потому что они со" +
            "вместно работают над этой же частью проекта.Средняя зарплата фронтэнд разработчика в РФ составляет около 80 000 - 120 000 рублей в месяц. В среднем обучение занимает от 6 месяцев до 2 лет");
        bot.sendMessage(chatId,
            "Бэкэнд  - это та часть, которая работает на серверной стороне и отвечает за обработку данных и логику " +
            "работы приложения. Важной задачей бекэнд-разработчиков является обеспечение безопасности приложения, включая " +
            "защиту от взлома и утечек данных.Средняя зарплата бэкэнд разработчика в РФ составляет около 100 000 - 150 00" +
            "0 рублей в месяц. В среднем обучение занимает от 1 до 4 лет.", {
            reply_markup: {
                keyboard: [
                    ["🌚Front-end🌚"],
                    ["🌝Back-end🌝"]
                ], resize_keyboard: true
            }
        })

    }
    //Ветка фронта
    else if(messageText==="🌚Front-end🌚"){
        front0(chatId,bot)
    }else if(messageText==="Среда разработки уcтaновленa!") {
        front1(chatId, bot)
    }else if(messageText==="HTML") {
       front2(chatId,bot)
    }else if(messageText==="CSS") {
        front3(chatId,bot)
    }else if(messageText==="JavaScript") {
        front4(chatId,bot)
    }else if(messageText==="Новый этап") {
        front5(chatId,bot)
    }
    else if(messageText==="AngularJS") {
        angular(chatId,bot)
    }
    else if(messageText==="Vue.js") {
        vue(chatId,bot)
    }
    else if(messageText==="React") {
        react(chatId,bot)
    }
    else if(messageText==="Pеt-проeкт") {
        petweb(chatId,bot)
    }
    else if(messageText==="Руководство по созданию интернет-магазина") {
        guide(chatId,bot)
    }
    //Ветка фронта



    //Ветка бэка
    else if(messageText==="🌝Back-end🌝"){
        back0(chatId,bot)
    }
    else if(messageText==="Python"){
        back1(chatId,bot)
    }else if(messageText==="Среда разработки установлена"){
        back2(chatId,bot)
    }else if(messageText==="Готов идти дальше!"){
        back3(chatId,bot)
    }else if(messageText==="Идeм дальшe"){
        back4(chatId,bot)
    }else if(messageText==="Следующий шаг"){
        back5(chatId,bot)
    }else if(messageText==="Django(Python)"){
        back6(chatId,bot)
    }else if(messageText==="Качаем"){
        back7(chatId,bot)
    }
    //java
    else if(messageText==="Java") {
        back8(chatId, bot)
    }else if(messageText==="Среда разработки установленa") {
        back9(chatId, bot)
    }else if(messageText==="Spring Boot(Java)") {
        back10(chatId, bot)
    }else if(messageText==="Качаем!") {
        back11(chatId, bot)
    }
    //js
    else if(messageText==="JS") {
        back12(chatId, bot)
    }else if(messageText==="Среда разработки установленa!") {
        back13(chatId, bot)
    }else if(messageText==="Node.JS") {
        back14(chatId, bot)
    }else if(messageText==="Качаeм!") {
        back15(chatId, bot)
    }
    //c#
    else if(messageText==="C#") {
        back16(chatId, bot)
    }else if(messageText==="Среда разработки устанoвленa!") {
        back17(chatId, bot)
    }else if(messageText==="ASP.NET Core(C#)") {
        back18(chatId, bot)
    }else if(messageText==="Качаeм") {
        back19(chatId, bot)
    }

    //php

    else if(messageText==="PHP") {
        back20(chatId, bot)
    }else if(messageText==="Средa разработки устанoвленa!") {
        back21(chatId, bot)
    }else if(messageText==="Laravel(PHP)") {
        back22(chatId, bot)
    }else if(messageText==="Кaчaeм!") {
        back23(chatId, bot)
    }

    //Ветка бэка



    //Ветка мобильной разработки
    else if(messageText==="📱Мобильная разработка📱"){
        bot.sendMessage(chatId, "Мобильная разработка делится на два основных направления - Android и IOS разработку." +
            " Программисты этого направления создают приложения как для общего потребления, так и под специфичные задачи" +
            " для бизнеса и промышленности. Конечно Android намного популярнее среди мобильных устройств в России и за рубежом," +
            " но у него есть существенный минус - большое количество разных устройств, с разными характеристиками, в отличии от IOS.\n" +
            "\n" +
            "Android - разработчики этого направления создают приложения разного уровня сложности для операционной системы" +
            " google. Данная операционная система используется не только на телефонах, но также интегрируется и в часы, телевизоры," +
            " авто и специальные устройства для бизнеса. Из плюсов этого направления можно выделить большое сообщество разработчиков" +
            " и материалов для обучения. Для разработки под Android подойдёт устройство на Windows/MacOS/Linux. Зарплаты" +
            " android-разработчиков начинаются от 60 тыс. рублей в месяц и могут доходить до 300 тыс. и даже 500 тыс. рублей." +
            " Время обучения от 6 месяцев.\n" +
            "\n" +
            "IOS - разработчикам этого направления приходится сталкиваться только с телефонами Apple. Также для разработки " +
            "под IOS требуется устройство на операционной системе MacOS, но разработка на Windows/Linux также возможна, с" +
            " помощью некоторых лайфхаков, про которые ты узнаешь, если выберешь это направление. Из плюсов этого направления" +
            " можно выделить обратный андроиду факт, в IOS разработке меньше людей из-за чего меньше и конкуренция. Зарплаты" +
            " IOS-разработчиков также начинаются от 60 тыс. рублей в месяц и могут доходить до 300 тыс. и даже 500 тыс. рублей." +
            " Время обучения также не отличается от андроида - от 6 месяцев.", {
            reply_markup: {
                keyboard: [
                    ["🤖Android🤖"],
                    ["🍎iOS🍎"]
                ], resize_keyboard: true
            }
        });
    }


    //android
    else if(messageText==="🤖Android🤖"){
        android0(chatId, bot)
    }else if(messageText==="Среда разработки установлeнa!") {
        android1(chatId, bot)
    }
    else if(messageText==="☕️Java☕️"){
        android2(chatId, bot)
    }else if(messageText==="Компилятор установлeн!"){
        android3(chatId, bot)
    }else if(messageText==="Гoтoв идти дaльше!"){
        android4(chatId, bot)
    }else if(messageText==="К следующему шагу!"){
        android5(chatId, bot)
    }else if(messageText==="Идём дальше!"){
        android6(chatId, bot)
    }else if(messageText==="Pet-проект"){
        android7(chatId, bot)
    }else if(messageText==="Да здравствует фриланс и первые заказы!"){
        android8(chatId, bot)
    }else if(messageText==="Устраиваемся в IT компанию"){
        android9(chatId, bot)
    }else if(messageText==="💜Kotlin💜"){
        android10(chatId, bot)
    }else if(messageText==="Готoв идти дальше!"){
        android11(chatId, bot)
    }else if(messageText==="К следующему шaгу!"){
        android12(chatId, bot)
    }

    //android


    else if(messageText==="🍎iOS🍎"){
        ios0(chatId,bot)
    }else if(messageText==="🐦Swift🐦"){
        ios1(chatId,bot)
    }else if(messageText==="Среда разработки и компилятор установлены!"){
        ios2(chatId,bot)
    }else if(messageText==="Готoв идти дaльше!"){
        ios3(chatId,bot)
    }else if(messageText==="🍎Objective-C🍎"){
        ios4(chatId,bot)
    }else if(messageText==="Срeдa разработки устанoвленa!"){
        ios5(chatId,bot)
    }else if(messageText==="Гoтoв идти дальшe!"){
        ios6(chatId,bot)
    }


    //Ветка мобильной разработки
})
