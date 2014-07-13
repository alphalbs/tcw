// Initialize Phaser
window.parent.global.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', {preload: preload, create: create, update: update});
var block, trash, right, wrong, counter_wrong, counter_right, trashtype, act_tonne, active, game_length, speed, missed, mistakes, trashname, mistake_count;
var percentage = 0;

// Load assets
function preload() {
    window.parent.global.game.load.image('restmuell_tonne', 'assets/restmuell_tonne.png');
    window.parent.global.game.load.image('papiermuell_tonne', 'assets/papiermuell_tonne.png');
    window.parent.global.game.load.image('glas_tonne', 'assets/glas_tonne.png');
    window.parent.global.game.load.image('gelber_sack_tonne', 'assets/gelber_sack_tonne.png');
    window.parent.global.game.load.image('biomuell_tonne', 'assets/biomuell_tonne.png');
    window.parent.global.game.load.image('sondermuell_tonne', 'assets/sondermuell_tonne.png');

    window.parent.global.game.load.image('restmuell', 'assets/restmuell_labeled.png');
    window.parent.global.game.load.image('papiermuell', 'assets/papiermuell_labeled.png');
    window.parent.global.game.load.image('glas', 'assets/glas_labeled.png');
    window.parent.global.game.load.image('gelber_sack', 'assets/gelber_sack_labeled.png');
    window.parent.global.game.load.image('biomuell', 'assets/biomuell_labeled.png');
    window.parent.global.game.load.image('sondermuell', 'assets/sondermuell_labeled.png');

    window.parent.global.game.load.image('Apfel', 'assets/muell/bio/apfel.png');
    window.parent.global.game.load.image('Teebeutel', 'assets/muell/bio/teebeutel.png');

    window.parent.global.game.load.image('Brot', 'assets/muell/bio/brot.png');
    window.parent.global.game.load.image('Fischgraete', 'assets/muell/bio/fischgraete.png');
    window.parent.global.game.load.image('Gemuese', 'assets/muell/bio/gemuese.png');
    window.parent.global.game.load.image('Laub', 'assets/muell/bio/laub.png');
    window.parent.global.game.load.image('Bananenschale', 'assets/muell/bio/bananenschale.png');

    window.parent.global.game.load.image('Glasflasche', 'assets/muell/glas/glasflasche.png');
    window.parent.global.game.load.image('Nutelloglas', 'assets/muell/glas/nutello.png');
    window.parent.global.game.load.image('Weinflasche', 'assets/muell/glas/weinflasche.png');

    window.parent.global.game.load.image('Duschgel', 'assets/muell/gruener_punkt/duschgel.png');
    window.parent.global.game.load.image('Joghurtbecher', 'assets/muell/gruener_punkt/joghurtbecher.png');
    window.parent.global.game.load.image('Konserve', 'assets/muell/gruener_punkt/konserve.png');
    window.parent.global.game.load.image('Plastikbeutel', 'assets/muell/gruener_punkt/plastikbeutel.png');
    window.parent.global.game.load.image('Tetrapack', 'assets/muell/gruener_punkt/tetrapack.png');

    window.parent.global.game.load.image('Briefumschlaege', 'assets/muell/papier/briefumschlaege.png');
    window.parent.global.game.load.image('Karton', 'assets/muell/papier/karton.png');
    window.parent.global.game.load.image('Zeitung', 'assets/muell/papier/zeitung.png');

    window.parent.global.game.load.image('Hundehaufen', 'assets/muell/rest/hundehaufen.png');
    window.parent.global.game.load.image('Kugelschreiber', 'assets/muell/rest/kugelschreiber.png');
    window.parent.global.game.load.image('Spielzeug', 'assets/muell/rest/spielzeug.png');

    window.parent.global.game.load.image('Batterie', 'assets/muell/sonder/batterie.png');
    window.parent.global.game.load.image('Energiesparlampe', 'assets/muell/sonder/energiesparlampe.png');



    window.parent.global.game.load.image('background', 'assets/background.jpg');
    window.parent.global.game.load.image('overlay', 'assets/overlay.png');

    window.parent.global.game.load.spritesheet('button2', 'assets/arrow_next.png',71,0);
    window.parent.global.game.load.audio('knock', 'assets/knock.ogg');
}

