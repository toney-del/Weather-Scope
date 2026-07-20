function DailyForecast({ dailyData }) {
  if (!dailyData) return null;

  // Weather codes to icons and text
  const getWeatherInfo = (code) => {
    const codes = {
      0: { icon: '☀️', text: 'Clear' },
      1: { icon: '🌤️', text: 'Mostly Clear' },
      2: { icon: '⛅', text: 'Partly Cloudy' },
      3: { icon: '☁️', text: 'Cloudy' },
      45: { icon: '🌫️', text: 'Foggy' },
      51: { icon: '️', text: 'Light Rain' },
      61: { icon: '️', text: 'Rain' },
      71: { icon: '🌨️', text: 'Snow' },
      95: { icon: '⛈️', text: 'Thunderstorm' }
    };
    return codes[code] || { icon: '️', text: 'Clear' };
  };

  return (
    <div className="card">
      <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>📅 7-Day Forecast</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {dailyData.time.slice(0, 7).map((day, index) => {
          const weather = getWeatherInfo(dailyData.weathercode[index]);
          const maxTemp = dailyData.temperature_2m_max[index];
          const minTemp = dailyData.temperature_2m_min[index];
          const date = new Date(day);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

          return (
            <div 
              key={day} 
              className="card"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px'
              }}
            >
              <span style={{ fontWeight: '600', width: '100px' }}>{dayName}</span>
              <span style={{ fontSize: '24px' }}>{weather.icon}</span>
              <span style={{ flex: 1, marginLeft: '10px' }}>{weather.text}</span>
              <div>
                <span style={{ fontWeight: '700', marginRight: '10px' }}>{maxTemp}°</span>
                <span style={{ opacity: 0.7 }}>{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast;