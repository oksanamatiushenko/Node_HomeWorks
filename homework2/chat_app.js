const EventEmitter = require('events')
const emitter = new EventEmitter()

function sendMessage(user, message, emitter) {
    emitter.emit('message', user, message)
}

emitter.on('message', (user, message) => {
    console.log(`${user}: ${message}`)
})

sendMessage('Tatiana', 'Hello, how are you?', emitter)
sendMessage('Mark', 'Hi, I am fine. And you?', emitter)
sendMessage('Tatiana', 'Thank you, I am too.', emitter)

// Домашняя работа 2
// Задание 
// Чат-приложение
// Создайте новый файл с именем `chat_app.js`.
// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
// Напишите функцию `sendMessage`, которая принимает имя пользователя, 
// сообщение и объект `EventEmitter`.
// Внутри функции `sendMessage` генерируйте событие `message` с именем 
// пользователя и сообщением.
// Зарегистрируйте обработчик для события `message`, чтобы выводить
// сообщение в формате "User: Message".
// Вызовите функцию `sendMessage` несколько раз с разными пользователями 
// и сообщениями.