// Create game screen and wait for input
function create() {
    knock = window.parent.global.game.add.audio('knock');
    right = 0;
    wrong = 0;
    missed = 0;
    mistakes = "";
    mistake_count = 0;
    game_length = 20; // max. bitte 24 - 20 sind wohl optimal
    speed = 50;
    window.parent.global.game.physics.startSystem(Phaser.Physics.ARCADE);
    var background = window.parent.global.game.add.sprite(0, 0, 'background');
    // window.parent.global.game.stage.backgroundColor = '#E6E6E6';

    createTonne();
    createBorders();
    createButtons();
    createCounter();

    trash_group = window.parent.global.game.add.group();
    trash_group.enableBody = true;

    rest = new Array("Hundehaufen","Kugelschreiber","Spielzeug");
    papier = new Array("Briefumschlaege","Karton","Zeitung");
    gp = new Array("Konserve","Plastikbeutel","Duschgel","Joghurtbecher","Tetrapack");
    glas = new Array("Weinflasche","Nutelloglas","Glasflasche");
    bio = new Array("Apfel","Teebeutel","Laub","Gemuese","Bananenschale","Brot","Fischgraete");
    sonder = new Array("Batterie","Energiesparlampe");

    active = true;

    createTrash();
}

function createCounter() {
    var style_wrong = { font: "65px Arial", fill: "#ff0000" };
    counter_wrong = window.parent.global.game.add.text(50, 30, ""+wrong, style_wrong);
    var style_right = { font: "65px Arial", fill: "#008500" };
    counter_right = window.parent.global.game.add.text(650, 30, ""+right, style_right);
}

function createTrash() {
    var random1 = window.parent.global.game.rnd.integerInRange(0, 5);
    var random2 = window.parent.global.game.rnd.integerInRange(200, 536);
    switch(random1) {
        case 0:
            var random3 = window.parent.global.game.rnd.integerInRange(0, rest.length - 1);
            trash = trash_group.create(random2, 0, rest[random3]);
            trashname = rest[random3];
            trashtype = "Restmuell";
            break;
        case 1:
            var random3 = window.parent.global.game.rnd.integerInRange(0, papier.length - 1);
            trash = trash_group.create(random2, 0, papier[random3]);
            trashname = papier[random3];
            trashtype = "Papier";
            break;
        case 2:
            var random3 = window.parent.global.game.rnd.integerInRange(0, gp.length - 1);
            trash = trash_group.create(random2, 0, gp[random3]);
            trashname = gp[random3];
            trashtype = "Gelber Punkt";
            break;
        case 3:
            var random3 = window.parent.global.game.rnd.integerInRange(0, glas.length - 1);
            trash = trash_group.create(random2, 0, glas[random3]);
            trashname = glas[random3];
            trashtype = "Glas";
            break;
        case 4:
            var random3 = window.parent.global.game.rnd.integerInRange(0, bio.length - 1);
            trash = trash_group.create(random2, 0, bio[random3]);
            trashname = bio[random3];
            trashtype = "Bio";
            break;
        case 5:
            var random3 = window.parent.global.game.rnd.integerInRange(0, sonder.length - 1);
            trash = trash_group.create(random2, 0, sonder[random3]);
            trashname = sonder[random3];
            trashtype = "Sondermuell";
            break;
        default:
            break;
    }
    trash.body.gravity.y = speed;
}

function update() {
    if(active) {
        checkForBorders();
        window.parent.global.game.physics.arcade.collide(block, trash, collisionHandler, null, this);
        if (trash.y > 600) {
            trash.kill();
            wrong++;
            missed++;
            counter_wrong.text = ""+wrong;
            if (right+wrong == game_length) {
                showResult();
            } else {
                createTrash();
            }
        }
    }
}

function collisionHandler() {
    if (trashtype == akt_tonne) {
        right++;
        counter_right.text = ""+right;
    } else {
        wrong++;
        counter_wrong.text = ""+wrong;
        if (mistake_count < 5) {
            mistakes = mistakes+"\n- "+trashname+" in "+akt_tonne+" Tonne,";
            mistakes = mistakes+"\n"+"  "+trashtype+" wäre richtig.";
            mistake_count++;
        } else {
            mistake_count++;
        }
    }
    trash.kill();

    if (right+wrong == game_length) {
        showResult();
    } else {
        createTrash();
    }
}

