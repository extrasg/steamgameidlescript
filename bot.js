var SteamUser = require('steam-user');
var SteamTotp = require('steam-totp');
var user = new SteamUser();
 
user.logOn({
    accountName: "kicsimambo2",
    password: "Idlemepls123",
    twoFactorCode: SteamTotp.getAuthCode("")
});
 
user.on('webSession', function() {
    console.log('Logged in!');
    user.setPersona(SteamUser.Steam.EPersonaState.Online)
    user.gamesPlayed([730, 432150, 489520, 545590, 558810, 415030, 398160, 485500, 12120, 271590, 218620, 381210, 252950, 433850, 346110, 359550, 240, 10]);

});
