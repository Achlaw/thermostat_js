function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increase = function() {
  this.temp = this.temp + 1;
};

Thermostat.prototype.decrease = function() {
  this.temp = this.temp - 1;
};
