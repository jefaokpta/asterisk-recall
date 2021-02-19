
const channel= 'PJSIP/1007001-00000005'

const peer = channel.substr(channel.indexOf('/')+1)
console.log(peer.substr(0, peer.indexOf('-')));