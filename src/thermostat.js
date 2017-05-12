function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSavingOn = true;
};

Thermostat.prototype.increase = function() {
  this.temp = this.temp + 1;
};

Thermostat.prototype.decrease = function() {
  this.minimumTemp();
  this.temp = this.temp - 1;
};

Thermostat.prototype.minimumTemp = function() {
  if (this.temp <= this.MIN_TEMP) {
    throw 'Can not go below 10 degrees';
  }
};

Thermostat.prototype.powerSavingToggle = function() {
  this.powerSavingOn = !this.powerSavingOn;
  if (this.powerSavingOn === true) {
      this.MAX_TEMP = 25;
  }
  else {
    this.MAX_TEMP = 32;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};
