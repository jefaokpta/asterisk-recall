const fs = require('fs')
const RecallStore = require('./recallStore')

function moveCall(peer){
    const callFile = `${peer}-call.call`
    var oldPath = `/Users/jefaokpta/Downloads/${callFile}`
    var newPath = `/Users/jefaokpta/Downloads/MOVIES/${callFile}`
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