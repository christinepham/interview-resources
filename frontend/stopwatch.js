/**
 * A simple stopwatch that can be used to time code
 */
//only care about time elapsed
//need difference between start and stop

class Stopwatch {
  constructor(start, stop, lap) {
    this.start = start;
    this.stop = stop;
    this.lap = lap;
  }
  
  //check if lap is true to see if stopwatch is already running
  startTime() {
    // track the real start timestamp
    var timestamp = new Date().getTime();
    if (this.lap == true) {
      return;
    } 
    this.lap = true;
    this.start = timestamp;
    return this.start;
  }

  stopTime() {
    // track the real stop timestamp
    var timestamp = new Date().getTime();
    if (this.lap == false) {
      return;
    }
    
    this.lap = false;
    this.stop = timestamp;
  }

  getElapsedTime() {
    return this.stop - this.start;
  }

  reset() {
    this.start = 0;
    this.stop = 0;
    this.lap = false;
  }

}

// Test out the stopwatch class
let sw = new Stopwatch(10, 0, false);
console.log(sw.getElapsedTime());