function showResult() {
    active = false;
    var shape = window.parent.global.game.add.graphics(0, 0);
    shape.lineStyle(0, 0x0000FF, 1);
    shape.beginFill(0xBBBBBB, 0.7);
    shape.drawRect(0, 0, 800, 600);
    var overlay = window.parent.global.game.add.sprite(180, 70, 'overlay');
    var style = { font: "25px Arial", fill: "#000000" };
    var text = window.parent.global.game.add.text(210, 95, "Deine Auswertung:", style);
    style = { font: "18px Arial", fill: "#000000" };
    text = window.parent.global.game.add.text(210, 135, "Du hast den Müll "+right+" mal richtig und \n"+wrong+" mal falsch entsorgt!", style);
    if (wrong > 0) {
        text = window.parent.global.game.add.text(210, 190, "Und das hast du falsch entsorgt:", style);
        if (mistake_count == 6) {
            mistakes = mistakes+"\n... und 1 weiteres";
        } else if (mistake_count > 6) {
            mistakes = mistakes+"\n... und "+(mistake_count-5)+" weitere";
        }
        text = window.parent.global.game.add.text(220, 195, mistakes, style);
    } else {
        text = window.parent.global.game.add.text(210, 190, "Glückwunsch! Du hast keine Fehler gemacht.", style);
    }
    if (missed > 1) {
        text = window.parent.global.game.add.text(210, 477, "Du hast leider "+missed+" Objekte verpasst!", style);
    }
    style = { font: "30px Arial", fill: "#FF0000" };
    text = window.parent.global.game.add.text(520, 470, Math.round((right/game_length)*100)+" %", style);
    percentage = Math.round((right/game_length)*100);

    endButton = window.parent.global.game.add.button(650, 500, 'button2', endGame, 0, 1 , 0, 1);
    endButton.onOverSound = knock;
    endButton.input = true;
}

function endGame() {
    if(window.parent.global.score.lvl2 <= percentage) window.parent.global.score.lvl2 = percentage;
    if(percentage >= 33) {
      if(window.parent.global.level_unlocked < 3) window.parent.global.level_unlocked = 3;
    }
    window.parent.$('#game-frame').attr('src','levels/menu/index.html');
}

function createTonne() {
    blocks = window.parent.global.game.add.group();
    blocks.enableBody = true;

    block = blocks.create(window.parent.global.game.world.centerX, 550, 'restmuell_tonne');
    akt_tonne = "Restmuell";
    block.body.immovable = true;
}

function createBorders() {
    var graphics = window.parent.global.game.add.graphics(0, 0);
    graphics.lineStyle(2, 0x000000, 1);
    graphics.moveTo(200, 0);
    graphics.lineTo(200, 600);
    graphics.moveTo(600, 0);
    graphics.lineTo(600, 600);
}

function createButtons() {
    var restmuell = window.parent.global.game.add.sprite(10, 300, 'restmuell');
    var papiermuell = window.parent.global.game.add.sprite(10, 400, 'papiermuell');
    var gelber_sack = window.parent.global.game.add.sprite(10, 500, 'gelber_sack');

    var glas = window.parent.global.game.add.sprite(610, 300, 'glas');
    var biomuell = window.parent.global.game.add.sprite(610, 400, 'biomuell');
    var sondermuell = window.parent.global.game.add.sprite(610, 500, 'sondermuell');

    restmuell.inputEnabled = true;
    restmuell.events.onInputDown.add(function() { block.loadTexture('restmuell_tonne', 0); akt_tonne = "Restmuell"; }, this);
    papiermuell.inputEnabled = true;
    papiermuell.events.onInputDown.add(function() { block.loadTexture('papiermuell_tonne', 0); akt_tonne = "Papier"; }, this);
    gelber_sack.inputEnabled = true;
    gelber_sack.events.onInputDown.add(function() { block.loadTexture('gelber_sack_tonne', 0); akt_tonne = "Gelber Punkt"; }, this);
    glas.inputEnabled = true;
    glas.events.onInputDown.add(function() { block.loadTexture('glas_tonne', 0); akt_tonne = "Glas"; }, this);
    biomuell.inputEnabled = true;
    biomuell.events.onInputDown.add(function() { block.loadTexture('biomuell_tonne', 0); akt_tonne = "Bio"; }, this);
    sondermuell.inputEnabled = true;
    sondermuell.events.onInputDown.add(function() { block.loadTexture('sondermuell_tonne', 0); akt_tonne = "Sondermuell"; }, this);
}

function checkForBorders() {
    if (window.parent.global.game.input.x > 220 && window.parent.global.game.input.x < 580) {
        block.x = window.parent.global.game.input.x-20;
    } else if (window.parent.global.game.input.x <= 200) {
        block.x = 200;
    } else if (window.parent.global.game.input.x >= 560) {
        block.x = 560;
    }
}
