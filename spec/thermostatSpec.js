describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increase temperature', function() {
    thermostat.increase()
    expect(thermostat.temp).toBe(21);
  });

  it('can decrease temperature', function() {
    thermostat.decrease()
    expect(thermostat.temp).toBe(19);
  });

  it('minimum temperature of 10 degrees', function() {
    thermostat.temp = 10;
    expect( function() { thermostat.decrease() } ).toThrow('Can not go below 10 degrees');
  });

  it('has power saving mode on', function() {
    expect(thermostat.powerSavingOn).toBe(true);
  });

  it('when saving mode is on has maximum temperature of 25 degrees', function() {
    expect(thermostat.MAX_TEMP).toBe(25);
  });

  it('when saving mode is off has maximum temperature of 32 degrees', function() {
    thermostat.powerSavingToggle()
    expect(thermostat.MAX_TEMP).toBe(32);
  });

  it('resets the temperature to 20 with a reset function', function() {
    thermostat.reset()
    expect(thermostat.temp).toBe(20);
  });

  it('returns low if temperature is 15', function(){
    thermostat.temp = 15;
    expect(thermostat.currentEnergy()).toBe('low-usage');
  });

  it('returns medium if temperature is 25', function(){
    thermostat.temp = 24;
    expect(thermostat.currentEnergy()).toBe('medium-usage');
  });

  it('returns high if temperature is 26', function(){
    thermostat.temp = 26;
    expect(thermostat.currentEnergy()).toBe('high-usage');
  });

});
