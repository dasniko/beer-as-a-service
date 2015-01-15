Nodyn Beer-as-a-Service Examples
================================

[Nodyn](http://nodyn.io) examples using [Vert.x](http://vertx.io) eventbus.

Example 1: Nodyn with Vert.x
----------------------------

*You'll need the NPM module [vertx2-core](https://github.com/nodyn/vertx2-core).*

Run

    $ nodyn beer-as-a-service.js

the console will print

    Beer-Server listening on port 9000

Point your browser to

    http://localhost:9000/5

The result in your browser will be

    5 beer(s) will be ready in 8.75 minutes

The console will print

    BAR: someone ordered 5 beer(s)


Example 2: Vert.x with Nodyn
----------------------------

*You'll need the NPM module [vertx2-core](https://github.com/nodyn/vertx2-core) and the Vert.x module [mod-nodyn](https://github.com/nodyn/mod-nodyn).*

Run in console 1

    $ vertx runmod io.nodyn.vertx~mod-nodyn~1.0.0-SNAPSHOT -conf beer.conf -cluster

Output will be

    ...
    Beer server is listening on port 9000
    Succeeded in deploying module

Run in console 2

    $ vertx run beer-bar.js -cluster

Output of console 2 will be

    ...
    The BAR ist open!
    Succeeded in deploying module

After pointing the browser to

    http://localhost:9000/5

The response in the browser will be

    5 beer(s) will be ready in 8.75 minutes

Console 1 will not print anything, but in console 2 there will be

    BAR: Someone ordered 5 beer(s)
