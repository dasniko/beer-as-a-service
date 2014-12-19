var eventBus = require("vertx/event_bus");

eventBus.registerHandler("bar", function(message, replier) {
  java.lang.System.err.println("BAR: Someone ordered " + message.amount + " beer(s)");
  replier({wait_time: message.amount * 1.75});
});

java.lang.System.err.println("The BAR is open!");
