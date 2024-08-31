import { useEffect, useState } from "react";

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [err, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [city, setCity] = useState();

  async function fetchWeather() {
    setLoading(true);
    setErro(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!res.ok) {
        throw new Error(res.statusText || "Something went wrong");
      }

      const data = await res.json();
      setData(data);
    } catch (e) {
      setErro(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter") {
        fetchWeather();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [city, apiKey]); 

  return (
    <div className="max-w-[600px] mx-auto rounded-md px-4 md:px-10 py-4 bg-pink-300 mt-16">
      <div className="flex items-center justify-center mt-8">
        <input
          className="border-2 border-gray-500 outline-none p-2 w-96 rounded-md mr-1"
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-gray-500 px-4 py-2 text-white rounded-full"
          onClick={fetchWeather}
        >
          Search
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-4">Loading...</div>
      ) : err ? (
        <div className="flex justify-center items-center mt-4 text-red-500">
          {err}
        </div>
      ) : data ? (
        <div className="flex flex-col mt-6 mb-4 items-center justify-center">
          <div className="text-lg font-bold">
            {data.name}, {data.sys.country}
          </div>
          <div>{new Date().toLocaleDateString()}</div>
          <h1 className="text-4xl font-bold">{data.weather[0].description}</h1>
          <div>{Math.round(data.main.temp - 273.15)}°C</div>
          <div className="flex justify-between pb-2 mt-4 w-full">
            <div className="flex flex-col">
              <div className="text-sm font-bold">Wind Speed</div>
              <div>{data.wind.speed} m/s</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-bold">Humidity</div>
              <div>{data.main.humidity}%</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-4">
          Enter a city to get the weather information
        </div>
      )}
    </div>
  );
}

export default App;
