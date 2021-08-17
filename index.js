const {
    WAConnection,
    ReconnectMode,
    MessageType,
    mentionedJid,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    Presence,
    ProxyAgent,
    waChatKey,
    Mimetype,
    WA_DEFAULT_EPHEMERAL,
    ChatModification,
    processTime,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const imgbb = require('imgbb-uploader')
const axios = require('axios') 
const { fetchJson, fetchText, uploadImages, msgFilter } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const fs = require('fs')
const crypto = require('crypto')
const util = require('util')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const toMs = require('ms')
const ms = require('parse-ms')
const lolcatjs = require('lolcatjs');
const figlet = require('figlet');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { rules } = require('./src/rules')
const imageToBase64 = require('image-to-base64')
const { runtime } = require('./src/runtime')
const { donasi } = require('./src/donasi')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const totalhit = JSON.parse(fs.readFileSync('./database/grup/tmp_hit.json'))
const aefka = JSON.parse(fs.readFileSync('./database/grup/userafk.json'))
const Exif = require('./database/json/exif')
const exif = new Exif()
const limitCount = 25
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n'
            + 'FN: Reihan\n'
            + 'ORG:CREATOR SAKURA;\n'
            + 'TEL;type=CELL;type=VOICE;waid=18482024461:+1 8482024461\n'
            + 'END:VCARD'
            
testcuk = "0@s.whatsapp.net"
ban = ["6289524426759@s.whatsapp.net"]
cr = '「 SAKURA BOT 」\nBy Reihan'
tescuk = `0@s.whatsapp.net`
limitawal = '99'
fake = '*SAKURA BOT*'
numbernye = '0@s.whatsapp.net'
setgrup = '393470602054-1351628616@g.us'
numbernye = '0'
limitowner = '999999999999999999'
shizuka2 = '$ 99999 Usd'
memberLimit = '1'
blocked = []     
imgnya = fs.readFileSync(`./media/image/fakelogo.jpeg`)
setthumb = fs.readFileSync('./media/image/logo.jpeg')
banChats = false

/*********** APIKEY ********/
lolhuman = '4cc85aad11108d2da0f71acf' //xyz
lol = '96b0fd663b4c7de98c72efba' //heroku
zeks = 'akusayanguli'
hujan = 'apikey'

/*********** DATABASE LEVEL********/


function monospace(string) {
return '```' + string + '```'

}
global.config = {
    unvoke: true,
    unvokeMe: false
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/********** FUNCTION ***************/
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','yellow'), color(']','white'), color(' Scan the qr code above'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./QRnya.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'loading...')
	})
	fs.existsSync('./QRnya.json') && client.loadAuthInfo('./QRnya.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Sukses ✔️')
	})
	await client.connect({timeoutMs: 30*1000})

	
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

client.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			client.sendMessage(call, `Maaf, SAKURA BOT tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!`, MessageType.text)
			.then(() => client.blockUser(call, "add"))
			}, 100);
		}
	)
	
	if (!Array.isArray(client._events['CB:action,add:relay,message'])) client._events['CB:action,add:relay,message'] = [client._events['CB:action,add:relay,message']]
else client._events['CB:action,add:relay,message'] = [client._events['CB:action,add:relay,message'].pop()]
client._events['CB:action,add:relay,message'].unshift(async json => {
    try {
        if (!global.config.unvoke) return
        let m = json[2][0][2]
        if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
            let key = m.message.protocolMessage.key
            if (key.fromMe && !global.config.unvokeMe) return
            let c = client.chats.get(key.remoteJid)
            let a = c.messages.dict[`${key.id}|${key.fromMe ? 1 : 0}`]
            let participant = key.fromMe ? client.user.jid : a.participant ? a.participant : key.remoteJid
            client.sendMessage(key.remoteJid, monospace(`[ BOT ] Terdeteksi @${(participant).replace(/@.+/, '')} telah menghapus pesan`), MessageType.extendedText, {
                contextInfo: {
                mentionedJid: [participant],
                quotedMessage: a.message
                }
            })

            let content = client.generateForwardMessageContent(a, false)

            let ctype = Object.keys(content)[0]
            let atype = Object.keys(a.message)[0]
            let context = {}
            if (atype != MessageType.text) context = a.message[atype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = client.prepareMessageFromContent(key.remoteJid, content, {})
            await client.relayWAMessage(waMessage)
        }
    } catch (e) {
        console.log(e)
    }
})
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum`at"; break;
        case 6: hari = "Sabtu"; break;
              }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";   
            
		
//====================================================================//
       
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'SLpvUgOcMYwIx0pFeELt'
			const speed = require('performance-now')
			let isGroup = from.endsWith('@g.us')
			let sender = isGroup ? mek.participant : mek.key.remoteJid
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*,;]/gi) : '-'          	
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    const command = pes.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const is = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const arg = budy.slice(command.length + 2, budy.length)
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)
			const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			client.chatRead (from)
            totalhit.push(isCmd)
            const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			mess = {
				wait: '[ WAIT ] Sedang di proses !',
				success: '[❗] Sukses !',
				error: {
					stick: '[❗] Error !',
					Iv: '[❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Group only!',
					ownerG: '[❗] Owber Group only!',
					ownerB: '[❗] Owner Bot SAKURA !!',
					oprem: 'Khusus user premium!',
					benned: 'Nomer anda sudah keban bro silahkan hubungi owner untuk unban thanks.',
					userB: `──────────────────\nHallo *${pushname}* Sepetinya Kamu belum\nTer verifikasi sebagai user *SAKURA BOT* \nUntuk verifikasi silahkan ketik *@verify*\n──────────────────`,
					ownerB: 'Owner bot !',
					admin: '[❗]  Admin Group !',
					Badmin: '[❗] Gagal dikarenakan bot belum menjadi admin group !'
				}
			}
			
            const c = '```'
            const botName = '*SAKURA BOT*'
            const ownerName = 'Reihan'//Nama Owner
			const botNumber = client.user.jid
			const ownerNumber = ["18482024461@s.whatsapp.net","6282279601471@s.whatsapp.net"]
		    const totalchat = await client.chats.all()
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const iskickarea = isGroup ? kickarea.includes(from) : false
			const isUser = user.includes(sender)
	        const userLevel = getLevelingLevel(sender)
            const userXp = getLevelingXp(sender)
			const isBanned = ban.includes(sender)
			const isAnime = isGroup ? anime.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isMining = isGroup ? nsfw.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isEventon = isGroup ? event.includes(from) : false
            const isStiker = isGroup ? astik.includes(from) : false
           const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiKasar = isGroup ? antikasar.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isAntiPromote = isGroup ? antipromote.includes(from) : false
            const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Aceh ').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const hariRaya = new Date('may 14, 2021 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const sakuragans = ["0@s.whatsapp.net"]
			var Propil = await getBuffer("https://i.ibb.co/74X1yX2/8da45cd00cb1.jpg")
			const isUrl = (url) => {
		 return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted: freply})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, { quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			}
			const cosContact = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: {fromMe: false,  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "contactMessage": {"displayName": `${target2}` ,"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:SAKURA BOT;Owner;;;\nFN:SAKURA BOT\nitem1.TEL;waid=6283141926935:+62 831-4192-6935\nitem1.X-ABLabel:Ponsel\nEND:VCARD", "jpegThumbnail": fs.readFileSync('media/image/logo.jpeg')} } } } )
		}
		const cosLocation = (pesan, tipe, target, target2) => {
		  client.sendMessage(from, pesan, tipe, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: {fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "locationMessage": { "degreesLatitude": -8.318999608054611, "degreesLongitude": 114.34347780544245, "name": `${target2}`, "address": "Patoman, Belimbing sari, Banyuwangi", "url": "https://foursquare.com/v/4e846b4c5503e18a127c8f6d", "jpegThumbnail": fs.readFileSync('src/image/location.jpeg')} } } } )
		}
		const sedmes = (pesan, tipe, target, target2) => {
		  client.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		const ftroli = {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? {
remoteJid: "status@broadcast" } : {})
 },
        message: { 
        orderMessage: {
        itemCount: 99, 
        status: 200, 
        thumbnail: fs.readFileSync('./media/image/logo.jpeg'), 
        surface: 200,
        message: 'SAKURA BOT',
        orderTitle: '5', 
        sellerJid: '0@s.whatsapp.net'
        }
        }
        }
		const freply = {
        key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": fs.readFileSync('media/image/logo.jpeg') //Gambarnye
		},
		"title": 'SAKURA BOT', 
		"description": "NO", 
		"currencyCode": "USD",
		"priceAmount1000": "99",
		"retailerId": 'BOT WEA',
		"productImageCount": 1
		},
	    "businessOwnerJid": `0@s.whatsapp.net`
		}
	    }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
        }
		
		const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, './stik' + names + '.png', async function () {
                console.log('selesai');
                let filess = './stik' + names + '.png'
                let asw = './stik' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                let media = fs.readFileSync(asw)
                client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                fs.unlinkSync(filess)
                fs.unlinkSync(asw)
                });
                });
                }
                const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
               });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
                        
                
	        const addAfkId = (userId, alasane, ddi, afkname) => {
				ddi = moment.tz('Asia/Jakarta').format('DD/MM/YYYY || HH:mm:ss')
				afkname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
				const obj = {jid: userId, alasan: alasane, nama: afkname, time: ddi}
				aefka.push(obj)
				fs.writeFileSync('./database/grup/userafk.json', JSON.stringify(aefka))
			}

