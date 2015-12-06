import Polygon from './polygon';

class Rectangle extends Polygon {
    constructor(pos, width, height) {
        var x = pos[0],
            y = pos[1];
        super(pos, [x+width,y], [x+width,y-height], [x,y-height]);

        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return (this.width + this.height)*2;
    }
    get area() {
        return this.width * this.height;
    }
}

export default Rectangle;