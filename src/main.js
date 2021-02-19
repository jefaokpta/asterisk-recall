const express = require('express')
const moveCall = require('./moveFile')
const RecallStore = require('./recallStore')
//const ami = new require('asterisk-manager')('5038','asterisk.jpbx.com.br','node','jefao123', false)
const ami = new require('asterisk-manager')('5038','localhost','teste','vipadmin', false)


// AMI
ami.keepConnected()
ami.on('hangup', (hangup) => moveCall(hangup.calleridnum))

// EXPRESS
const app = express()
const port = 3000
app.get('/add/:peer', (req, res) => {
    RecallStore.recalls.set(req.params.peer, req.params.peer)
    console.log(RecallStore.recalls)
    res.sendStatus(200)
    
})

app.get('/recalls', (req, res) => {
  res.json(RecallStore.recalls)
})

app.get('/move/:peer', (req, res) => {
    moveCall(req.params.peer)
    res.sendStatus(200)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
