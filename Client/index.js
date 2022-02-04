const Websocket = require('ws')
const URL = 'ws://localhost:8080'
const WsConnection = new Websocket(URL)

const msg = JSON.stringify({
    typeEvent: 'withdraw',
    msg: 'Pay me now',
    time: new Date()
})

const sendMessage = () => {
    try {
        WsConnection.onopen = () => {
            WsConnection.send(msg)
        }

        WsConnection.onmessage = (e) => {
            console.log('WebSocket msg received: ', JSON.parse(e.data))
        }


        WsConnection.onerror = (error) => {
            console.log(`WebSocket error: ${error}`)
        }

        WsConnection.onclose = (e) => {
            console.log('WebSocket close' + e)
        }
    } catch (error) {
        throw new Error('>>> ERROR: ', error)
    }
}

sendMessage()
