import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

interface Position {
  lat: number;
  lon: number;
}

interface WeatherData {
  name: string;
  time: number;
  feelsLike: number;
  mainWeather: string;
}

const getWeather = async ({ lat, lon }: Position): Promise<any> => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_APP_KEY || '';
  const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return await axios.get(uri);
};

const DefaultHeader = () => <div>Loading weather data...</div>;

const DynamicHeader = ({ name, time, feelsLike, mainWeather }: WeatherData) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>As of {moment.utc(time).format('LTS')} UTC</span>
      <p>
        It is {mainWeather} and it feels like {feelsLike}K!
      </p>
    </div>
  );
};

const renderWeatherData = (weatherData: any | null) => {
  if (weatherData) {
    return (
      <DynamicHeader
        name={weatherData.name}
        time={weatherData.dt}
        feelsLike={weatherData.main.feels_like}
        mainWeather={weatherData.weather[0].description}
      />
    );
  }
  return <DefaultHeader />;
};

const DailyHeader = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const currPos = {
          lat: coords.latitude,
          lon: coords.longitude,
        };

        const res = await getWeather(currPos);

        setWeatherData(res.data);
      });
    }
  }, []);

  return renderWeatherData(weatherData);
};

export default DailyHeader;
