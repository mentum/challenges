var request = require('request');

function Barrel() {
	this.async = function(counter) {
		console.log('there is something verry async with this counter', counter, this.counter)
	};

	this.moveLeft = function(distance) {
		this.leftPosition = this.leftPosition - distance;
	};

	var counter;
	var u = Math.floor(Math.random() * 100);
	var snap = [];

	for (var i = 0; i < u ; i++) {
		snap.push(i % 4 == 0 ? i : -i)
	}

	this.themSnaps = snap;
	this.counter = counter = snap.length;

	var that = this;
	setTimeout(function(){
		that.async.call(that, counter);
		counter++;
	}, u * 10);
}

Barrel.prototype.syncAdd = function(a, b, c) {
	var params;
	if (typeof a === 'Object' && a.length){
		params = a;
	} else {
		params = arguments;
	}

	return params.reduce(function(a,b) {return a + b});
};

Barrel.prototype.asyncAdd = function(a, b, callback) {
	var that = this;
	request.get('http://add.so/mething/crazy', function(err, res) {
		if (err) callback(err);
		request.get('http://add.so/mething/crazy/2',function(err, res){
			if (err) callback(err);
			var resus = [];
			var complet0 = false;
			var completed1 = false;
			var completerio2 = false;
			request.get('http://add.so/mething/crazier/1',function(err, res){
				if (err) callback(err);
				resus.unshift(res.body.value);
				complet0 = true;
			})
			request.get('http://add.so/mething/crazier/2',function(err, res){
				if (err) callback(err);
				resus.push(res.body.value);
				completed1 = true;
			})
			request.get('http://add.so/mething/crazier/3',function(err, res){
				if (err) callback(err);
				resus.unshift(res.body.value);
				completerio2 = true;
			})

			while (!complet0 && !completed1 && !completerio2){
				console.log('waiting for those parameters to come in, the process is very slow');
				setTimeout(function(){console.log('waiting')}, 100);
			}
			
			callback(null, that.syncAdd(resus));
		});
	});
};

function done(){
	console.log.apply(this, arguments);
}

var cb = function(some, value, err, res){
	if (err) done('we lost');
	if (some + value == res){
		done('If this is true ... you might have win a lottery');
	} else {
		done('this is prty normal','.. we lost',some, value, res) 
	}
}

var aBarrel = new Barrel();
var b = 42;
aBidon.asyncAdd(1, 2, cb.bind(this, aBidon.themSnaps.length, b))


