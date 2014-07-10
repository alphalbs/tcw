var global = {};
global.score = {};

$(document).ready(function(){

    global.game = null;

// sound

    global.sound = true;

    $("#soundOff").hide();

    $(".SoundButton").click(function(){
        if(global.sound) {
            // turn sound off
            global.sound = false;
            $("#soundOn").hide();
            $("#soundOff").show();
        }
        else {
            // turn sound on
            global.sound = true;
            $("#soundOff").hide();
            $("#soundOn").show();
        }
        if(global.game !== null) global.game.sound.mute = !global.sound;
    });

// levels

    global.level_unlocked = 1;

// menu

    $("#abort").click(function(){
        if($('#game-frame').attr('src') !== 'levels/menu/index.html') $('#game-frame').attr('src','levels/menu/index.html');
    })

// scores

    global.score.lvl1 = 0;
    global.score.lvl2 = 0;
    global.score.lvl3_temp = 0;
    global.score.lvl3 = 0;
    global.score.lvl4 = 0;
    global.score.lvl5 = 0;
    global.score.max = 400; // 4 games available

});
