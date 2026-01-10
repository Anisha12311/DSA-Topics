// Creating objects
// Factories and constructors
// Primitives and reference  Types
//working with properties
// Private properties
// Getters / setters

//Factories functions
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
console.log(circle.radius);
circle.draw();

function createFun(raduis) {
  (this.raduis = raduis),
    (this.draw = function () {
      console.log("draw");
    });
}

const c = createFun.call({}, 1);

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Please stop first");
    }

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("StopWatch is not running");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();

sw.start();
sw.stop();
console.log(sw.duration);
