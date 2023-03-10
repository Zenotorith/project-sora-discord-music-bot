const Discord = require('discord.js');

const paginationStartButton = new Discord.ButtonBuilder()
    .setCustomId('start')
    .setLabel('First')
    .setStyle(Discord.ButtonStyle.Secondary);

const paginationBackButton = new Discord.ButtonBuilder()
    .setCustomId('back')
    .setLabel('Previous')
    .setStyle(Discord.ButtonStyle.Secondary);

const paginationForwardButton = new Discord.ButtonBuilder()
    .setCustomId('forward')
    .setLabel('Next')
    .setStyle(Discord.ButtonStyle.Secondary);

const paginationEndButton = new Discord.ButtonBuilder()
    .setCustomId('end')
    .setLabel('Last')
    .setStyle(Discord.ButtonStyle.Secondary);

module.exports.paginationStartButton = paginationStartButton;
module.exports.paginationBackButton = paginationBackButton;
module.exports.paginationForwardButton = paginationForwardButton;
module.exports.paginationEndButton = paginationEndButton;

const loopSongToggle = new Discord.ButtonBuilder()
    .setCustomId('loop-song')
    .setEmoji('đ')
    .setStyle(Discord.ButtonStyle.Secondary);

const previousSong = new Discord.ButtonBuilder()
    .setCustomId('previous')
    .setEmoji('âŽī¸')
    .setStyle(Discord.ButtonStyle.Secondary);

const paunseUnpause = new Discord.ButtonBuilder()
    .setCustomId('pauseUnpause')
    .setEmoji('â¯ī¸')
    .setStyle(Discord.ButtonStyle.Secondary);

const nextSong = new Discord.ButtonBuilder()
    .setCustomId('next')
    .setEmoji('â­ī¸')
    .setStyle(Discord.ButtonStyle.Secondary);

const loopQueueToggle = new Discord.ButtonBuilder()
    .setCustomId('loop-queue')
    .setEmoji('đ')
    .setStyle(Discord.ButtonStyle.Secondary);

const volumeDown = new Discord.ButtonBuilder()
    .setCustomId('vol-down')
    .setEmoji('đ')
    .setStyle(Discord.ButtonStyle.Secondary);

const backward = new Discord.ButtonBuilder()
    .setCustomId('backward')
    .setEmoji('âĒ')
    .setStyle(Discord.ButtonStyle.Secondary);

const stop = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setEmoji('âšī¸')
    .setStyle(Discord.ButtonStyle.Secondary);

const forward = new Discord.ButtonBuilder()
    .setCustomId('forward')
    .setEmoji('âŠ')
    .setStyle(Discord.ButtonStyle.Secondary);

const volumeUp = new Discord.ButtonBuilder()
    .setCustomId('vol-up')
    .setEmoji('đ')
    .setStyle(Discord.ButtonStyle.Secondary);


const row2 = new Discord.ActionRowBuilder()
    .addComponents([
        loopSongToggle,
        previousSong,
        paunseUnpause,
        nextSong,
        loopQueueToggle
    ]);
const row3 = new Discord.ActionRowBuilder()
    .addComponents([
        volumeDown,
        backward,
        stop,
        forward,
        volumeUp
    ]);
    
module.exports.row2 = row2;
module.exports.row3 = row3;