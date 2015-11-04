function albertoTheAviator(F, durations, refuel) {
  var availableFlights = [];
  for(var i = 0; i < durations.length; i++) {
    if(durations[i] <= F) {
      availableFlights.push({
        delta: durations[i] - refuel[i],
        duration: durations[i]
      })
    }
  }

  availableFlights.sort(function(flightA, flightB) {
    if(flightA.delta < flightB.delta) return true;
    else if(flightA.delta == flightB.delta) return flightA.duration - flightB.duration;
    else return false;
  });

  return availableFlights.reduce(function(nbOfFlights, nextFlight) {
    F -= nextFlight.delta;
    return F >= 0 ? nbOfFlights + 1 : nbOfFlights;
  }, 0);
}

(function verify() {
  console.assert(albertoTheAviator(10, [10], [0]) === 1);
  console.assert(albertoTheAviator(10, [8, 4], [0, 2]) === 2);
  console.assert(albertoTheAviator(12, [4, 8, 2, 1], [2, 0, 0, 0]) === 3);
  console.assert(albertoTheAviator(9, [4, 6], [0, 1]) === 2);
  console.assert(albertoTheAviator(100, [101], [100]) === 0);
  console.assert(albertoTheAviator(1947, [2407, 2979, 1269, 2401, 3227, 2230, 3991, 2133, 3338, 356, 2535, 3859, 3267, 365], [2406, 793, 905, 2400, 1789, 2229, 1378, 2132, 1815, 355, 72, 3858, 3266, 364]) === 3);
  console.log('Good!');
})();
