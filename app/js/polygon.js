import Point from './point';

class Polygon extends Point {
    constructor(...args) {
        super(args[0][0],args[0][1]);
        this.dots =  [];
        args.forEach( (el) => { this.dots.push(new Point(el[0],el[1]));});
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