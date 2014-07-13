var global = {};
global.score = {};

$(document).ready(function(){
// tooltips
    $('.header-control-button').tooltip();

// game
    global.game = null;

    var audio = new Audio();
    audio.onerror = function() {
        audio.src = '../sounds/BOCrew_-_AROUND_THE_CORNER.mp3'
    }
    audio.src = '/tcw/sounds/BOCrew_-_AROUND_THE_CORNER.mp3';
    audio.controls = false;
    audio.autoplay = true;
    audio.loop = true;
    document.body.appendChild(audio);

    var context = new AudioContext();
    var gainNode = context.createGainNode();
    gainNode.gain.value = .23; // or .5 ?
    gainNode.connect(context.destination);

    var sourceNode = context.createMediaElementSource(audio);
    sourceNode.connect(gainNode);
    sourceNode.mediaElement.play();


// sound control
    global.sound = true;

    $("#soundOff").hide();

    $(".SoundButton").click(function(){
        if(global.sound) {
            // turn sound off
            global.sound = false;
            gainNode.gain.value = 0;
            $("#soundOn").hide();
            $("#soundOff").show();
        }
        else {
            // turn sound on
            global.sound = true;
            gainNode.gain.value = .23;
            $("#soundOff").hide();
            $("#soundOn").show();
        }
        if(global.game !== null) {
            global.game.sound._muteVolume = global.sound ? 1 : 0;
            global.game.sound.setMute(!global.sound);
        }
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
