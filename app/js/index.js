//import 'babel-polyfill';

import {ctx, cw, ch, offsetW, offsetH} from './canvas-init';

import Point from './point';
import Polygon from './polygon';
import Rectangle from './rectangle';
import Square from './square';
import Triangle from './triangle';
import Circle from './circle';



//usage examples

var p1 = new Point(1,1);
console.log('point',p1);
p1.draw();

var polygon = new Polygon([1,2],[1,1],[2,2],[3,2]);
console.log('Polygon', polygon);
console.log('Polygon perim', polygon.perimeter);
polygon.draw();

var rectangle = new Rectangle([0,0],5,2);
console.log('Rectangle', rectangle);
console.log('Rectangle perim', rectangle.perimeter);
console.log('Rectangle area', rectangle.area);

var square = new Square([0,0],5,2);
console.log('Square', square);
console.log('Square perim', square.perimeter);
console.log('Square area', square.area);



var triangle = new Triangle([5,5],[5,2],[7,1]);
console.log('Triangle', triangle);
console.log('Triangle perim', triangle.perimeter);
console.log('Triangle area', triangle.area);

var circle = new Circle([5,5], 5);
console.log('Circle', circle);
console.log('Circle perim', circle.perimeter);
console.log('Circle area', circle.area);