# StopWatch
# Lets implement a stop watch
# I will mock the expected behavior below

#Start, Stop, reset, elapsedTime

#########################################
# stop_watch = new instance of stopwatch
# elapsed time should be 0
# call start on stopwatch
# 5 seconds later
# call stop on stopwatch
# elapsed time should be 5
# call start on stopwatch
# 3 seconds later
# call stop on stopwatch
# elapsed time should be 8
# call reset on stopwatch
# elapsed time should be 0

 */

 var _ = require('underscore');

class Stopwatch {

  constructor() {
    this.start = 0;
    this.stop = 0;
    this.lap = 0;
  }

  reset() {
    this.start = 0;
    this.stop = 0;
    this.lap = 0;
  }

  getElapsedTime() {
    return this.stop - this.start;
  }

  getTotalElapsedTime() {
    return this.lap;
  }

  startTime() {
    var time = new Date().getTime(); // or this
    this.start = time;
    return this.start;
  }

  stopTime() {
    var time = new Date().getTime();
    this.stop = time;
    var elapsed = this.getElapsedTime();
    console.log("elapsed = " + elapsed);
    this.lap += elapsed;
    return this.stop;
  }
}

var sw = new Stopwatch();
sw.startTime();
setTimeout(function timer() {
  sw.stopTime();
  console.log(sw.getElapsedTime());
  sw.startTime();  // i think this messes it up
  setTimeout(function timer2() {
    sw.stopTime();
    console.log(sw.getTotalElapsedTime());
    sw.reset();
    console.log(sw.getTotalElapsedTime());
  }, 3000);
}, 5000);
