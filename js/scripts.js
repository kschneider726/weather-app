// My Scripts

//Spokane
$.simpleWeather({
    location: '99208',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane .title').text(weather.title);
        
      // If this condition, show this icon
        if ( 26 >= weather.code && 30 <= weather.code ) {
            
        $('.spokane .wi').addClass('wi-day-cloudy');
            
        }
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p> Cannot Connect. Look out a window! :) </p>');
    }
  
  });

//Beaverton
$.simpleWeather({
    location: '97007',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.beaverton .temp').text(weather.temp);
      $('.beaverton .city').text(weather.city);
      $('.beaverton img').attr('src', weather.image);
      $('.beaverton .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p> Cannot Connect. Look out a window! :) </p>');
    }
  
  });

//Vienna, Austria
$.simpleWeather({
    location: 'Vienna, Austria',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.vienna .temp').text(weather.temp);
      $('.vienna .city').text(weather.city);
      $('.vienna img').attr('src', weather.image);
      $('.vienna .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p> Cannot Connect. Look out a window! :) </p>');
    }
  
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
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
            // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};