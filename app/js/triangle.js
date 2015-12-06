import Point from './point';
import Polygon from './polygon';

class Triangle extends Polygon {
    get area() {
        let p = this.perimeter/2,
            a = Point.distance(this.dots[0],this.dots[1]),
            b = Point.distance(this.dots[1],this.dots[2]),
            c = Point.distance(this.dots[2],this.dots[0]);
        return Math.sqrt( p*(p-a)*(p-b)*(p-c) );
    }
}

export default Triangle;