const getAfkAlasan = (userId) => {
				let position = false
				Object.keys(aefka).forEach((i) => {
			    if (aefka[i].jid === userId) {
				position = i
				}
				})
				if (position !== false) {
				return aefka[position].alasan
				}
			}
const getAfkSejak = (userId) => {
				let position = false
				Object.keys(aefka).forEach((i) => {
				if (aefka[i].jid === userId) {
					position = i
					}
				})
				if (position !== false) {
					return aefka[position].time
				}
			}
const getAfkName = (userId) => {
				let position = false
				Object.keys(aefka).forEach((i) => {
				if (aefka[i].jid === userId) {
					position = i
					}
				})
				if (position !== false) {
					return aefka[position].nama
				}
			}
const cekAfkUser = (userId) => {
				let status = false
				Object.keys(aefka).forEach((i) => {
				if (aefka[i].jid === userId) {
					status = true
					}
				})
				return status
			}
const getAfkId = (userId) => {
				let position = false
				Object.keys(aefka).forEach((i) => {
				if (aefka[i].jid === userId) {
					position = i
					}
				})
				if (position !== false) {
					return aefka[position].jid
				}
			}
             
        if (isGroup) {
				mentioned = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
				for (let ment of mentioned) {
				if (cekAfkUser(ment)) {
				const getId = getAfkId(ment)
				namanya = await client.contacts[getId] != undefined ? client.contacts[getId].vname || client.contacts[getId].notify : undefined
				sejak = getAfkSejak(getId)
				alasann = getAfkAlasan(getId)
				reply(`*「 Afk Mode 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n\n*Username :* ${namanya}\n*Alasan :* ${alasann}\n*Sejak :* ${sejak}`)
			}
		}
	}
if (isGroup) {
			nameAfk = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined 
			for (let farhan of aefka) {
			ygafk = `${farhan.jid}`
			if (sender.includes(ygafk)) {
			reply(`*${nameAfk} Telah berhenti afk*`)
			aefka.splice(sender, 1)
			fs.writeFileSync('./database/grup/userafk.json', JSON.stringify(aefka))
				}
			}
		}
        //function antilink
		if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiPromote) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「PROMOTE  DETECTOR 」*\nKamu ${sender.split("@")[0]} akan dikick karena mengirimkan link promote tanpa #izinadmin!`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("byee...")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Ucapkan dulu selamat tinggal, semoga amal ibadah nya di terima ya :v")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("terdeteksi link group!")
		}, 0)
	}
	
     //function antilink
        if (messagesC.includes("://chat.whatsapp.com")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("byee...")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Ucapkan dulu selamat tinggal, semoga amal ibadah nya di terima ya :v")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("terdeteksi link group!")
		}, 0)
	}
			
if (budy.includes(`@verify`)) {
			client.updatePresence(from, Presence.composing)
			if (isUser) return reply('kamu sudah terverifikasi')
            try {
		    ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			lolm = await getBuffer(ppimg)
        	veri = sender
		    user.push(sender)
	        fs.writeFileSync('./database/user/user.json', JSON.stringify(user))
		    shiz = ` ${c}Verifikasi Sebagai User *SAKURA* 𝗕𝗢𝗧 Berhasil ${c}\n\n${c}-> Date : ${date}${c}\n\n${c}-> Time : ${time}${c}\n\n${c}-> Nama: ${pushname}${c}\n\n${c}-> Api : wa.me/${sender.split("@")[0]}${c}\n\n${c}-> Serial: ${createSerial(15)}${c}\n\n${c}User Terverifikasi : ${user.length}${c}\n\n${c}Terimakasih sudah verifikasi${c}\n${c}Sebelum memulai silahkan ketik !limit terlebih dahulu${c}`
           client.sendMessage(from, lolm, image, { quoted: freply, caption: shiz})
                                        buffer = fs.readFileSync(`./src/audio/robot.mp3`)
				client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: freply, ptt: true })
                }
                    
