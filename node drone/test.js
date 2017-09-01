var arDrone = require('ar-drone');
var client = arDrone.createClient();




client.takeoff();

client.up(0.1, 1000);
   client .after(500, function() {
    this.animate('flipLeft', 1000);
});