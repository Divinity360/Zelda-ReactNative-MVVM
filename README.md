# Zelda React Native App

## Features
- **Modern UI**: Clean, intuitive interface with Zelda-themed styling
- **Offline Support**: Cached data for offline viewing

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Redux Toolkit** with RTK Query for state management and API calls
- **React Navigation** for screen navigation
- **Moti** for animations
- **Jest** for unit testing
- **Custom Components** with Zelda-themed styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

## Project Structure

```
src/
├── api/              # RTK Query API configuration and types
├── assets/           # Images, fonts, and static assets
├── components/       # Reusable UI components
├── constants/        # App constants and colors
├── jest/             # Jest setup and mocks
├── models/           # TypeScript data models
├── navigation/       # Navigation configuration
├── screens/          # Screen components
├── store/            # Redux store setup
└── utils/            # Utility functions
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run Jest unit tests

## Acknowledgments

- Data provided by the BotW Compendium API