if (budy.includes(`#daftar`)) {
			client.updatePresence(from, Presence.composing)
			if (isUser) return reply('kamu sudah terverifikasi')
            try {
		    ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			lolm = await getBuffer(ppimg)
        	veri = sender
		    user.push(sender)
	        fs.writeFileSync('./database/user/user.json', JSON.stringify(user))
		    shiz = ` ${c}Verifikasi Sebagai User *SAKURA* 𝗕𝗢𝗧 Berhasil ${c}\n\n${c}-> Date : ${date}${c}\n\n${c}-> Time : ${time}${c}\n\n${c}-> Nama: ${pushname}${c}\n\n${c}-> Api : wa.me/${sender.split("@")[0]}${c}\n\n${c}-> Serial: ${createSerial(15)}${c}\n\n${c}User Terverifikasi : ${user.length}${c}\n\n${c}Terimakasih sudah verifikasi${c}\n${c}Sebelum memulai silahkan ketik !limit terlebih dahulu${c}`
           client.sendMessage(from, lolm, image, { quoted: freply, caption: shiz})
           buffer = fs.readFileSync(`./src/audio/robot.mp3`)
		   client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: freply, ptt: true })
           }
                    
			colors = ['white','grean','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && !isGroup) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await client.chatRead(from)}
        
        if (isCmd && isGroup) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            await client.chatRead(from)}
        
        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
            console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            return reply('*Wait Cooldown 5 detik*')}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
            console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            return reply('*Wait Cooldown 5 detik*')
        }
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
 	    
            function addMetadata(packname, author) {
				if (!packname) packname = 'made by admin'; if (!author) author = 'made by admin';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/sticker/${name}.exif`)) return `./media/sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./media/sticker/${name}.exif`, buffer, (err) => {	
					return `./media/sticker/${name}.exif`	
				})	
}
if (budy.includes(`Assalamualaikum`)) {
reply('Waalaikumsallam, Ya kak ada apa ? ketik #menu jika ingin menggunakan bot')
                    }
if (budy.includes(`assalamualaikum`)) {
reply('Waalaikumsallam, Ya kak ada apa ? ketik #menu jika ingin menggunakan bot')
}
if (budy.includes(`@6282279601471`)) {
await sedmes(`*Ada apa tag² Owner Ku?*`, MessageType.text, sakuragans, `JANGAN TAG² SU!`)
                /***********STICKER***********/
if (budy.includes(`ff`)) {
buffer = fs.readFileSync(`./src/sticker/epep.webp`)
costum(buffer, sticker, testcuk,`Main ep ep bang?`)
}
}
            switch(command) {
			case 'help':
			case 'menu':
			  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				const timestamp = speed();
                const latensi = speed() - timestamp
                uptime = process.uptime()
               shizz = `Hei *${pushname}*
               
*✿ INFO SAKURA*
☉ ${c}Nama${c} : ${c}SAKURA✿ シ${c}
☉ ${c}Owner${c} : ${c}Reihan${c}
☉ ${c}Website${c} : ${c}http://hariyadin.xyz${c}
☉ ${c}Ver${c} : ${c}${client.browserDescription[0]}, ${client.browserDescription[2]}${c}
☉ ${c}Register${c} : ${c}${user.length} User${c}
☉ ${c}Device${c} : ${c}${client.user.phone.device_manufacturer} ${client.user.phone.device_model}${c}
☉ ${c}Ram${c} : ${c}${RAM}${c}
☉ ${c}Total Hit${c} : ${c}${totalhit.length}${c}

*✿ INFO USER*
☉ ${c}User${c} : ${c}${pushname}${c}
☉ ${c}Status${c} : ${c}${premi}${c}
☉ ${c}No${c} : ${c}${sender.split("@")[0]}${c}    
☉ ${c}Limit${c} : ${c}${asu} / Day${c}
☉ ${c}Role${c} : ${c}${role}${c}

${c}${tampilHari}${c}

*✿ WAKTU*
☉ ${c}Jam : ${time} Wib⌚${c}
☉ ${c}Jam : ${wit} Wit⌚${c}
☉ ${c}Jam : ${wita} Wita⌚${c}

${c}Tgl${c} : ${c}${tampilTanggal}${c}


ㅤㅤㅤ☏ = ${c}Block☠${c} 


*✿ INFO SAKURA*
❒ ${c}${prefix}info${c}
❏ ${c}${prefix}owner${c}
❏ ${c}${prefix}runtime${c}
❏ ${c}${prefix}rulesbot${c}

*✿ LIST MENU*
❏ ${c}${prefix}ownermenu${c}
❏ ${c}${prefix}makermenu${c}
❏ ${c}${prefix}convertmenu${c}
❏ ${c}${prefix}storagemenu${c}
❏ ${c}${prefix}groupmenu${c}
❏ ${c}${prefix}downloadmenu${c}
❏ ${c}${prefix}stickermenu${c}
❏ ${c}${prefix}gamemenu${c}
❏ ${c}${prefix}othermenu${c}
❏ ${c}${prefix}islammenu${c}
❏ ${c}${prefix}kerangmenu${c}
❏ ${c}${prefix}animemenu${c}
❏ ${c}${prefix}nsfwmenu${c}
❏ ${c}${prefix}sakuramenu${c}

*✿ TAHNKS TO:*
➽ _Allah SWT_
➽ _Ikky_
➽ _Arga_
➽ _Ramlan_
➽ _Nayla_
➽ _Aqulz_
➽ _All Creator Lainnya_`,
client.sendMessage(from, imgnya, image, { quoted:freply, caption: shizz})
break

case 'pitch':
					if (!isOwner) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('reply sound nya!!!')
					pitch = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					if (!Number(args[0])) return reply(`Contoh Penggunaan : ${prefix}pitch 4`)
					if (args[0] > 12) return reply("Max 12")
					const pitchsave = await client.downloadAndSaveMediaMessage(pitch, `./src/audio/${args[1]}.mp3`)
					exec(`ffmpeg -i ${pitchsave} -filter_complex \`asetrate=48000*2^(${args[0]}/12),atempo=1/2^(${args[0]}/12)\` src/audio/${args[1]}.mp3 -y`, (err, stderr, stdout) => {
					if (err) return reply('ERROR')
					client.sendMessage(from, `./database/audio/${args[1]}.mp3`, MessageType.audio, {quoted: mek})
					})
				break
				/*----------------MAKER-----------------*/
                  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                const processsTime = (timestamp, now) => {
                	// timestamp => timestamp when message was received
                return moment.duration(now - moment(timestamp * 1000)).asSeconds()
                }
                reply(`*Speed :* ${processsTime(mek.messageTimestamp.low, moment())} _second_`)
              break
           /*------------------STORAGE-----------------*/
			    case 'nightcore':
	                if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					    })
				    break 
					case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					    })
				  break
				  case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
				break
				case 'blub':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
				break
				case 'ghost':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
				break
		       case 'bass':
		            client.sendMessage(from, mess.wait, text, { quoted: freply })
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: freply })
					fs.unlinkSync(ran)
					})
				 break
	             case 'blocklist':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: {"mentionedJid": blocked}})
                break
			   case 'owner':
			   case 'creator':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
                    await cosContact({displayname: "haryadin", vcard: vcard}, MessageType.contact, sakuragans, `HARYADIN`)
                    await cosContact('Noh bro nomer owner ku ><',MessageType.text, sakuragans, `HARYADIN`)
				break
                 case 'listonline':
        	    	let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			        let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			        client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				case 'tourl':
				    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		           owgi = await client.downloadAndSaveMediaMessage(ger)
		           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
		            teks = `${anu.display_url}`
				    reply(teks)
				    }
				break
	            case 'block':
				     if (isBanned) return reply(mess.only.benned)    
				     if (!isUser) return reply(mess.only.userB)
				     
				     client.updatePresence(from, Presence.composing) 
				     client.chatRead (from)
					 if (!isGroup) return reply(mess.only.group)
					 if (!isOwner) return reply(mess.only.ownerB)
					 client.blockUser (`${body.slice(7)}@c.us`, "add")
					 client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
                break
                case 'unblock':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
               break
               case 'setname':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: freply })
                
				break
                case 'setdesc':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: freply })
                
					break
				case 'tts':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: freply })
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: freply })
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
						fs.unlinkSync(ranm)
						lol = fs.readFileSync(rano)
						if (err) return reply('Gagal om:(')
						client.sendMessage(from, lol, audio, { quoted: freply, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                break		
	            case 'setpp':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    
					break
                    case 'apakah':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: freply }) 
                break
				case 'rate':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				rate = body.slice(5)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: freply }) 
                break
				case 'term':
