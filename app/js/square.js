import Rectangle from './rectangle';

class Square extends Rectangle {
    constructor(pos, width) {
        super(pos, width, width);
    }
}

export default Square;