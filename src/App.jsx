import React, { useState, useEffect } from "react";

const apiKey = "47a7bf6ffbf03e3fdd8dccbb46b7fd1c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    

    fetchWeatherData();
  }, [city]);

  return (
    <div className="mt-[200px] w-60 p-2 bg-pink-100 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex-shrink-0">
      {weatherData ? (
        <div>
          <img
            class="h-40 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <h2 className="mt-5 font-black">{city}</h2>

          <p className="mt-5">Tempetature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>TimeZone:{weatherData.timezone}</p>
          <p>Wind:{weatherData.wind.speed}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const WeatherApp = () => {
  const cities = ["Berlin", "Mexico", "Karachi", "Hyderabad"];

  return (
    <div className=" flex flex-wrap justify-center gap-4">
      {cities.map((city, index) => (
        <WeatherCard key={index} city={city} />
      ))}
    </div>
  );
};


export default WeatherApp;
