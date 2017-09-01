var arDrone = require('ar-drone');
var client = arDrone.createClient();




client.takeoff();


client
    .after(1500, function () {
        this.stop();
        client.animateLeds('blinkRed', 5, 2);
    })
    .after(2000, function () {
        this.up(0.8);
    })

    .after(2000, function () {
        this.stop();
    })
    .after(3000, function () {
        this.front(0.2);
    })
    .after(3000, function () {
        this.stop();
    })
    .after(2000, function () {
        client.animate('vzDance', 1000);
    })
    .after(2500, function () {
        this.land();
    })
    .after(6000, function () {
        this.takeoff();
    })
    .after(2000, function () {
        this.up(0.6);
    })
    .after(3000, function () {
        this.stop();
    })
    .after(1500, function () {
        this.clockwise(0.5);
    })
    .after(4600, function () {
        this.stop();
    })
    .after(3000, function () {
        this.front(0.1);
    })
    .after(2000, function () {
        client.animate('wave', 1000);
    })
    .after(3000, function () {
        this.stop();
    })

    .after(2000, function () {
        this.land();
    });
