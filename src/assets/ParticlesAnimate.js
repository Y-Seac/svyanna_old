import point from "./images/point.svg";
import rhombus from "./images/rhombus.svg";
import pentahedron from "./images/pentahedron.svg";
import circle from "./images/circle.svg";
import x from "./images/cross.svg";
import useWindowSize from "../utils/use-window-size";
import { Particle } from "./Particle";

function ParticlesAnimate() {
  //const partcle = particle();
  const size = useWindowSize();
  const data = [point, rhombus, pentahedron, circle, x];
  let isPaused = false;
  let particles = [];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setInterval(function() {
    if (!isPaused) {
      particles.push(
        new Particle(
          data[randomInt(0, data.length - 1)],
          {
            x: Math.random() * size.width,
            y: size.height
          },
          1 + Math.random() * 3,
          size
        )
      );
    }
  }, 200);

  function update() {
    console.log(particles);
    particles = particles.filter(function(p) {
      return p.move();
    });
    requestAnimationFrame(update.bind(this));
  }

  update();
}

export default ParticlesAnimate;
