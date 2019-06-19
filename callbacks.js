// Functions used in Egghead.io callbacks lesson.

// define a simple Javascript function
var welcomeMsg = function() {
	console.log("Welcome to the Great Underground Empire!");
};

// define a second function, which accepts a parameter call 'callback'.
// Inside the function, we execute the callback that's passed in as a parameter.
var start = function(callback) {
	callback();
};

// define another function, that gruoups operations by name e.g. 'look'
var look = function(dir) {
	if (dir === "west") {
		console.log("There is a small mailbox here.");
	}
	if (dir === "east") {
		console.log("You are standing next a white house.");
	}
};

// define another function, that gruoups operations by name e.g. 'walk'

var walk = function(dir) {
	if (dir === "west") {
		console.log("It is very dark, you are likely to be eaten by a grue!");
	}
	if (dir === "south") {
		console.log("You are standing on the edge of a deep chasm.");
	}
};

// Finally, define a function that takes 2 values, a parameter + a callback to get the output of your variables.
var getInput = function(param, cb) {
	cb(param);
};

// The output of this function is 'There is a small mailbox here.'
getInput("west", look);
// Output 'There is a small mailbox here.'

getInput("south", walk);
// Output 'You are standing on the edge of a deep chasm.'
