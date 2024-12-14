// Setting Contact
global.namaown = "WynzXF Own"
global.namabot = "Detech Bug"
global.versisc = "3.5.0"
global.owner = ["6282130493798"]
global.tele = "https://t.me/WynzXcrash"
global.url = "https://www.youtube.com/@WynzzXS"
global.namastore = "WynzX"
global.prefa = ['','!','.',',','🐤','🗿']
// Global Simbol
global.simbol = "⚘"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.mess = {
    success: 'Done Ya‼️',
    admin: `\`[ 么 ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ 么 ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ 么 ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ 么 ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ 么 ]\` Command Hanya Bisa Di Chat Private‼️`,
    wait: `\`[ 么 ]\` Tunggu Ya Kak`,
    notregist: `\`[ 么 ]\` Kamu Blum Terdaftar Di Base Kami,Mohon Registrasi Dulu‼️`,
    premium: `\`[ 么 ]\` Khusus WynzXS `,
    endLimit: `\`[ 么 ]\` Anda Mencapai Limit Tunggu 00.00 Waktu Setempat Dan Limit Kamu Akan Hilang`,
     bugrespon: `\`[ 么 ]\` *Proses To Bug Agak Berat Soalnya*`,
     donebug: `\`[ 么 ]\` *Succes Bug Mas Tunggu 1-10Menit*`,
}
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})