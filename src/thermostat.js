function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSavingOn = true;
};

Thermostat.prototype.increase = function() {
  this.maximumTempCheck();
  this.temp = this.temp + 1;
};

Thermostat.prototype.decrease = function() {
  this.minimumTempCheck();
  this.temp = this.temp - 1;
};

Thermostat.prototype.minimumTempCheck = function() {
  if (this.temp <= this.MIN_TEMP) {
    throw 'Can not go below 10 degrees';
  }
};

Thermostat.prototype.maximumTempCheck = function() {
  if (this.temp >= this.MAX_TEMP) {
    throw 'Can not go above 25 degrees';
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

Thermostat.prototype.currentEnergy = function() {
  return (this.temp < 25) ? ((this.temp < 18) ? 'low-usage' : 'medium-usage') : 'high-usage'
};
