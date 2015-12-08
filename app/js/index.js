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
p1.draw();
//console.log('point',p1);

var polygon = new Polygon([-10,-20],[-12,-5],[-5,4],[5,4],[7,-3]);
polygon.draw();
//console.log('Polygon', polygon);
//console.log('Polygon perim', polygon.perimeter);

var rectangle = new Rectangle([-3,-1],20,10);
rectangle.draw();
//console.log('Rectangle', rectangle);
//console.log('Rectangle perim', rectangle.perimeter);
//console.log('Rectangle area', rectangle.area);

var square = new Square([3,7],9);
square.draw();
//console.log('Square', square);
//console.log('Square perim', square.perimeter);
//console.log('Square area', square.area);

var triangle = new Triangle([-2,-3],[-3,10],[10,4]);
triangle.draw();
//console.log('Triangle', triangle);
//console.log('Triangle perim', triangle.perimeter);
//console.log('Triangle area', triangle.area);

var circle = new Circle([-5,5], 10);
circle.draw();
//console.log('Circle', circle);
//console.log('Circle perim', circle.perimeter);
//console.log('Circle area', circle.area);