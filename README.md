# Weatherly

A mobile weather application built with React Native, Expo, React Native Paper and WeatherAPI.

## Features

- Current weather conditions
- Location-based weather
- City search functionality
- Wind, humidity, and pressure data
- Pull-to-refresh updates
- Unit switching (Celsius/Fahrenheit)

## Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI
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
EXPO_PUBLIC_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npx expo start
```

## API Integration

The app uses WeatherAPI. Get your API key from [weatherapi.com](https://www.weatherapi.com).

## Available Scripts

- `yarn start`: Start the Expo server
- `yarn android`: Run on Android
- `yarn ios`: Run on iOS
- `yarn web`: Run on web browser

## Environment Setup

### iOS Development

1. Install Xcode
2. Install iOS Simulator
3. Run `npx pod-install`

### Android Development

1. Install Android Studio
2. Setup Android Emulator
3. Configure environment variables

## Troubleshooting

Common issues:

- Location permission denied: Enable location services
- API key errors: Verify .env configuration
- Build errors: Clear cache with `npx expo start -c`
