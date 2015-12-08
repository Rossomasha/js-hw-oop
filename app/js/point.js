import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(color = '#ff0000') {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(this.x*10 + offsetW, - this.y*10 + offsetH, 2, 2);
        ctx.closePath();
    }

    static distance(a,b) {
        return Math.sqrt( (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y) );
    }
}

export default Point;