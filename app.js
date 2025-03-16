document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'e52734188f62c0a6c3684db3a30d30e2';
    const CITY = 'Tashkent,UZ';

    async function getWeather(date) {
        try {
            console.log('Ob-havo so\'rovi yuborilmoqda:', date);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            console.log('API javob:', data);
            
            const weatherEmoji = {
                'Clear': '☀️ Quyoshli',
                'Clouds': '⛅ Bulutli',
                'Rain': '🌧️ Yomgirli',
                'Thunderstorm': '⛈️ Momaqaldiroq',
                'Snow': '❄️ Qorli',
                'Mist': '🌫️ Tumanli'
            };

            return {
                temp: `${Math.round(data.main.temp)}°`,
                condition: weatherEmoji[data.weather[0].main] || '⛅ Bulutli'
            };
        } catch (error) {
            console.error('Ob-havo xatosi:', error);
            return { temp: "N/A", condition: "⛅ Ma'lumot yo'q" };
        }
    }

    const ramazanData = [
        { 
            date: "1-Ramazon, 2025", 
            gregorian: "1-Mart, 2025", 
            weekday: "Shanba", 
            saharlik: "05:40", 
            iftorlik: "18:17",
            weather: { temp: "12°", condition: "⛅ Bulutli" }
        },
        { 
            date: "2-Ramazon, 2025", 
            gregorian: "2-Mart, 2025", 
            weekday: "Yakshanba", 
            saharlik: "05:38", 
            iftorlik: "18:18",
            weather: { temp: "14°", condition: "⛅ Bulutli" }
        },
        { date: "3-Ramazon, 2025", gregorian: "3-Mart, 2025", weekday: "Dushanba", saharlik: "05:37", iftorlik: "18:19" },
        { date: "4-Ramazon, 2025", gregorian: "4-Mart, 2025", weekday: "Seshanba", saharlik: "05:35", iftorlik: "18:20" },
        { date: "5-Ramazon, 2025", gregorian: "5-Mart, 2025", weekday: "Chorshanba", saharlik: "05:33", iftorlik: "18:21" },
        { date: "6-Ramazon, 2025", gregorian: "6-Mart, 2025", weekday: "Payshanba", saharlik: "05:32", iftorlik: "18:22" },
        { date: "7-Ramazon, 2025", gregorian: "7-Mart, 2025", weekday: "Juma", saharlik: "05:30", iftorlik: "18:24" },
        { date: "8-Ramazon, 2025", gregorian: "8-Mart, 2025", weekday: "Shanba", saharlik: "05:29", iftorlik: "18:25" },
        { date: "9-Ramazon, 2025", gregorian: "9-Mart, 2025", weekday: "Yakshanba", saharlik: "05:27", iftorlik: "18:26" },
        { date: "10-Ramazon, 2025", gregorian: "10-Mart, 2025", weekday: "Dushanba", saharlik: "05:25", iftorlik: "18:27" },
        { date: "11-Ramazon, 2025", gregorian: "11-Mart, 2025", weekday: "Seshanba", saharlik: "05:24", iftorlik: "18:28" },
        { date: "12-Ramazon, 2025", gregorian: "12-Mart, 2025", weekday: "Chorshanba", saharlik: "05:22", iftorlik: "18:29" },
        { date: "13-Ramazon, 2025", gregorian: "13-Mart, 2025", weekday: "Payshanba", saharlik: "05:20", iftorlik: "18:30" },
        { date: "14-Ramazon, 2025", gregorian: "14-Mart, 2025", weekday: "Juma", saharlik: "05:18", iftorlik: "18:32" },
        { date: "15-Ramazon, 2025", gregorian: "15-Mart, 2025", weekday: "Shanba", saharlik: "05:17", iftorlik: "18:33" },
        { date: "16-Ramazon, 2025", gregorian: "16-Mart, 2025", weekday: "Yakshanba", saharlik: "05:15", iftorlik: "18:34" },
        { date: "17-Ramazon, 2025", gregorian: "17-Mart, 2025", weekday: "Dushanba", saharlik: "05:13", iftorlik: "18:35" },
        { date: "18-Ramazon, 2025", gregorian: "18-Mart, 2025", weekday: "Seshanba", saharlik: "05:12", iftorlik: "18:36" },
        { date: "19-Ramazon, 2025", gregorian: "19-Mart, 2025", weekday: "Chorshanba", saharlik: "05:10", iftorlik: "18:37" },
        { date: "20-Ramazon, 2025", gregorian: "20-Mart, 2025", weekday: "Payshanba", saharlik: "05:08", iftorlik: "18:38" },
        { date: "21-Ramazon, 2025", gregorian: "21-Mart, 2025", weekday: "Juma", saharlik: "05:06", iftorlik: "18:39" },
        { date: "22-Ramazon, 2025", gregorian: "22-Mart, 2025", weekday: "Shanba", saharlik: "05:04", iftorlik: "18:40" },
        { date: "23-Ramazon, 2025", gregorian: "23-Mart, 2025", weekday: "Yakshanba", saharlik: "05:03", iftorlik: "18:41" },
        { date: "24-Ramazon, 2025", gregorian: "24-Mart, 2025", weekday: "Dushanba", saharlik: "05:01", iftorlik: "18:42" },
        { date: "25-Ramazon, 2025", gregorian: "25-Mart, 2025", weekday: "Seshanba", saharlik: "04:59", iftorlik: "18:44" },
        { date: "26-Ramazon, 2025", gregorian: "26-Mart, 2025", weekday: "Chorshanba", saharlik: "04:57", iftorlik: "18:45" },
        { date: "27-Ramazon, 2025", gregorian: "27-Mart, 2025", weekday: "Payshanba", saharlik: "04:55", iftorlik: "18:46" },
        { date: "28-Ramazon, 2025", gregorian: "28-Mart, 2025", weekday: "Juma", saharlik: "04:54", iftorlik: "18:47" },
        { date: "29-Ramazon, 2025", gregorian: "29-Mart, 2025", weekday: "Shanba", saharlik: "04:52", iftorlik: "18:48" },
        { date: "30-Ramazon, 2025", gregorian: "30-Mart, 2025", weekday: "Yakshanba", saharlik: "04:50", iftorlik: "18:49" }
    ];

    const calendar = document.getElementById('calendar');
    const today = new Date();

    const weatherConditions = [
        { temp: "20°", condition: "☀️ Quyoshli" },      
        { temp: "21°", condition: "⛅ Bulutli" },   
        { temp: "19°", condition: "🌧️ Yomgirli" }, 
        { temp: "18°", condition: "⛅ Bulutli" },   
        { temp: "20°", condition: "☀️ Quyoshli" }, 
        { temp: "22°", condition: "☀️ Quyoshli" }, 
        { temp: "21°", condition: "⛅ Bulutli" },   
        { temp: "20°", condition: "🌧️ Yomgirli" }, 
        { temp: "19°", condition: "⛅ Bulutli" },   
        { temp: "21°", condition: "☀️ Quyoshli" }, 
        { temp: "23°", condition: "☀️ Quyoshli" }, 
        { temp: "22°", condition: "⛅ Bulutli" },   
        { temp: "21°", condition: "🌧️ Yomgirli" }, 
        { temp: "20°", condition: "⛅ Bulutli" },   
        { temp: "22°", condition: "☀️ Quyoshli" }  
    ];

    const pastWeather = [
        { temp: "12°", condition: "⛅ Bulutli" },
        { temp: "13°", condition: "🌧️ Yomgirli" },
        { temp: "14°", condition: "⛅ Bulutli" },
        { temp: "15°", condition: "☀️ Quyoshli" },
        { temp: "16°", condition: "⛅ Bulutli" },
        { temp: "15°", condition: "🌧️ Yomgirli" },
        { temp: "14°", condition: "⛅ Bulutli" },
        { temp: "16°", condition: "☀️ Quyoshli" },
        { temp: "17°", condition: "⛅ Bulutli" },
        { temp: "18°", condition: "☀️ Quyoshli" },
        { temp: "17°", condition: "🌧️ Yomgirli" },
        { temp: "16°", condition: "⛅ Bulutli" },
        { temp: "18°", condition: "☀️ Quyoshli" },
        { temp: "19°", condition: "⛅ Bulutli" },
        { temp: "20°", condition: "☀️ Quyoshli" }
    ];

    function updateWeather() {
        const weatherElements = document.querySelectorAll('.weather');
        weatherElements.forEach((element, index) => {
            if (index >= 15) {
                const variation = Math.floor(Math.random() * 3) - 1;
                const currentWeather = weatherConditions[index - 15];
                const temp = parseInt(currentWeather.temp) + variation;
                element.innerHTML = `
                    <span class="temp">${temp}°</span>
                    <span class="condition">${currentWeather.condition}</span>
                `;
            }
        });
    }

    ramazanData.forEach((dayData, index) => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        
        const [day, month] = dayData.gregorian.split('-');
        const dayDate = new Date(`2025-${getMonthNumber(month)}-${day}`);
        
        if (isSameDay(today, dayDate)) {
            dayElement.classList.add('current-day');
        }
        
        dayElement.setAttribute('data-weekday', dayData.weekday);
        dayElement.setAttribute('data-day', index + 1);

        const weatherData = index < 15 ? pastWeather[index] : weatherConditions[index - 15];
        
        dayElement.innerHTML = `
            <div class="date">
                <div class="hijri">${dayData.date}</div>
                <div class="gregorian">${dayData.gregorian}</div>
                <div class="weekday">${dayData.weekday}</div>
                <div class="weather">
                    <span class="temp">${weatherData.temp}</span>
                    <span class="condition">${weatherData.condition}</span>
                </div>
            </div>
            <div class="times">
                <div class="time saharlik">
                    <strong>Saharlik:</strong><br>
                    ${dayData.saharlik}
                </div>
                <div class="time iftorlik">
                    <strong>Iftorlik:</strong><br>
                    ${dayData.iftorlik}
                </div>
            </div>
            <div class="duas">
                <div class="dua saharlik-dua">
                    <h4>Saharlik duosi:</h4>
                    <p class="arabic">نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصاً لِلهِ تَعَالَى</p>
                    <p class="latin">Navaytu an asuma sovma shahri ramazona minal fajri ilal mag'ribi, xolisan lillahi ta'ala. Allohu akbar.</p>
                </div>
                <div class="dua iftorlik-dua">
                    <h4>Iftorlik duosi:</h4>
                    <p class="arabic">اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ</p>
                    <p class="latin">Allohumma laka sumtu va bika amantu va a'layka tavakkaltu va a'la rizqika aftartu.</p>
                </div>
            </div>
        `;
        calendar.appendChild(dayElement);
    });

    setInterval(updateWeather, 30000);

    function getMonthNumber(monthStr) {
        const months = {
            'Mart': '03',
            'April': '04'
        };
        return months[monthStr.replace(',', '')];
    }

    function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth();
    }
});