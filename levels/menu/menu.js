$(document).ready(function(){
	var score = window.parent.global.score;

// game
	window.parent.global.game = null;
	score.lvl3_temp = 0;

// score
	var total_score = score.lvl1 + score.lvl2 + score.lvl3 + score.lvl4 + score.lvl5;
	var total_percent = Math.round(total_score/score.max*100);

// progress bar

	window.parent.$('#progressbar').progressbar({
		value: total_score,
		max: 400
	});

	window.parent.$('.progress-label').text("Fortschritt: " + total_percent + "%");

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

	window.parent.$("#progressbar").tooltip({
		position: {
			at: "center-20 top-64"
		}
	});

// backgroud and tooltip updates

	// holy guacamole is this ugly .. model, view, controller would be so nice
	// http://gph.is/XGDixN
	if(window.parent.global.level_unlocked == 1) {
		$('body').attr('style','background:url(../../images/level1.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal(score.lvl1) + "<br>Punkte: " + score.lvl1 + " / 100");
	}
	else if(window.parent.global.level_unlocked == 2) {
		$('body').attr('style','background:url(../../images/level2.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal(score.lvl1) + "<br>Punkte: " + score.lvl1 + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl2) + "<br>Punkte: " + score.lvl2 + " / 100");
	}
	else if(window.parent.global.level_unlocked == 3) {
		$('body').attr('style','background:url(../../images/level3.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal(score.lvl1) + "<br>Punkte: " + score.lvl1 + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl2) + "<br>Punkte: " + score.lvl2 + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl3) + "<br>Punkte: " + score.lvl3 + " / 100");
	}
	else if(window.parent.global.level_unlocked == 4) {
		$('body').attr('style','background:url(../../images/level4.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal(score.lvl1) + "<br>Punkte: " + score.lvl1 + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl2) + "<br>Punkte: " + score.lvl2 + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl3) + "<br>Punkte: " + score.lvl3 + " / 100");
		$('#verarbeitung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl4) + "<br>Punkte: " + score.lvl4 + " / 100");
	}
	else if(window.parent.global.level_unlocked == 5) {
		$('body').attr('style','background:url(../../images/level5.jpg) no-repeat');
		$('#einkaufen').tooltip("option", "content", "Medallie: " + getMedal(score.lvl1) + "<br>Punkte: " + score.lvl1 + " / 100");
		$('#entsorgung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl2) + "<br>Punkte: " + score.lvl2 + " / 100");
		$('#abholung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl3) + "<br>Punkte: " + score.lvl3 + " / 100");
		$('#verarbeitung').tooltip("option", "content", "Medallie: " + getMedal(score.lvl4) + "<br>Punkte: " + score.lvl4 + " / 100");
		$('#recycling').tooltip("option", "content", "Medallie: " + getMedal(score.lvl5) + "<br>Punkte: " + score.lvl5 + " / 100");
	}


// helper functions

	function getMedal (score) {
		if(score >= 100) return "Gold";
		if(score >= 66) return "Silber";
		if(score >= 33) return "Bronze";
		return "keine";
	}

// dialogs
	$("#dlc_alert").dialog({
		autoOpen: false,
		resizable: false,
		buttons: {
       		Ok: function() {
       			$(this).dialog("close");
       		}
       	},
       	width: 500
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
	});

	$('#entsorgung').click(function(){
		if(window.parent.global.level_unlocked >= 2) window.parent.$('#game-frame').attr('src','levels/level_2/index.html');
		else $("#lvl_unlock_alert").dialog("open");
	});

	$('#abholung').click(function(){
		if(window.parent.global.level_unlocked >= 3) window.parent.$('#game-frame').attr('src', 'levels/level_3/lvl 1.html');
		else $("#lvl_unlock_alert").dialog("open");
	});

	$('#verarbeitung').click(function(){
		if(window.parent.global.level_unlocked >= 4) window.parent.$('#game-frame').attr('src', 'levels/level_4/index.html');
		else $("#lvl_unlock_alert").dialog("open");
	});

	$('#recycling').click(function(){
		if(window.parent.global.level_unlocked >= 5) $("#dlc_alert").dialog("open");
		else $("#lvl_unlock_alert").dialog("open");
	});


});
