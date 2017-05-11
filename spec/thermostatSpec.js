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
});
