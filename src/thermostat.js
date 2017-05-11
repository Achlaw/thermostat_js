function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
};

Thermostat.prototype.increase = function() {
  this.temp = this.temp + 1;
};

Thermostat.prototype.decrease = function() {
  this.minimum_temp();
  this.temp = this.temp - 1;
};

Thermostat.prototype.minimum_temp = function() {
  if (this.temp <= this.MIN_TEMP) {
    throw 'Can not go below 10 degrees'
  }
};

// Thermostat.prototype.maximum_temp = function()
