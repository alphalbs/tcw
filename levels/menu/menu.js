$(document).ready(function(){

// tooltips
	$('.menuButton').tooltip({
		show: {
			effect: "drop",
			duration: 235
		},
		hide: {
			effect: "drop"
		},
		position: {
			at: "right top"
		}
	});

// backgroud and tooltip updates

	// holy guacamole is this ugly .. model, view, controller would be so nice
	if(window.parent.global.level_unlocked == 1) {
		$('body').attr('style','background:url(../../images/level1.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal("lvl1") + "<br>Punkte: " + getPoints("lvl1") + " / 100");
	}
	else if(window.parent.global.level_unlocked == 2) {
		$('body').attr('style','background:url(../../images/level2.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal("lvl1") + "<br>Punkte: " + getPoints("lvl1") + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal("lvl2") + "<br>Punkte: " + getPoints("lvl2") + " / 100");
	}
	else if(window.parent.global.level_unlocked == 3) {
		$('body').attr('style','background:url(../../images/level3.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal("lvl1") + "<br>Punkte: " + getPoints("lvl1") + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal("lvl2") + "<br>Punkte: " + getPoints("lvl2") + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal("lvl3") + "<br>Punkte: " + getPoints("lvl3") + " / 100");
	}
	else if(window.parent.global.level_unlocked == 4) {
		$('body').attr('style','background:url(../../images/level4.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal("lvl1") + "<br>Punkte: " + getPoints("lvl1") + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal("lvl2") + "<br>Punkte: " + getPoints("lvl2") + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal("lvl3") + "<br>Punkte: " + getPoints("lvl3") + " / 100");
		$('#verarbeitung').tooltip("option", "content", "Medallie: " + getMedal("lvl4") + "<br>Punkte: " + getPoints("lvl4") + " / 100");
	}
	else if(window.parent.global.level_unlocked == 5) {
		$('body').attr('style','background:url(../../images/level5.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal("lvl1") + "<br>Punkte: " + getPoints("lvl1") + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal("lvl2") + "<br>Punkte: " + getPoints("lvl2") + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal("lvl3") + "<br>Punkte: " + getPoints("lvl3") + " / 100");
		$('#verarbeitung').tooltip("option", "content", "Medallie: " + getMedal("lvl4") + "<br>Punkte: " + getPoints("lvl4") + " / 100");
		$('#recycling').tooltip("option", "content", "Medallie: " + getMedal("lvl5") + "<br>Punkte: " + getPoints("lvl5") + " / 100");
	}

// game
	window.parent.global.game = null;

// score
	window.parent.global.score.lvl3_temp = 0;
	var score = window.parent.global.score;
	var total_score = score.lvl1 + score.lvl2 + score.lvl3 + score.lvl4 + score.lvl5;

// helper functions

	function getMedal (level) {
		var score;
		if(level == "lvl1") score = window.parent.global.score.lvl1;
		else if(level == "lvl2") score = window.parent.global.score.lvl2;
		else if(level == "lvl3") score = window.parent.global.score.lvl3;
		else if(level == "lvl4") score = window.parent.global.score.lvl4;
		else if(level == "lvl5") score = window.parent.global.score.lvl5;
		if(score >= 100) return "Gold";
		if(score >= 66) return "Silber";
		if(score >= 33) return "Bronze";
		return "keine";
	}

	function getPoints (level) {
		var score;
		if(level == "lvl1") score = window.parent.global.score.lvl1;
		else if(level == "lvl2") score = window.parent.global.score.lvl2;
		else if(level == "lvl3") score = window.parent.global.score.lvl3;
		else if(level == "lvl4") score = window.parent.global.score.lvl4;
		else if(level == "lvl5") score = window.parent.global.score.lvl5;
		return score;
	}

// progress bar
	window.parent.$('#progressbar').html("total points = " + total_score + " of " + window.parent.global.score.max);

// dialogs
	$("#dlc_alert").dialog({
		autoOpen: false,
		resizable: false,
		buttons: {
       		Ok: function() {
       			$(this).dialog("close");
       		}
       	}
	});

	$("#lvl_unlock_alert").dialog({
		autoOpen: false,
		resizable: false,
		width: 500,
		buttons: {
       		Ok: function() {
       			$(this).dialog("close");
       		}
       	}
	});

// buttons
	$('#einkaufen').click(function(){
		if(window.parent.global.level_unlocked >= 1) window.parent.$('#game-frame').attr('src','levels/level_1/index.html');
	})

	$('#entsorgung').click(function(){
		if(window.parent.global.level_unlocked >= 2) window.parent.$('#game-frame').attr('src','levels/level_2/index.html');
		else $("#lvl_unlock_alert").dialog("open");
	})

	$('#abholung').click(function(){
		if(window.parent.global.level_unlocked >= 3) window.parent.$('#game-frame').attr('src', 'levels/level_3/lvl 1.html');
		else $("#lvl_unlock_alert").dialog("open");
	})

	$('#verarbeitung').click(function(){
		if(window.parent.global.level_unlocked >= 4) window.parent.$('#game-frame').attr('src', 'levels/level_4/index.html');
		else $("#lvl_unlock_alert").dialog("open");
	})

	$('#recycling').click(function(){
		if(window.parent.global.level_unlocked >= 5) $("#dlc_alert").dialog("open");
		else $("#lvl_unlock_alert").dialog("open");
	})


})
