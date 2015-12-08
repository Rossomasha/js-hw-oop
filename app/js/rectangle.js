import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';
import Polygon from './polygon';

class Rectangle extends Polygon {
    constructor(pos, width, height) {
        var x = pos[0],
            y = pos[1];
        super(pos, [x+width,y], [x+width,y-height], [x,y-height]);

        this.width = width;
        this.height = height;
    }

    draw(color = '#2043CA') {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.strokeRect(this.x*10 + offsetW, - this.y*10 + offsetH, this.width*10, this.height*10);
        ctx.closePath();
    }

    get perimeter() {
        return (this.width + this.height)*2;
    }
    get area() {
        return this.width * this.height;
    }
}

export default Rectangle;