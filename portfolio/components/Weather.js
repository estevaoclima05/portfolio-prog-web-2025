"use client";

import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.9&current_weather=true&timezone=America/Sao_Paulo"
        );

        if (!response.ok) throw new Error("Erro ao buscar clima");

        const data = await response.json();
        setWeather(data.current_weather);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weather-widget">Carregando clima...</div>;
  if (error) return <div className="weather-widget">Erro: {error}</div>;

  return (
    <div className="weather-widget">
      <h3>🌤️ Clima - Recife, PE</h3>
      <div className="weather-info">
        <p className="temperature">{weather.temperature}°C</p>
        <p className="wind">Vento: {weather.windspeed} km/h</p>
      </div>
    </div>
  );
}
