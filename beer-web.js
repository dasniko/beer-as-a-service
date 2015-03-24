var http = require("http");
var vertx = require("vertx2-core");

var server = http.createServer(function(request, response) {
  var url = request.url;
  var parts = url.split("/");
  var amount = parts[1];

  if (!isNaN(amount)) {
    vertx.eventbus.send("bar", {amount: amount}, function(message) {
	  response.write("<h1>" + amount + " beer(s) will be ready in " + message.body.wait_time + " minutes</h1>");
      response.end();
    });
  }
});

server.listen(9000, function() {
  console.log( "Beer-Server is listening on port 9000" );
});
