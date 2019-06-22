// the nextTick function

console.log("start");
process.nextTick(function() {
	console.log("nextTick callback");
});
console.log("scheduled");

// If we want to look at the process.nexttick function, we can do so by creating a file. We're just going to create tick.js. Inside of there, let's write console.log, and we'll say start. And then we'll call the process.nexttick function. We're going to pass it a callback. That's just going to write out to the console.

// And then we're going to do one more console statement here, and we're going to use the word scheduled there. You're going to see in a just a minute why I chose to use that word.

// So now if we run that with our node command, you see what happens is first the start console log statement was run. Then it jumped all the way down to the bottom and ran scheduled, before coming back around to run the nexttick callback.

// So let's go in and take a looking inside our tick.js file and look at the code. Remember, the first thing we saw was start, ran. Then it went all the way down and ran scheduled before it came back around and ran the nexttick callback console log statement.

// The key to understanding why it worked that way and how it worked that way is to remember that Node is an event loop processor. Meaning, it just runs through in a loop looking for events that it can execute. What the nexttick function does is it doesn't do anything the first pass through, other than say the next time through, execute this callback.

// So functionally, you might think this is very similar to settimeout, where you have a function that you call, and then you supply a zero length or a zero time for the time out of the function. Operationally, both of those are going to execute the same way.

// The difference being is that settimeout requires IO from your system in managing that time out function. Even though the time is set to zero, it still introduces IO overhead. Whereas the nexttick has no additional IO overhead associated with it.
