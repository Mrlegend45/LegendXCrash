
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '923106978067'
global.versi = "1.0.0"
global.namaOwner = "legend"
global.packname = 'Bot WhatsApp'
global.botname = 'legend-md'
global.botname2 = 'LEGENDxHAMZA-MD'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/923106978067"
global.linkWebsite = "https://restapi.simplebot.my.id"
global.linkGrup = "-"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = ""
global.idSaluran = ""
global.namaSaluran = "My Ch"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.pinH2H = "-"
global.passwordH2H = "-"
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "xxx"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "082192140458"
global.ovo = "082192140458"
global.gopay = "082144385548"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/3fdsf4.jpg", 
reply: "https://files.catbox.moe/weuge0.png", 
logo: "https://files.catbox.moe/weuge0.png", 
qris: "https://pomf2.lain.la/f/aqr6dq2y.png"
}

//~~~~~ Settings Api Panel Buy Panel ~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "ptla_bWNQIJpKJkPERlnQs8p2UUIZUYrTF0mESeTO7UM1z" //ptla
global.capikey = "ptlc_e5HDwnIfiUDyDNst8501HOu0aeuSWxMmxKFWRyOjc" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {  
  owner: "contact with legend",  
  admin: "*bsdk to owner thodi hia ya admin!*",  
  botAdmin: "*only admin bot*",  
  group: "*USE ONLY GROUP*",  
  private: "*itx private *",  
  prem: "buy premium from legend !*",  
  wait: "`*𝐋𝐨𝐚𝐝𝐢𝐧𝐠...*`",  
  error: "`*𝐄𝐫𝐫𝐨𝐫!`*",  
  done: "`*𝐃𝐨𝐧𝐞*`"  
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})