import org.vertx.java.core.Handler;
import org.vertx.java.core.eventbus.Message;
import org.vertx.java.core.json.JsonObject;
import org.vertx.java.platform.Verticle;

public class BeerBar extends Verticle {

  public void start() {
    vertx.eventBus().registerHandler("bar", new Handler<Message<JsonObject>>() {
      @Override
      public void handle(Message<JsonObject> message) {
        String name = message.body().getString("name");
        String strAmount = message.body().getString("amount");
        System.out.println("BAR: " + name  + " ordered " + strAmount + " beer(s)");

        double time = 1.75 * Integer.parseInt(strAmount);

        JsonObject json = new JsonObject();
        json.putNumber("wait_time", time);
        message.reply(json);
      }
    });
    System.out.println("The BAR is open!");
  }
}
