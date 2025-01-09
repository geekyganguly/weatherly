# Weatherly

A mobile weather application built with React Native and WeatherAPI.

## Features

- Current weather conditions
- Location-based weather
- City search functionality
- Wind, humidity, and pressure data
- Pull-to-refresh updates
- Unit switching (Celsius/Fahrenheit)

## Tech Stack

- React Native
- Expo
- React Native Paper
- Tanstack React Query
- WeatherAPI

## Prerequisites

- Node.js (v22 or newer)
- Yarn
- [WeatherAPI](https://www.weatherapi.com) API key

## Setup

1. Clone the repository:

```bash
git clone https://github.com/geekyganguly/weatherly
cd weatherly
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory:

```
EXPO_PUBLIC_API_KEY=weather_api_key
```

4. Start the development server:

```bash
npx expo start -g
```

5. Run the app:

   - For iOS Simulator: Press `i` in the terminal after starting the development server
   - For Android Emulator: Press `a` in the terminal after starting the development server
   - For development on a physical device:
     - Install the Expo Go app from the App Store or Play Store
     - Scan the QR code from the terminal with your device's camera

## Troubleshooting

Common issues:

- Location permission denied: Enable location services
- API key errors: Verify .env configuration
- Build errors: Clear cache with `npx expo start -g -c`
