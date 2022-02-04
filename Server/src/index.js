const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

const wsResponse = (ws, msgParsed) => {
    ws.send(
        JSON.stringify({
            msg: `Hello! ${msgParsed.typeEvent} Channel!`,
            time: new Date()
        })
    )
}

wss.on('connection', ws => {
    ws.on('message', message => {
        const msgParsed = JSON.parse(message)
        switch (msgParsed.typeEvent) {
            case 'payment': {
                console.log('PAYMENT EVENT CALLED ', msgParsed)
                wsResponse(ws, msgParsed)
            }
                break;
            case 'userMessage': {
                console.log('USER EVENT CALLED ', msgParsed)
                wsResponse(ws, msgParsed)
            }
                break;
            case 'makePhoneCall': {
                console.log('MAKE PHONE CALL EVENT CALLED ', msgParsed)
                wsResponse(ws, msgParsed)
            }
                break;
            case 'withdraw': {
                console.log('WITHDRAW EVENT CALLED ', msgParsed)
                wsResponse(ws, msgParsed)
            }
                break;
            default: {
                console.log('DEFAULT EVENT CALLED')
                wsResponse(ws, msgParsed)
            }
        }
    })

})
