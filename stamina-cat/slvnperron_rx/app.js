var $cat = $('#cat'), cat = $cat[0],
	$content = $('#content'),
	$mouse = $('#mouse');

var walkGracePeriod = new Date().getTime(),
	mousePissInterval = 1000,
	catIngestionTime = 500,
	catStamina = 2000,
	moving = false,
	catSpeed = 5,
	drops = [];

var mousePosition = Rx.Observable.fromEvent($content, 'mousemove')
	.map(function(e) { return {left: e.pageX, top: e.pageY} });

var pissDrops = mousePosition.sample(mousePissInterval);
	
var steps = Rx.Observable.interval(catSpeed).timestamp()
	.where(function(x) { return x.timestamp >= walkGracePeriod })
	.where(function(x) { return catStamina > 0 && !!drops.length});

var dropPiss = function(position) {
	var div = $('<div/>')
		.attr('class', 'piss')
		.css({top: position.top, left: position.left});
	$content.append(div);
	drops.push(position);
};

var walk = function() {
	catStamina -= catSpeed;
	var target = drops[0];
	if (target.left > cat.offsetLeft) 		$cat.offset({ left: cat.offsetLeft + 1 });
	if (target.left < cat.offsetLeft) 		$cat.offset({ left: cat.offsetLeft - 1 });
	if (target.top > cat.offsetTop) 		$cat.offset({ top: cat.offsetTop + 1 });
	if (target.top < cat.offsetTop) 		$cat.offset({ top: cat.offsetTop - 1 });
	if (target.left == cat.offsetLeft && target.top == cat.offsetTop) ingest();
};

var ingest = function() {
	$cat.animate({opacity: 0.5}, 250).animate({opacity: 1.0}, 250);
	walkGracePeriod = new Date().getTime() + catIngestionTime;
	$(".piss").first().remove();
	catStamina += 1000;
	drops.shift();
};

steps.subscribe(walk);
pissDrops.subscribe(dropPiss);
mousePosition.subscribe(function(x) { $mouse.offset(x) });