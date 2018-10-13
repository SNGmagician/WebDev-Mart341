/* For Monday; Create a Particle Emitter class and array */


var particle;
var ps = [];
var loc;
var vel;


function setup() {
  createCanvas(windowWidth, windowHeight);

  loc = createVector(windowWidth / 2, windowHeight / 2);
  vel = createVector(0, 0);

}


function draw() {
  background(0);

  // var acc = createVector( 0.001, -0.01 );
  // vel.add(acc);
  // loc.add(vel);

  var pvel = createVector(random(-5, 5), random(-5, 5));
  pvel.rotate(random(TWO_PI));
  // pvel.add(vel);

  ps.push(new Particle(loc, pvel));

  for (var i = 0; i < ps.length; i++) {
    var dead;
    dead = ps[i].frame();
    if (dead) {
      ps.splice(i, 1);
    }
  }
  text(ps.length, 10, 10);

}