// the process object

process.argv.forEach(function(val, index) {
	console.log(index + ": " + val);
});

// One of the most common things that you're probably going to use the Process object for is picking up on the arguments that were passed along the command line to your Node app.

// Create a file called arguments.js. Inside of arguments.js, we're just going to call the process.argv, which is an array, so we're going to use a foreach.

// Log out the individual components of that array along with their index.

// Execute the file that and watch its action by calling the Node command, passing in the name of our arguments.js file, and then just some random strings here at the end to watch it work.

// You get an idea here of the argv array and how it works.

// The thing to note here is that index zero [0] of that array is the Node executable itself. Index one [1]is the name of the JavaScript file we passed to node. And so realistically the first index item in the array that you're going to be interested in is going to be starting at index position two and moving on from there.
