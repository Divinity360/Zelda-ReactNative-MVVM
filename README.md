# Zelda Database App

A React Native mobile application that provides a database of The Legend of Zelda: Breath of the Wild content, including monsters, materials, equipment and creatures.

An app created to explore recent lib versions and implementations.

## Features

- **Monsters Database**: Browse and view details of all monsters from Breath of the Wild
- **Materials Database**: Explore materials and their properties
- **Equipment Database**: View weapons, armor, and equipment with their stats
- **Creatures Database**: Creature details, drops and cooking stats.
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

## API

The app uses the [BotW Compendium API](https://botw-compendium.herokuapp.com/) to fetch game data including:
- Monsters and their properties
- Materials and their effects
- Equipment with attack/defense stats
- Creatures and their properties

## Acknowledgments

- Data provided by the BotW Compendium API
- SVG content, icons and fonts used from Figma - [Zelda BOTW UI KIT](https://www.figma.com/design/HqBnmVybYBDIQX2RAwgVXY/Zelda-BOTW-UI-Kit--Community-?node-id=205-23499&t=jkqESnKDFwNI1eKB-0)
- The Legend of Zelda: Breath of the Wild by Nintendo
