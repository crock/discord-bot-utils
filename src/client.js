const fs = require('fs');
const path = require('path');
const colors = require('colors');
const Discord = require('discord.js');
const Config = require('./config');

class BotClient {
  constructor() {
    this.client = new Discord.Client();
    let eventsPath = path.join(process.cwd(), 'events');
    fs.readdir(eventsPath, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        let eventName = file.split('.')[0];
        let eventFile = require(path.join(eventsPath, file));
        this.client.on(eventName, object => eventFile.run(object));
      });
    });
  }

  getClient() {
    return this.client;
  }

  login() {
    this.client
      .login(Config.getBotToken())
      .then(function(token) {
        console.log(
          [`Login Successful`.green, `: Bot is now connected.`].join('')
        );
      })
      .catch(function(err) {
        console.log(
          [
            'Login failed'.red,
            '\n❌ : There were some problems connecting to Discord.\n',
            `${err}`.red
          ].join('')
        );
      });
  }
}

module.exports = new BotClient();
