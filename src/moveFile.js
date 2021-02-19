const fs = require('fs')
const RecallStore = require('./recallStore')

function moveCall(peer){
    const callFile = `CALLBACK-${peer}.call`
    var oldPath = `/tmp/${callFile}`
    var newPath = `/var/spool/asterisk/outgoing/${callFile}`
    console.log(`Verificando se há recall para ${peer}`);
    if(RecallStore.recalls.has(peer)){
        RecallStore.recalls.delete(peer)
        fs.rename(oldPath, newPath, (err) => {
            if (err) console.log(err)
            else console.log(`Rechamada ${peer} feita com sucesso`)
        })
    }

}

module.exports = moveCall