if (!isOwner) return reply(mess.only.ownerB)
	const cmd = body.slice(6)
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝙀𝙓𝙀𝘾𝙐𝙏𝙊𝙍*`
	const term = {
	contextInfo: {
	participant: '0@s.whatsapp.net',
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
			}
		}
	}
	exec(cmd, (err, stdout) => {
	if(err) return client.sendMessage(from, `root@SAKURA:~ ${err}`, text, { quoted: mek })
	if (stdout) {
	client.sendMessage(from, stdout, text, term)
		}
	})
	break
                case 'run':
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break
      case 'restart':
		if (!isOwner) return reply(mess.only.ownerB)
		setTimeout( () => {
			return process.send('reset')
			}, 2000)
		setTimeout( () => {
		reply('RESTART SUKSES!!')
		}, 0)
		break 
		case 'bisakah':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				bisakah = body.slice(7)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: freply }) 
                break
				case 'kapan':
				case 'kapankah':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				kapankah = body.slice(7)
				const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: freply }) 
                break
				case 'truth':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','Sebutkan Mantan Terbaik Mu','Jujur Lo Pernah Galmop Kesiapa?','Post/Snap Poto Mantan Mu Dengan Caption "Aku Masih Sayang Dia','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://j.top4top.io/p_1831atz0u0.jpg`)
				client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply }) 
                break
                case 'slot':
                const sotoy = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍒 : 🍐',
                    '🍊 : 🍋 : 🔔',
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : 🔔',		
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍐 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : ?? : 🍇',
                    '🍌 : 🍒 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : ?? : 🍒',
                    '🍋 : 🍋 : 🍌',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍐 : 🍇',
                    '🔔 : 🔔 : 🔔',
                    '🍒 : 🍒 : 🍒',
                    '🍌 : 🍌 : 🍌',
                    '🍇 : 🍇 : 🍇'
                    ]
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
                    client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text, {quoted : freply})
                     memekmu = Math.floor(Math.random() * 10) + 200
                	addLevelingXp(sender, memekmu)
                    client.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                    client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text, {quoted : freply})
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addLevelingXp(sender, memekmu)
                    client.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🔔 : 🔔 : ??') {
                    client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text, {quoted : freply})
                   memekmu = Math.floor(Math.random() * 10) + 200
                	addLevelingXp(sender, memekmu)
                    client.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text, {quoted : freply})
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                    client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text, {quoted : freply})
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addLevelingXp(sender, memekmu)
                    client.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                    client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text, {quoted : freply})
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addLevelingXp(sender, memekmu)
                    client.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else {
	     	        client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | LOST ]\n\n`, text, {quoted : freply})
	     	    }
                break
                case 'dare':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','Kirim Poto Mantanmu Yang Saat Ini Lo Galmopin','Jujur Sekarang Lo Suka Sama Siapa?','Chat Mantan Dengan Caption "Aku Masih Sayang Kamu" Jika Sudah SS Kirim Ke Pemain','Paling Lama Pacaran Berapa Bulan','Prank Pacar Mu Dengan Caption "Maaf Kita Putus Aja Aku Udah Gak Nyaman" Jika Sudah SS Kirim Ke Pemain','Prank Teman Mu Ajak Pacaran Jika Sudah SS Kirim Ke Pemain','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				ssbot = await getBuffer(`https://j.top4top.io/p_1831atz0u0.jpg`)
				client.sendMessage(from, ssbot, image, {  quoted: freply, caption: '*Dare*\n\n'+ der })
                break				
                case 'tagme':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				var mej = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [mej] }
					}
					client.sendMessage(from, tag, text, {quoted: freply })
                break     
				case 'return':
				return client.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: mek})
				break
                case 'kick':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Perintah di terima, mengeluarkan :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				client.groupRemove(from, mentioned)
				} else {
				setTimeout( () => {
				mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
				}, 0) // 100 = 5s,
				setTimeout( () => {
			    client.groupRemove(from, mentioned, {quoted: freply }) // ur cods
				}, 2000) // 1000 = 5s,
				setTimeout( () => {
			    client.sendMessage(from, '_selamat tinggal titip gorengan ya janyan balik Lagi_', text) // ur cods
				}, 1000) // 1000 = 5s,
				setTimeout( () => {
				client.sendMessage(from, '_siap siap ya SAKURA 𝘽𝙊𝙏 Kick nih_', text, { quoted: freply })  // ur cods
				}, 0) // 1000 = 10s,
				}
                break
                case 'tomp3':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                if (!isQuotedVideo) return reply('Tag videonya lol')
					wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
					bufferlkj = fs.readFileSync(ran)
					client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4',  quoted: freply })
					fs.unlinkSync(ran)
					})
                break
                case 'memeindo':
				case 'meme':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolhuman}`)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: '.......'})
                break
			    case 'randomhentai':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘??𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'hentai':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
				    res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'boobs':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] ??𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'yuri':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/yuri`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔??𝗜 ????𝗬 ??𝗨𝗦???? [❗]')
					}
                break
			    case 'foxgirls':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/fox_girl`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'lewd':
				   try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
				res = await fetchJson(`https://nekos.life/api/v2/img/lewd`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
						console.log(`Error :`, color(e,'yellow'))
						reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 ?????? 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'bj18+':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/bj`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚??𝗜𝗡 𝗔??𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'runtime':
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                                        await costum(runtime(prefix, botName, ownerName, kyun), text, testcuk, cr)
                                        
					break
                    case 'donate':
                    case 'donasi':
                    await costum(donasi(prefix, botName, ownerName), text, testcuk, dn)
                    break
                    case 'rulesbot':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                await costum(rules(prefix, botName, ownerName), text, testcuk, rl)
                                        
		        break
                case 'info':
                case 'profile':
                case 'infobot':
		        var me = await client.user
				user.push(sender)
				uptime = process.uptime()
				teks = `➽ *Nama Bot* : SAKURA BOT\n➽ *Owner Bot* : https://api.whatsapp.com/${ownerNumber}\n➽ *prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Browser* : ${client.browserDescription[1]}\n➽ *Server* : ${client.browserDescription[0]}\n➽ *Device* : ${client.user.phone.device_manufacturer} \n➽ *Device Model* : ${client.user.phone.device_model}\n➽ *Ram* : ${RAM}\n➽ *OS Model* : ${client.user.phone.os_version}\n➽ *OS Build Number* : ${client.user.phone.os_build_number}\n➽ *Wa Version* : ${client.user.phone.wa_version}\n➽ *Aktif Sejak* : ${kyun(uptime)}\n➽ *Total Pengguna* : ${user.length} User\n\n➽ *Special Thanks To* :\n\n➽ Allah SWT \n➽ DuingZ\n➽ Arga\n➽ Bryan\n➽ Rizky\n➽ Bagus\n➽ Ramlan\n➽ RizkyO\n➽ Nayla\n➽ Rifai\n➽ Akmal`
					try {
					pp = await client.getProfilePicture(botNumber)
					} catch {
					pp = 'https://i.ibb.co/f8K14jz/327aae709c00.jpg'}
					buffer = await getBuffer(pp)
					//buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {quoted: freply, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
                  case 'jadian':
                    if (!isGroup) return reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                            jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					teks = `Ciee.. yang lagi jadian *@${aku.jid.split('@')[0]}* ♥️ *@${cintax.jid.split('@')[0]}* `
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(teks, jds, true)
                break
				case 'wa.me':
				case 'wame':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
  client.updatePresence(from, Presence.composing) 
      if (!isUser) return reply(mess.only.userB)
				
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}?text=${body.slice(6)}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, {  quoted: freply }) 
				break
			    case 'bucin':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				gatauda = body.slice(7)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${lolhuman}`, {method: 'get'})
					reply(anu.result)
                break	
                case 'puisi':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				gatauda = body.slice(9)
					anu = await fetchJson(`https://masgi.herokuapp.com/api/puisi2`, {method: 'get'})
					reply(anu.data)
                break
				case 'pantun':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				gatauda = body.slice(8)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolhuman}`, {method: 'get'})
					reply(anu.result)
                break
				case 'sticker':
				case 's':
				case 'stiker':
				case 'sgif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('@SAKURA-BOT',' HARYADIN')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
								     client.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: { forwardingScore: 508, isForwarded: true },  quoted: freply })
                                     fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('@SAKURA-BOT',' HARYADIN')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: freply })
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: freply })
									fs.unlinkSync(ranw)
								})
								})
						})
					
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break  
				  case 'getjodoh':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isUser) return reply(mess.only.userB)
                    up = user
                    aku = up[Math.floor(Math.random() * up.length)];
                    pcard = 'BEGIN:VCARD\n' // metadata of the contact card
                                        + 'VERSION:3.0\n'
                                        + `FN:Random Kontak\n` // full name
                                        + `TEL;type=CELL;type=VOICE;waid=${(aku.split('@')[0])}:${(aku.split('@')[0])}\n` // WhatsApp ID + phone number
                                        + 'END:VCARD'
                 client.sendMessage(from, {displayname: "HARYADIN", vcard: pcard}, contact, {quoted:mek})
                    break
 /*-----------------------DOWNLOAD-------------------*/
				case 'play':   
					if (!isUser) return reply(mess.only.userB)
				
				play = args.join(" ")
              if (!play) return reply('*Judul lagu nya apa?*')
                wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
                play = body.slice(6)
                anu = await fetchJson(`https://hariyadin.herokuapp.com/api/yt/playmp3?query=${play}&apikey=kentu`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Lagu Ditemukan!!!*\n${c}Judul : ${anu.title}${c}\n${c}Channel : ${anu.channel}${c}\n${c}Views : ${anu.views}${c}\n${c}Published : ${anu.published}${c} \n\n*Tunggu sebentar sakura bot sedang mengirim audio nya*`
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.url)
                client.sendMessage(from, buffer, image, { quoted: freply, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`,  quoted: freply })
                
					break
					case 'playmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jedag jedug`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://hariyadin.herokuapp.com/api/yt/playmp4?query=${ini_link}&apikey=kentu`)
                    ini_txt = `*Data Berhasil Didapatkan!*\n\n*Title* : ${get_result.title}\n*Channel* : ${get_result.channel} \n*Views* : ${get_result.views}\n*Published* : ${get_result.published}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    ini_buffer = await getBuffer(get_result.thumb)
                    ini_video = await getBuffer(get_result.url)
                    await client.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    
                    await client.sendMessage(from, ini_video, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftroli})
                    break
					case 'ytmp3':   
					if (!isUser) return reply(mess.only.userB)
				
                play = args.join(" ")
              if (!play) return reply('*Link yt nya mana?*')
                wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
                anu = await fetchJson(`https://hariyadin.herokuapp.com/api/download/ytmp3?url=${play}&apikey=kentu`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${anu.result.title}\n*Ext* : MP3\n*Views* : ${anu.result.views}\n*Published* : ${anu.result.published}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.url)
                client.sendMessage(from, buffer, image, { quoted: freply, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`,  quoted: freply })
                
					break
					case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://hariyadin.herokuapp.com/api/download/ytmp4?url=${ini_link}&apikey=kentu`)
                    ini_txt = `*Data Berhasil Didapatkan!*\n\n*Title* : ${get_result.result.title}\n*Ext* : MP4\n*Views* : ${get_result.result.views}\n*Published* : ${get_result.result.published}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    ini_buffer = await getBuffer(get_result.result.thumb)
                    ini_video = await getBuffer(get_result.result.url)
                    await client.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    
                    await client.sendMessage(from, ini_video, video, { mimetype: 'video/mp4', filename: `${get_result.result.title}.mp4`, quoted: ftroli})
                    break
					case 'kontag':                    
				if (!isUser) return reply(mess.only.userB)
             if (isBanned) return reply(mess.only.benned)    
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
              if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +62xxxx| SAKURA`)
				var gh = body.slice(9)
                var tyu = gh.split("|")[0];
                var ajc = gh.split("|")[1];
                    if (isNaN(tyu)) return reply('Invalid phone number');
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
                    vcard3 = `BEGIN:VCARD\n`
                     + `VERSION:3.0\n`
                     + `FN:${ajc}\n`
                     + `TEL;type=CELL;type=VOICE;waid=${tyu}:${phoneNum('+' + tyu).getNumber('internasional')}\n`
                     + 'END:VCARD'.trim()
                     client.sendMessage(from, {displayName: ajc, vcard: vcard3}, contact, { contextInfo: {"mentionedJid": members_ids}})
                     await sedmes('Kalo gk pake + ngebug ntar', MessageType.text, sakuragans, `「 SAKURA BOT 」`)             
                break
                case 'image':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply('Apa yang mau dicari kak?')
					wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
					goo = body.slice(7)
					pint = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=${goo}`)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: freply }) 
                break
	/*--------------ANIME--------------*/
	           case 'sakura':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
				     if (!isGroup) return reply(mess.only.group)
                   if (!isAnime) return reply('[❗] Fitur Anime Belum Dihidupkan Ketik !openanime enable, jika ingin mematikan ketik !openanime disable')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=sakura`, {method: 'get'})
					nye = await getBuffer(anu.result)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: freply }) 
                break
				case 'kaneki':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
				     if (!isGroup) return reply(mess.only.group)
                   if (!isAnime) return reply('[❗] Fitur Anime Belum Dihidupkan Ketik !openanime enable, jika ingin mematikan ketik !openanime disable')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=kaneki`, {method: 'get'})
					nye = await getBuffer(anu.result)
					client.sendMessage(from, nye, image, { caption: 'kaneki!!', quoted: freply }) 
                break
				case 'akira':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
				     if (!isGroup) return reply(mess.only.group)
                   if (!isAnime) return reply('[❗] Fitur Anime Belum Dihidupkan Ketik !openanime enable, jika ingin mematikan ketik !openanime disable')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=akira`, {method: 'get'})
					nye = await getBuffer(anu.result)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: freply }) 
                break
				case 'itori':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
				     if (!isGroup) return reply(mess.only.group)
                   if (!isAnime) return reply('[❗] Fitur Anime Belum Dihidupkan Ketik !openanime enable, jika ingin mematikan ketik !openanime disable')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=itori`, {method: 'get'})
					nye = await getBuffer(anu.result)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: freply }) 
                break
                case 'fordward':
	            client.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
             break
             case 'ping':
			personal = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net') && !v.read_only && v.message).map(v => v.jid)
			groups = client.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
			if (!isUser) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			const ntimestamp = speed()
			const ntotalchat = await client.chats.all()
			const nlatensi = speed() - ntimestamp
			const pingnya = `Speed: ${nlatensi.toFixed(4)} Second`
			await cosLocation(monospace(`Loader All Message\n\n- [ ${groups.length} ] Group Chats\n- [ ${personal.length} ] Personal Chats\n- [ ${ntotalchat.length} ] Total Chats\n- [ ${client.user.phone.device_manufacturer} ] Handphone\n- [ ${client.user.phone.wa_version} ] Wa Version\n- [ ${client.browserDescription[0]} ] Server\n- [ ${client.browserDescription[2]} ] Version Server\n\nSpeed: [ ${nlatensi.toFixed(4)} ] _Seconds`), text)
			break
				case 'pinterest':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(mess.search)
                    wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
					pinte = body.slice(10)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=${pinte}`, {method: 'get'})
					pine = await getBuffer(anu.result)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: freply }) 
                break
                case 'nulis':
				case 'tulisv2':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(8)
					wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
					buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${tulis}&apikey=${zeks}`)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Nehh *SAKURA* 𝘽𝙊𝙏 tulisin dasar anak pemalas'})
                break
				case 'bugc':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.toggleDisappearingMessages(from, 0)
					break
				case 'darkjokes':
			    case 'darkjoke':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                                asuh = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=${zeks}`)
					           wew = `❮⏳❯  \`\`\`Please Wait ${pushname}\`\`\``
					await sedmes(wew, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
                                dark = asuh.result
                                thumb = await getBuffer(dark)
                                client.sendMessage(from, thumb, image, {quoted: freply })
                                
					break
				/*----------------NSFW----------------*/
				case 'blowjob':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
                   if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
						res = await fetchJson(`https://nekos.life/api/v2/img/blowjob`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
						console.log(`Error :`, color(e,'yellow'))
						reply('[❗] ??𝗥??𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔??𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			     case 'neko':
				    try {
				if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					res = await fetchJson(`https://waifu.pics/api/nsfw/neko`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
						console.log(`Error :`, color(e,'yellow'))
						reply('[❗] ??𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 ????𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'nsfwtrap':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                   if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
						res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
						console.log(`Error :`, color(e,'yellow'))
						reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'nsfwneko':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			    if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜?? 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'nsfwblowjob':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Astagfirullah anda berdosa banget.'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'nsfwblowjob':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
		             		}
                break
			    case 'nsfwneko':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'animecry':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
					console.log(`Error :`, color(e,'yellow'))
					reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞??𝗡 𝗔𝗣𝗜 𝗞𝗘?? 𝗥𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'hentai':
				 try {
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ ?? ❭ command/Perintah NSFW belum di aktifkan di group ini!')
					res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'yellow'))
						reply('[❗] 𝗘??𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜?? 𝗔𝗣𝗜 𝗞𝗘𝗬 ??𝗨𝗦𝗔𝗞 [❗]')
					}
                break
			    case 'animehug':
				    try {
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply('❬ 👎 ❭ command/Perintah NSFW belum di aktifkan di group ini!')
				res = await fetchJson(`https://nekos.life/api/v2/img/hentai`, {method: 'get'})
				buffer = await getBuffer(res.url)
				client.sendMessage(from, buffer, image, { quoted: freply, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'yellow'))
				reply('[❗] 𝗘𝗥𝗢𝗥 𝗠𝗨𝗡𝗚𝗞𝗜𝗡 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗥𝗨𝗦𝗔?? [❗]')
					}
                break
				case 'attp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limits.limitend(pushname))
				if (args.length < 1) return reply('*Textnya mana gan?*')
				var bby = body.slice(6)
				atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(bby)}`)
			    client.sendMessage(from, atetepe, sticker, { quoted: ftroli})
			  break
             case 'ttp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limits.limitend(pushname))
				if (args.length < 1) return reply('*Textnya mana gan?*')
				var bby = body.slice(4)
				atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(bby)}`)
			    client.sendMessage(from, atetepe, sticker, { quoted: ftroli })
				 
			    break
		        case 'grup':
			    case 'gc':
				case 'group':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args[0] === 'buka') {
			    reply(`𝐏??𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢??𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮?? 𝐬𝐞??𝐮𝐚 𝐨𝐫𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 ??𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩????𝐚𝐧`)
				client.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
				reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦??, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮??𝐚𝐡 𝐠𝐫??𝐮𝐩 𝐡𝐚𝐧??𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
				client.groupSettingChange(from, GroupSettingChange.messageSend, true)
				}
                break
			    case 'suit':
                if (isLimit(sender)) return 
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
                const userspilih = args.join(' ')
                
                var computer = Math.random()
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
                const lel =['4','9','5','3','7','8','10','9','4','9','2','20','6']
				const skot = lel[Math.floor(Math.random() * lel.length)]
                if ( userspilih == computer ) {
                    
                    reply(`Pertandingan kamu dengan bot Seri!`)
                    
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        
                        reply(`🎉 KAMU MENANG 🎉\n\nKamu: ✊\nBot: ✌\n\nKamu mendapat ${skot} limit`)
                        bayarLimit(sender, skot)
                    } else {
                        reply(`😵 KAMU KALAH 😵\n\nKamu: ✊\nBot: 🖐`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        
                        reply(`😵 KAMU KALAH 😵\n\nKamu: ✌\nBot: ✊`)
                    } else {
                    	reply(`🎉 KAMU MENANG 🎉\n\nKamu: ✌\nBot: 🖐\n\nKamu mendapat ${skot} limit`)
                    bayarLimit(sender, skot)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        
                        reply(`🎉 KAMU MENANG 🎉\n\nKamu: 🖐\nBot: ✊\n\nKamu mendapat ${skot} limit`)
                        bayarLimit(sender, skot)
                    } else {
                        reply(`😵 KAMU KALAH 😵\n\nKamu: 🖐\nBot: ✌`)
                    }
                
            } else {
                reply(`Format salah, masukkan pilihanmu\n\nContoh: ${prefix}suit kertas`)
            }
                break
                case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*#* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
                break
			  case 'clear':
                if (!isOwner) return reply('*_Owner Only_*')
                await exec('rm -f media')
                reply('sukses clear media')
                break
				case 'bc':
				if (!isOwner) return reply('Kamu siapa?')
				if (args.length < 1) return reply('text?')
				anu = await client.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				buff = await client.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				client.sendMessage(_.jid, buff, image, {caption: `[ Bot Broadcast ]\n\n${body.slice(4)}`})
				}
				reply('Suksess broadcast')
			    } else {
				for (let _ of anu) {
				sendMess(_.jid, `[ *SAKURA BROADCAST* ]\n\n${body.slice(4)}`)
				}
				reply('Suksess broadcast')
				}
                break
				case 'add':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Yang mau di add jin ya?')
				if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					client.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return client.sendMessage(from, 'Diprivate kak:v', MessageType.text)
				}
				break
				case 'promote':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = 'Perintah di terima, anda menjdi admin :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					client.groupMakeAdmin(from, mentioned)
					} else {
					mentions(`Perintah di terima, anda menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.groupMakeAdmin(from, mentioned)
					}
                    break
					case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply(mess.only.userB)
				if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                break
					case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
                break
				case 'unreg':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/user.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unreg!`)
                break
				case 'banlist':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
				    teks = 'This is list of ban number :\n'
					for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: {"mentionedJid": ban}})
                break
			    case 'unpromote':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda tidak menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
                break
			    case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = '10.mp4'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('*Harap tunggu sampai 1 bulan*')
							buffer = fs.readFileSync(ran)
							client.sendMessage(from, buffer, video, {quoted: mek, caption: 'NIH'})
							fs.unlinkSync(ran)
						})
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('*Harap tunggu sampai 1 bulan*')
							buffer = fs.readFileSync(ran)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH'})
							fs.unlinkSync(ran)
						})
					}
					break
                    case 'ban':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`Berhasil Nomer : ${ban} Telah di banned !`)
                break
                case 'myprofile':
				case 'my':
					client.updatePresence(from, Presence.composing)
					statusme = await client.getStatus(sender)
					profilecard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `FN:${pushname}\n` + `TEL;type=CELL;type=VOICE;waid=${(sender.split('@')[0])}:${(sender.split('@')[0])}\n` + 'END:VCARD' 
					str = `\n${c}Username*: ${pushname} [ @${sender.split`@`[0]} ]${c}\n${c}Id*: ${sender.split`@`[0]}@c.us${c}\n${c}Bio: ${statusme}${c}\n${c}Link Chat: https://wa.me/${sender.split`@`[0]}${c}\n${c}Premium: ${premi}${c}\n${c}Level : ${getLevelingLevel(sender)}${c}\n${c}XP : ${getLevelingXp(sender)}${c}\n${c}Balance* : ${checkATMuser(sender)}${c}`.trim()
					try {
					ppUrl = await client.getProfilePicture(sender)
					pp = await getBuffer(ppUrl)
					} catch {
					pp = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg' 
					}
					await client.sendMessage(from, pp, image, {caption: str, quoted: freply, contextInfo: {"mentionedJid": [sender]}})
					await cosContact({displayname: "Wanda", vcard: profilecard}, contact, `${pushname}`)
				break
				case 'upswteks':
				if (!isOwner) return reply(mess.only.ownerB)
					client.updatePresence(from, Presence.composing)
					client.sendMessage('status@broadcast', `${q}`, extendedText)
					reply(`Sukses Up story wea teks ${q}`)
					break
				case 'upswimage':
				if (!isOwner) return reply(mess.only.ownerB)
					client.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await client.downloadMediaMessage(swsw)
						client.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					client.sendMessage(from, bur, text, { quoted: mek })
					break
					case 'upswsticker':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = '10.mp4'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('Gagal :V')
							buffer = fs.readFileSync(ran)
							client.sendMessage('status@broadcast', media, sticker, { caption: `${q}` })
							bur = `Sukses Upload Story Image dengan Caption: ${q}`
					        client.sendMessage(from, bur, text, { quoted: mek })
							fs.unlinkSync(ran)
						})
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('Gagal :V')
							buffer = fs.readFileSync(ran)
							client.sendMessage('status@broadcast', media, sticker, { caption: `${q}` })
							bur = `Sukses Upload Story Image dengan Caption: ${q}`
					        client.sendMessage(from, bur, text, { quoted: mek })
							fs.unlinkSync(ran)
						})
					}
					break
				case 'upswvideo':
				if (!isOwner) return reply(mess.only.ownerB)
					client.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await client.downloadMediaMessage(swsw)
						client.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					client.sendMessage(from, bur, text, { quoted: mek })
					break  
					case 'join':
			if (args.length < 1) return reply('Link?')
			if (!isUrl(args[0]) && !args[0].includes('chats.whatsapp.com')) return reply(mess.error.Iv)
			try {
			const linkID = `${args[0].replace('https://chat.whatsapp.com/', '')}`
			const joinGroup  = await client.acceptInvite(linkID)
			reply('Sukses Join Group Dengan ID '+ joinGroup.gid)
			} catch {
				reply('Maaf Min Gabisa Join Karna Bot Udah Dikick Dari Group Tersebut')
				}
		break
		case 'listonline':
			  if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			let idoo = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let onlinne = [...Object.keys(client.chats.get(idoo).presences), client.user.jid]
		    client.sendMessage(from, `list online group ${groupMetadata.subject}\n` + onlinne.map(v => '=> @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek, contextInfo: { mentionedJid: onlinne }
		    })
		break
		/*----------------STORAGE----------------*/
		case 'addsticker':          
        case 'addstiker':          
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isOwner) return reply('Khusus owner ini kak!')
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = args.join(" ")
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
				client.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: freply }) 
			break
			case 'addvn':
			case 'addaudio':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isOwner) return reply('Khusus owner ini kak!')
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = args.join(" ")
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				client.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply }) 
			break
			case 'getvn':
			case 'getaudio':
			if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
		    if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = args.join(" ")
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: freply, ptt: true })
				
			break
			case 'getsticker':
			case 'getstiker':
			case 'getstick':
			case 'gets':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = args.join(" ")
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				client.sendMessage(from, result, sticker)
		   break
           case 'liststicker':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply, contextInfo: { "mentionedJid": setiker } })
				
			break
			case 'listvn':
			case 'vnlist':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply, contextInfo: { "mentionedJid": audionye } })
			break
			case 'addimage':
			case 'addimg':
				if (!isOwner) return reply('Khusus owner ini kak!')
				if (!isQuotedImage) return reply('Reply imagenya!')
				svst = args.join(" ")
				if (!svst) return reply('Nama imagenya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				client.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: freply }) 
		    break
			case 'getimage':
            case 'getimg':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
				
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = args.join(" ")
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				client.sendMessage(from, buffer, image, {  quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				
			break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				
					break
			case 'addvideo':
			case 'addvid':
				if (!isOwner) return reply('Khusus owner ini kak!')
				if (!isQuotedVideo) return reply('Reply videonya!')
				svst = args.join(" ")
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply }) 
				
			break
			case 'getvideo':
			case 'getvid':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = args.join(" ")
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: freply }) 
				
			break
			case 'listvideo':
			case 'videolist':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply, contextInfo: { "mentionedJid": videonye } })
				break
				case 'cekchat':
				client.updatePresence(from, Presence.composing)
				teks = `Total : ${totalchat.length}`
				client.sendMessage(from, teks, MessageType.text)
				
					break
				case 'leave':
					if (!isOwner) return reply(mess.only.ownerB)
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
			/*-----------------group----------------*/
					case 'afk':
					if (!isUser)return reply(mess.only.userB)
					if (!isGroup)return reply(mess.only.group)
					reason = body.slice(5)
					teks = `「 *Afk* 」\n\n• *Username* : _${pushname}_\n• *Alasan* : _${reason ? reason : 'Ngeue:v'}_`
				    await sedmes(teks, MessageType.text, sakuragans, `「 SAKURA BOT 」`)
					addAfkId(sender, `${reason ? reason : 'Tanpa Alasan'}`)
					break 
				case 'grouplist':
				case 'gruplist':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					client.updatePresence(from, Presence.composing) 
					teks = `${c}Ini adalah list group ${name} :\n\n${c}`
					no = 0
					for (let hehehe of groupId) {
					no += 1
					teks += `${c}[${no.toString()}]${c} @${hehehe.split('@')[0]}\n`
					}
					teks += `\n${c}Total grup : ${groupId.length}${c}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
				break
				case 'groupinfo':
				case 'infogc':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, { quoted: freply, caption: teks})
                break
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: freply })
		        break
	            case 'texttag':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isOwner) return reply(mess.only.ownerB)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
				break		
                   case 'hidetag':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		        if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('kamu siapa?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
                break
				case 'audtag':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				    var encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadMediaMessage(encmedia)
					konsol = body.slice(7)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(from,media,audio,{contextInfo: { mentionedJid: mem },quoted: freply, ptt: true})
			      break
                  case 'imgtag':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				    var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadMediaMessage(encmedia)
					konsol = body.slice(7)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(from,media,image,{contextInfo: { mentionedJid: mem }, quoted: freply, caption: `${konsol}`})
			      break
                  case 'sticktag':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				    var encmedia = isQuotedSticker? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadMediaMessage(encmedia)
					konsol = body.slice(7)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

					})

					client.sendMessage(from,media,sticker,{contextInfo: { mentionedJid: mem },quoted: freply })

			      break
				case 'stag':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('kamu siapa?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, vcard)
                break
				case 'kontag':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('kamu siapa?')
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: mem,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, MessageType.contact)
                break
                case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Apaan si ? ketik #nsfw enable aja untuk mengaktifkan nya')
					if (args[0] == 'enable') {
						if (isNsfw) return reply('  ❬ 👍 ❭ *Enable nsfw !* ,')
						nsfw.push(from)
						fs.writeFileSync('./database/grup/nsfw.json', JSON.stringify(nsfw))
						reply('  ❬ 👍 ❭ *Sukses mengaktifkan menu nsfw, dosa tanggung admin:v*')
					} else if (args[0] == 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/grup/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 👎 ❭ *Sukses nsfw not aktif*')
					} else {
						reply('Enable or disable ? type again bro')
					}
                break
			    case 'openanime':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Salah udin type #openanime enable')
				    if (args[0] == 'enable') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('  ❬ 👍 ❭ *Enable openanime* ,')
					} else if (args[0] == 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('❬ 👎 ❭ *open anime not aktif')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
                break
				
				case 'antilinkgroup':
				case 'antilinkgrup':
				case 'antilink':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Sudah aktif kak* !!!')
					antilink.push(from)
					fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
					reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Anti link berhasil di aktifkan !*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Anti link berhasil di nonaktifkan !*')
					} else {
						reply(ind.satukos())
					}
					break
					case 'antipromote':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Sudah aktif min* !!!')
					antipromote.push(from)
					fs.writeFileSync('./database/grup/antipromote.json', JSON.stringify(antilink))
					reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Anti promote berhasil di aktifkan !*')
					} else if (Number(args[0]) === 0) {
					antipromote.splice(from, 1)
					fs.writeFileSync('./database/grup/antipromote.json', JSON.stringify(antilink))
					reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Anti promote berhasil di nonaktifkan !*')
					} else {
					reply(ind.satukos())
					}
					break
					case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
			       break
				   default:
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
					console.log(budy)
					muehe = await simih(budy)
				    console.log(muehe)
					reply(muehe)
					} else {
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
