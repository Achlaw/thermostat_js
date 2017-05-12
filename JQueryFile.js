$( document ).ready(function() {
  var thermostat = new Thermostat();

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=london,uki&appid=70d50a0639ca16ec7c7790404870e439", function temp(localtemperature) {
  $('#local_temperature').text(Math.floor((localtemperature.main.temp) - 273.15) + "°C");
  $('#city').text(localtemperature.name);
});

$("#weather_search").click(function() {
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + $("#city_search").val() + "&appid=70d50a0639ca16ec7c7790404870e439", function (searchTemp) {
  $('#local_temperature').text(Math.floor((searchTemp.main.temp) - 273.15) + "°C");
  $('#city').text(searchTemp.name);
  });
});

$("#Temperature_display").text(thermostat.temp + "°C");

$("#Energy_display").text(thermostat.currentEnergy());

$("#Increase").click(function() {
  thermostat.increase();
  energyColourUpdate();
  $("#Temperature_display").text(thermostat.temp + "°C");
  $("#Energy_display").text(thermostat.currentEnergy());
});

$("#Decrease").click(function() {
  thermostat.decrease();
  energyColourUpdate();
  $("#Temperature_display").text(thermostat.temp + "°C");
  $("#Energy_display").text(thermostat.currentEnergy());
});

$("#Reset").click(function() {
  thermostat.reset();
  energyColourUpdate();
  $("#Temperature_display").text(thermostat.temp + "°C");
  $("#Energy_display").text(thermostat.currentEnergy());
});

$("#Slider").click(function() {
  thermostat.powerSavingToggle();
  energyColourUpdate();
  $("#Temperature_display").text(thermostat.temp + "°C");
  $("#Energy_display").text(thermostat.currentEnergy());
});

function energyColourUpdate() {
  $('.body').attr('id', thermostat.currentEnergy());
};

});
