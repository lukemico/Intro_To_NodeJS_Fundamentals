var PI = Math.PI;

module.exports = function(r) {
	return {
		area: function() {
			return PI * r * r;
		},
		circumference: function() {
			return 2 * PI * r;
		}
	};
};

// ~/Documents/projects/NodeJS $ node
// Welcome to Node.js v12.1.0.
// Type ".help" for more information.
// > var circle = require('./circle');
// undefined
// > circle.area(4)
// 50.26548245743669
// >
// (To exit, press ^C again or ^D or type .exit)
// >
// ~/Documents/projects/NodeJS $ vim circle.js
// ~/Documents/projects/NodeJS $ node
// Welcome to Node.js v12.1.0.
// Type ".help" for more information.
// > var circle = require('./circle.js');
// undefined
// > circle.area(4)
// 50.26548245743669
// >
// (To exit, press ^C again or ^D or type .exit)
// >
// ~/Documents/projects/NodeJS $ vim circle.js
// ~/Documents/projects/NodeJS $ node
// Welcome to Node.js v12.1.0.
// Type ".help" for more information.
// > var circle = require('./circle.js');
// Thrown:
// /Users/lukemico/Documents/projects/NodeJS/circle.js:20

// SyntaxError: Unexpected end of input
// > var circle = require('./circle.js');
// Thrown:
// /Users/lukemico/Documents/projects/NodeJS/circle.js:20

// SyntaxError: Unexpected end of input
// > var circle = require('./circle.js');
// Thrown:
// /Users/lukemico/Documents/projects/NodeJS/circle.js:19
// // 	};

// SyntaxError: Unexpected end of input
// > var circle = require('./circle.js');
// undefined
// > var myCircle = circle(4);
// undefined
// > myCircle.area()
// 50.26548245743669
// > myCircle.circumference()
// 25.132741228718345
