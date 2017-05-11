describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increase temperature', function() {
    thermostat.increase(30)
    expect(thermostat.temp).toBe(30);
  })
});
