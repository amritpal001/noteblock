
const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class RCommand extends Command {
  constructor() {
    super('restart', {
      aliases: ['ping'],
      description: {
        content: 'Reload the bot',
      },
      category: 'Util',
      cooldown: 30,
    });
  }

  async exec(msg) {
    try {
            console.clear();
               bot.destroy()
             message.channel.send("Reloaded");
         return;
        }
   }
};
