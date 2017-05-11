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

  it('when saving mode is on has maximum temperature of 25 degrees', function() {
    expect(thermostat.maximum_temp).toBe(25);
  });

});
