import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';
import Point from './point';

class Polygon extends Point {
    constructor(...args) {
        super(args[0][0],args[0][1]);
        this.dots =  [];
        args.forEach( (el) => { this.dots.push(new Point(el[0],el[1]));});
    }

    draw(color = '#14BD1A') {
        ctx.beginPath();

        this.dots.forEach( (el, i) => {
            if( i === 0 ) {
                ctx.moveTo(el.x*10 + offsetW, -el.y*10 + offsetH);
            } else {
                ctx.lineTo(el.x*10 + offsetW, -el.y*10 + offsetH);
            }
        });
        ctx.lineTo(this.dots[0].x*10 + offsetW, -this.dots[0].y*10 + offsetH);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }

    get perimeter() {
        let p = 0;

        this.dots.reduce( (prev, current) => {
            p += Point.distance(prev, current);
            return current;
        }, this.dots[this.dots.length-1]);

        return p;
    }
}

export default Polygon;