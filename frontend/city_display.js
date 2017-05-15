
// Example: https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/San_Francisco.json

// Mock: https://www.dropbox.com/s/1t21mnbkudc7mzh/Weather-mock-2.png?dl=0

var base_path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/";
var cities = [
  "San_Francisco",
  "Miami",
  "New_Orleans",
  "Chicago",
  "New_York_City"
];
var city_info = [];
var city_obj = {};

getCityInfo();

function getCityInfo() {
  $.each(cities, function (index, city) {    
    $.getJSON(base_path + city + '.json', function (result) {
      displayCityInfo({
        name: result.name,
        temp: result.main.temp,
        icon: result.weather[0].icon,
        weather: result.weather[0].description,
        wind_speed: result.wind.speed
      });
    });
  });
}

function displayCityInfo(city) {
  var output;
    console.log("city ", city);
    var deg = convertKtoF(city.temp);
    var icon = getIconURL(city.icon);
    var speed = fromMPStoMPH(city.speed);
    output += "<h2>" + city.name + "</h2>";
    output += "<div>";
    output += "<p>" + deg + "&deg;</p>";
    output += "<p> <span>" + icon + "</span>";
    output += "<span>" + city.weather + "</span></p>";
    output += "<p>" + speed + "</p>";
    output += "</div>";
  $("#city").append(output);
}
// Convert from Meters Per Second to Miles Per Hour
function fromMPStoMPH(mps) {
  return (Math.round(10 * mps * 2.2369362920544) / 10);
}

// Convert from Kelvins to Fahrenheit
function convertKtoF(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8);
}

// Weather icon
function getIconURL(icon) {
  return "http://openweathermap.org/img/w/" + icon + ".png";
}


/* font-family: OpenSans, sans serif; */
header {
  top: 0;
  padding: 20px 0;
  border-bottom: 1px solid #cecece;
  width: 100%;
  text-align: center;
}

ul,
li {
  list-style: none;
}

.weather-cards li {
  box-sizing: border-box;
  padding: 10px;
  width: 200px;
  border: 1px solid #cecece;
  text-align: center;
}


<header>
  <h1>Weather in the United States</h1>
</header>

<section class="weather">
  <ul class="weather-cards">
    <li>
      <h2>San Francisco</h2>
      <div>
        <p>62&deg;</p>
        <p>
          <span><!--Icon here--></span>
          <span>Cloudy</span>
        </p>
        <p>2 mph</p>
      </div>
    </li>
  </ul>
</section>

<section  class="weather">
  <ul class="weather-cards">
    <li id="city">
    </li>
  </ul>
</section>