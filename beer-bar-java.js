var eventBus = require("vertx/event_bus");
var console = require("vertx/console");

eventBus.registerHandler("bar", function(message, replier) {
  var amount = message.amount;
  console.log("BAR: Someone ordered " + amount + " beer(s)");
  var fbcs = new Packages.nodyn.FancyBarCalculatingService();
  var time = fbcs.calculateBeer(amount);
  replier({wait_time: time});
});

console.log("The BAR is open!");
