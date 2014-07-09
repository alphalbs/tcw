$(document).ready(function(){

// backgroud

	// holy guacamole is this ugly .. model, view, controller would be so nice
	if(window.parent.global.level_unlocked == 1) $('body').attr('style','background:url(../../images/level1.jpg) no-repeat');
	else if(window.parent.global.level_unlocked == 2) $('body').attr('style','background:url(../../images/level2.jpg) no-repeat');
	else if(window.parent.global.level_unlocked == 3) $('body').attr('style','background:url(../../images/level3.jpg) no-repeat');
	else if(window.parent.global.level_unlocked == 4) $('body').attr('style','background:url(../../images/level4.jpg) no-repeat');
	else if(window.parent.global.level_unlocked == 5) $('body').attr('style','background:url(../../images/level5.jpg) no-repeat');

	window.parent.global.game = null;
	window.parent.global.score.lvl3_temp = 0;

// buttons
	$('#einkaufen').click(function(){
		if(window.parent.global.level_unlocked >= 1) window.parent.$('#game-frame').attr('src','levels/level_1/index.html');
	})

	$('#entsorgung').click(function(){
		if(window.parent.global.level_unlocked >= 2) window.parent.$('#game-frame').attr('src','levels/level_2/index.html');
		else alert("You need to unlock this level first.")
	})

	$('#abholung').click(function(){
		if(window.parent.global.level_unlocked >= 3) window.parent.$('#game-frame').attr('src', 'levels/level_3/lvl 1.html');
		else alert("You need to unlock this level first.")
	})

	$('#verarbeitung').click(function(){
		if(window.parent.global.level_unlocked >= 4) window.parent.$('#game-frame').attr('src', 'levels/level_4/index.html');
		else alert("You need to unlock this level first.")
	})

	$('#recycling').click(function(){
		if(window.parent.global.level_unlocked >= 5) alert("not ready yet");
		else alert("You need to unlock this level first.")
	})

	var score = window.parent.global.score;

	var total_score = score.lvl1 + score.lvl2 + score.lvl3 + score.lvl4 + score.lvl5;

	window.parent.$('#progressbar').html("total points = " + total_score + " of " + window.parent.global.score.max);
})
