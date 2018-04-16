
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

const token = '484075486:AAHm3Crd2wl_2SEW52lewlTegzYrwD-rDLw';


var serialport = require("serialport");
var miSerial = new serialport("COM3", {
  baudRate: 9600,
  autoOpen: true
});

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El id es " + chatId)
  var respuesta = msg.text;
  if (respuesta == "apagar") {
    console.log("apagando...");
    bot.sendMessage(chatId, 'Apagando...');
    miSerial.write("apagar");

    bot.sendMessage(chatId, 'Alarma apagada');
  }
});

var idChat = 534322797;

miSerial.setEncoding('utf8');
miSerial.on('data', function(data) {
  console.log('Data:', data);
  bot.sendMessage(idChat,  data) ;

});
