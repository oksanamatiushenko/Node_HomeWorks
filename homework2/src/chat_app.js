import EventEmitter from "node:events"

const emitter = new EventEmitter()

export default function sendMessage(user, message, emitter) {
    emitter.emit('message', user, message)
}

emitter.on('message', (user, message) => {
    console.log(`${user}: ${message}`)
})

sendMessage('Tatiana', 'Hello, how are you?', emitter)
sendMessage('Mark', 'Hi, I am fine. And you?', emitter)
sendMessage('Tatiana', 'Thank you, I am too.', emitter)

