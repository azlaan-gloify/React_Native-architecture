### Hi there, React-native architecture 👋

<!--
**azlaan-gloify/azlaan-gloify** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:
-->

- 🔭 This is React-Native Architecture
- 🌱 This repo will demostrate you, how to create and maintain folder architecture
- 👯 How to add various stuff in project
- 🤔 Anyone can comment it down
- 💬 Suggestions are always welcome
- 📫 How to reach me: ...
- azlaan@gloify.com
  Created by Mohammed Azlaan Khan

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# React Native Project

This project is a React Native application designed with a scalable and maintainable architecture. It follows best industry practices and includes a well-organized folder structure.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Folder Structure Explanation](#folder-structure-explanation)
- [Running the Project](#running-the-project)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This React Native project is structured to make it easy to scale and maintain. It is organized into folders that separate concerns such as components, styles, utilities, network calls, and state management, following best practices.

## Project Structure

The project has the following major components:

- **API**: Manages network requests.
- **Assets**: Contains static assets like images and fonts.
- **Components**: Reusable UI components.
- **Config**: Configuration and environment variables.
- **Constants**: Application-wide constants.
- **Hooks**: Custom React hooks.
- **i18n**: Internationalization setup.
- **Navigation**: Navigation setup using React Navigation.
- **Redux**: State management with Redux.
- **Screens**: The different screens/views of the app.
- **Styles**: Global and component-specific styles.
- **Utils**: Utility functions.

## Folder Structure Explanation

### 1. `src/api/`

Handles network requests using Axios. It includes:

- **`client.js`**: Configures the Axios instance with a base URL and timeout.
- **`endpoints.js`**: Lists all the API endpoints.
- **`index.js`**: Centralized export for the API module.

### 2. `src/assets/`

Stores static assets such as:

- **`fonts/`**: Custom fonts.
- **`images/`**: Image files.

### 3. `src/components/`

Reusable UI components. Example:

- **`Button.js`**: A customizable button component.

### 4. `src/config/`

Contains configuration files like:

- **`env.js`**: Environment variables.
- **`index.js`**: Centralized export for configuration.

### 5. `src/constants/`

Defines application-wide constants:

- **`colors.js`**: Color definitions.
- **`fonts.js`**: Font family and size definitions.
- **`images.js`**: Image paths.
- **`strings.js`**: String literals.

### 6. `src/hooks/`

Custom React hooks. Example:

- **`useFetch.js`**: A hook for fetching data.

### 7. `src/i18n/`

Internationalization setup using `react-i18next`:

- **`en.json`**: English translations.
- **`es.json`**: Spanish translations.
- **`index.js`**: i18n setup and initialization.

### 8. `src/navigation/`

Handles navigation within the app using React Navigation:

- **`AppNavigator.js`**: Main navigation setup.
- **`index.js`**: Centralized export for navigation.

### 9. `src/redux/`

Manages global state with Redux:

- **`actions/`**: Action creators.
- **`reducers/`**: Reducers to handle state changes.
- **`store.js`**: Configures the Redux store.
- **`types.js`**: Defines action types.

### 10. `src/screens/`

Houses the app's screens/views:

- **`HomeScreen.js`**: The home screen.
- **`DetailsScreen.js`**: A details screen.

### 11. `src/styles/`

Global and component-specific styles:

- **`globalStyles.js`**: Global styles used throughout the app.

### 12. `src/utils/`

Utility functions:

- **`helpers.js`**: General-purpose utility functions.

## Running the Project

To run the project locally:

1. Install dependencies:

   ```bash
   npm install
   ```
