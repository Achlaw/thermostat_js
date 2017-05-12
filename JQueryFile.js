$( document ).ready(function() {
  var thermostat = new Thermostat();

$("#Temperature_display").text(thermostat.temp + "°C");

$("#Increase").click(function() {
  thermostat.increase();
  $("#Temperature_display").text(thermostat.temp + "°C");
});

$("#Decrease").click(function() {
  thermostat.decrease();
  $("#Temperature_display").text(thermostat.temp + "°C");
});

$("#Reset").click(function() {
  thermostat.reset();
  $("#Temperature_display").text(thermostat.temp + "°C");
});

});
