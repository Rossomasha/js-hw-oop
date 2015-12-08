import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';
import Point from './point';

class Circle extends Point {
    constructor(center, radius) {
        super(center[0],center[1]);
        this.radius = radius;
    }

    draw(color = '#ffb600') {
        ctx.beginPath();
        ctx.arc(this.x*10 + offsetW, - this.y*10 + offsetH, this.radius*10, 0, 2 * Math.PI, false);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }

    get perimeter() {
        return 2*Math.PI*this.radius;
    }
    get area() {
        return Math.PI*this.radius*this.radius; 
    }
}

export default Circle;