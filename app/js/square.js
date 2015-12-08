import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';
import Rectangle from './rectangle';

class Square extends Rectangle {
    constructor(pos, width) {
        super(pos, width, width);
    }

    draw(color = '#a600d6') {
        super.draw(color);
    }
}

export default Square;