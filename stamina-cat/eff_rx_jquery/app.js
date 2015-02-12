var CAT_STAMINA 	= 2000,
	CAT_SPEED 		= 0.5, // (px/ms)
	PISS_INTERVAL 	= 1000,
	PISS_BONUS 		= 2000,
	pissDrops 		= [];
	
$(window).load(function(){
	var canvas 	= $('#canvas'),
		cat 	= $('.cat');

	function paintADrop (point) {
		var drop = $('<div/>').attr('class','drop').offset(point)
		canvas.append(drop);
		return drop;
	}

	function estimateTime (a, b){
		var distance = Math.sqrt(Math.pow((Math.abs(a.top) - Math.abs(b.top)),2) + Math.pow((Math.abs(a.left) - Math.abs(b.left)),2))
		return Math.floor(distance / CAT_SPEED);
	}

	function moveToPoint(nextDrop) {
		var time = estimateTime(nextDrop.position(), cat.position());
		
		if(time <= CAT_STAMINA){
			cat.animate(nextDrop.position(), time, 'linear', function(){
				nextDrop.remove();
				cat.trigger('catMoveDone');
				CAT_STAMINA -= time;
			});
		} else alert('CAT IS IMPOTANT');
	}

	function moveToNextPoint(){
		if (pissDrops.length) moveToPoint(pissDrops.shift());
	};
	
	var catFinishedMove = Rx.Observable.fromEvent(cat, 'catMoveDone');	
	var mousemoves 		= Rx.Observable.fromEvent(canvas, 'mousemove');

	catFinishedMove.delay(500).subscribe( function() {
		CAT_STAMINA += PISS_BONUS;
		moveToNextPoint();
	});

	mousemoves.throttleFirst(PISS_INTERVAL).subscribe( function(e) {
		var point = {left: e.offsetX, top: e.offsetY};
		var drop = paintADrop(point);
		pissDrops.push(drop);
	});	
		
	mousemoves.first().subscribe(function() { moveToNextPoint() });
});