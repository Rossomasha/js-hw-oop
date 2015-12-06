import Point from './point';

class Circle extends Point {
    constructor(center, radius) {
        super(center[0],center[1]);
        this.radius = radius;
    }
    get perimeter() {
        return 2*Math.PI*this.radius;
    }
    get area() {
        return Math.PI*this.radius*this.radius; 
    }
}

export default Circle;