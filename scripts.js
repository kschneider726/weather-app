// My Scripts

//Spokane
$(document).ready(function() {
  $.simpleWeather({
    location: '99208',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
      html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="currently">'+weather.currently+'</h3>';
      
  
      $(".spokane").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


//Beaverton
$(document).ready(function() {
  $.simpleWeather({
    location: '97007',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
      html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="currently">'+weather.currently+'</h3>';
      
  
      $(".beaverton").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


// Get and store Geo Location lat/long coordinates
//AKA Pokemon GO Code
// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo .title').text(weather.title);
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};
