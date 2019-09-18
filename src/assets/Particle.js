//Didnt even kno could have areg deg class lol
import ParticlesAnimate from "./ParticlesAnimate";
import useWindowSize from "../utils/use-window-size";

export class Particle {
  constructor(svg, coordinates, friction, size) {
    this.svg = svg;
    this.steps = size.height / 2;
    this.item = null;
    this.friction = friction;
    this.coordinates = coordinates;
    this.position = this.coordinates.y;
    this.dimensions = this.render();
    this.rotation = Math.random() > 0.5 ? "-" : "+";
    this.scale = 0.5 + Math.random();
    this.siner = 200 * Math.random();
  }

  destroy() {
    this.item.remove();
  }

  move() {
    this.position = this.position - this.friction;
    let top = this.position;
    let left =
      this.coordinates.x +
      Math.sin((this.position * Math.PI) / this.steps) * this.siner;
    this.item.css({
      transform:
        "translateX(" +
        left +
        "px) translateY(" +
        top +
        "px) scale(" +
        this.scale +
        ") rotate(" +
        this.rotation +
        (this.position + this.dimensions.height) +
        "deg)"
    });

    if (this.position < -this.dimensions.height) {
      this.destroy();
      return false;
    } else {
      return true;
    }
  }

  render() {
    this.item = (this.svg,
    {
      css: {
        transform:{
          "translateX(" +
          this.coordinates.x +
          "px) translateY(" +
          this.coordinates.y +
          "px)"
        }
        }
      }
    });
    console.log(this.item);
    return {
      width: this.item.width(),
      height: this.item.height()
    };
  }
}
