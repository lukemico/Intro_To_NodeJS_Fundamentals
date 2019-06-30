// var net = require("net");

// var server = net.createServer(function(c) {
// 	console.log("client connected");
// 	c.on("data", function(d) {
// 		console.log("data received: " + d.toString());
// 	});
// 	c.on("end", function() {
// 		console.log("client disconnected");
// 	});
// });

// server.listen(3000, function() {
// 	console.log("server started");
// });

var http = require("http");

var server = http.createServer(function(request, response) {
	if (request.url === "/") {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end("Hello <strong>World</strong>");
	} else if (request.url === "/goodbye") {
		if (request.method === "GET") {
			response.writeHead(200, { "Content-Type": "text/html" });
			response.end("Goodbye <strong>World</strong>");
		} else if (request.method === "POST") {
			response.writeHead(200, { "Content-Type": "text/html" });
			response.end("Posting goodbye cruel world!");
		}
	}
});

server.listen(3000);
