# React Weather App 🌦️☀️❄️

Welcome to the **React Weather App**, your sleek and responsive companion for staying updated with the latest weather conditions! Powered by **React**, **HTML**, and **CSS**, this app is designed to be user-friendly and visually engaging, while offering real-time weather data. 🌍

---

## 🎉 Features

- **Real-Time Weather Updates**: Fetch accurate weather data for any location worldwide.
- **User-Friendly Search**: Type a location and press Enter to see the current weather.
- **Dynamic Data Display**:
  - **Temperature** (in Fahrenheit).
  - **Feels Like Temperature**.
  - **Humidity**.
  - **Wind Speed**.
- **Responsive Design**: Enjoy a seamless experience on desktops, tablets, and mobile devices.
- **Error Handling**: Friendly error messages guide users when a location is not found or if something goes wrong.

---

## 🛠️ Technologies Used

- **React**: The core framework for building the app's interactive UI.
- **Axios**: For fetching weather data from the OpenWeatherMap API.
- **HTML & CSS**: To create a clean and responsive layout.

---

## 🛠️ How to Run the App

### 1️⃣ Clone the Repository

```bash
git https://github.com/Noore573/react-weather_app.git
cd react-weather-app
```

### 2️⃣ Install Dependencies

Ensure you have **Node.js** and **npm** installed. Then, run:
```bash
npm install
```

### 3️⃣ Set Up Your API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) if you don’t already have an account.
2. Replace the API key in the code with your own.

### 4️⃣ Start the Development Server

Launch the app locally by running:
```bash
npm start
```
The app will open in your default browser at `http://localhost:3000`.

---

## 🎮 How to Use the Weather App

1. **Enter a Location**:
   - Type a city name (e.g., `New York`) into the search bar.
   - Press `Enter` to fetch the weather.
2. **View Weather Data**:
   - The app dynamically displays:
     - **Temperature**: How hot or cold it is.
     - **Weather Condition**: E.g., Cloudy, Sunny, Rainy.
     - **Feels Like**: How the temperature feels due to humidity and wind.
     - **Humidity**: The percentage of water vapor in the air.
     - **Wind Speed**: How fast the wind is blowing.
3. **Handle Errors Gracefully**:
   - If the location is invalid or not found, a helpful error message will appear.

---

## 🌈 Design & Responsiveness

- **Clean UI**: Simple and modern interface.
- **CSS-Driven Styling**: Fully styled with CSS for a polished look.
- **Responsive Layout**: Works beautifully on devices of all sizes.

---

## 💡 Code Highlights

### Fetching Weather Data
- The app uses Axios to make API calls and handle responses:
  ```javascript
  axios.get(weatherapi)
    .then((response) => {
      setData(response.data);
      setError(null);
    })
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        setError('Location not found. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    });
  ```

### Dynamic Weather Display
- The app conditionally renders weather information:
  ```javascript
  {data.main && <h1>{data.main.temp.toFixed()}°F</h1>}
  ```

### Error Handling
- Friendly error messages ensure a great user experience:
  ```javascript
  if (err.response && err.response.status === 404) {
    setError('Location not found. Please try again.');
  }
  ```

---

## 🚀 Ready to Explore the Weather?

Experience the magic of real-time weather updates with a modern twist. 🌟  
Feel free to fork, customize, and enhance this app to make it your own!

---

### Made with ❤️, React, and a Dash of Sunshine 🌤️✨