var global = {};

$(document).ready(function(){
    global.sound = true;
    global.current_level = 1;
    global.current_view = 'menu';

    $("#soundOff").hide();

    $(".SoundButton").click(function(){
        if(!global.game.sound.mute) {
            // turn sound off
            global.game.sound.mute = true;
            $("#soundOn").hide();
            $("#soundOff").show();
        }
        else {
            // turn sound on
            global.game.sound.mute = false;
            $("#soundOff").hide();
            $("#soundOn").show();
        }
    });
});
