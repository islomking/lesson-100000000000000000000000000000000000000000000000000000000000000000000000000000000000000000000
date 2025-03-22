async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '3ac50bf59c5cb4d727d68cc24a6dbd48'; // Замените на ваш API-ключ от OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const temperature = data.main.temp;
            const weatherInfo = `
                <h2>Температура в ${data.name}:</h2>
                <p>${temperature}°C</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;

            // Определяем картинку по температуре
            const weatherIcon = temperature > 16 ? 
                '<img src="https://img.icons8.com/ios/452/sun.png" alt="Солнце" />' : 
                '<img src="https://img.icons8.com/ios/452/cloud.png" alt="Тучка" />';
            document.getElementById('weather-icon').innerHTML = weatherIcon;

        } else {
            document.getElementById('weather-info').innerHTML = `<p>Город не найден. Попробуйте снова.</p>`;
            document.getElementById('weather-icon').innerHTML = '';
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Ошибка загрузки данных. Пожалуйста, попробуйте позже.</p>`;
        document.getElementById('weather-icon').innerHTML = '';
    }
}
