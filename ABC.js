var arDrone = require('ar-drone');
var client  = arDrone.createClient([ip="192.168.1.1"]);

client.takeoff();

client
  .after(3500, function() {
    this.front(0.5);
  })
  .after(3500, function() {
    this.stop();
    this.land();
  })
  .after(3500, function() {
    this.takeoff();
  })
  .after(3500, function() {
    this.front(0.5);
  })
  .after(2000, function() {
    this.stop();
    this.land();
  });