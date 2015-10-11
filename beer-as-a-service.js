var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var vertx = require("vertx2-core");

var app = express();

app.use(bodyParser.json());

var registration = vertx.eventbus.register("bar", function(message) {
  var name = message.body.name;
  var amount = message.body.amount;
  console.log("BAR: " + name + " ordered " + amount + " beer(s).");
  message.reply({wait_time: amount * 1.75});
});

app.post('/order', function(req, res) {
  vertx.eventbus.send("bar", req.body, function(message) {
    res.write(JSON.stringify(message.body));
    res.end();
  });
});

app.get('/:file', function(req, res) {
    var file = req.params.file;
    var filename = path.join(__dirname, "web", file);
    var strFile = new String(filename);
    fs.readFile(filename, "utf8", function(err, data) {
        if (data) {
            var contentType = "text/" + (strFile.endsWith(".js") ? "javascript" : strFile.endsWith(".css") ? "css" : "html");
            res.set("Content-type", contentType);
            res.send(data);
            res.end();
        }
    });
});

app.listen(9000, function() {
  console.log( "Beer-Server is listening on port 9000" );
});
