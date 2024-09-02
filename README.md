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

   ***

   # ReactNativeProject

This React Native project is organized using best industry practices to ensure scalability, maintainability, and ease of development. Below, you'll find a detailed explanation of the project structure, as well as setup instructions for both Android and iOS platforms.

## Table of Contents

- [Project Structure](#project-structure)
- [Folder Structure Details](#folder-structure-details)
  - [api](#api)
  - [assets](#assets)
  - [components](#components)
  - [config](#config)
  - [constants](#constants)
  - [hooks](#hooks)
  - [i18n](#i18n)
  - [navigation](#navigation)
  - [redux](#redux)
  - [screens](#screens)
  - [styles](#styles)
  - [utils](#utils)
- [Setup Instructions](#setup-instructions)
  - [Android Setup](#android-setup)
  - [iOS Setup](#ios-setup)
- [Running the Project](#running-the-project)

## Project Structure

```plaintext
ReactNativeProject/
├── android/
├── ios/
├── src/
│   ├── api/
│   │   ├── client.js
│   │   ├── endpoints.js
│   │   └── index.js
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   └── Button.js
│   ├── config/
│   │   ├── env.js
│   │   └── index.js
│   ├── constants/
│   │   ├── colors.js
│   │   ├── fonts.js
│   │   ├── images.js
│   │   └── strings.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── i18n/
│   │   ├── en.json
│   │   ├── es.json
│   │   └── index.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   └── index.js
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── store.js
│   │   └── types.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── DetailsScreen.js
│   ├── styles/
│   │   ├── globalStyles.js
│   │   └── index.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── index.js
│   └── App.js
├── .babelrc
├── .eslintrc.js
├── .prettierrc.js
├── index.js
└── README.md

```

Folder Structure Details
src/api/

This folder contains files related to network calls and API interactions.

    client.js: Configures an Axios instance (or Fetch setup) for making HTTP requests.
    endpoints.js: Contains constants for API endpoints, keeping them organized and easy to manage.
    index.js: Centralizes and exports API functions for use throughout the app.

src/assets/

This folder holds static assets such as fonts and images.

    fonts/: Contains custom font files.
    images/: Contains image files used in the app.

src/components/

This folder includes reusable UI components.

    Button.js: A sample button component that can be reused across different screens.

src/config/

Configuration files that define environment-specific settings and global configurations.

    env.js: Stores environment-specific variables (e.g., API keys, base URLs).
    index.js: Centralized export of configuration files.

src/constants/

This folder holds application-wide constants.

    colors.js: Defines color constants used throughout the app.
    fonts.js: Defines font-related constants (e.g., font families, sizes).
    images.js: Defines image-related constants, such as image paths.
    strings.js: Contains string constants used in the app, allowing easy localization.

src/hooks/

Custom hooks for managing common logic in React components.

    useFetch.js: A custom hook for fetching data from an API.

src/i18n/

Internationalization (i18n) setup for supporting multiple languages.

    en.json: Contains English language translations.
    es.json: Contains Spanish language translations.
    index.js: Initializes and configures i18n for the app.

src/navigation/

Handles navigation setup and configuration.

    AppNavigator.js: Sets up the main navigation structure of the app (e.g., stack navigator, tab navigator).
    index.js: Centralized export of navigation components.

src/redux/

State management using Redux.

    actions/: Contains action creators that define Redux actions.
    reducers/: Contains Redux reducers that update the state based on actions.
    store.js: Configures the Redux store, applying middleware and combining reducers.
    types.js: Defines action types as constants, preventing typo-related bugs.

src/screens/

Houses the various screens (or views) of the application.

    HomeScreen.js: The main/home screen of the app.
    DetailsScreen.js: A detailed view screen for specific content.

src/styles/

Styles and theming for the application.

    globalStyles.js: Contains global styles that can be used throughout the app.
    index.js: Centralized export of styles.

src/utils/

Utility functions and helpers that can be used across different parts of the app.

    helpers.js: Contains common helper functions (e.g., formatting dates, string manipulations).
    index.js: Centralized export of utility functions.

src/App.js

The main entry point of the React Native application, responsible for initializing the app and rendering the root component.
.babelrc

Configuration for Babel, specifying how the JavaScript code should be transpiled.
.eslintrc.js

Configuration for ESLint, enforcing coding standards and catching errors in the codebase.
.prettierrc.js

Configuration for Prettier, ensuring consistent code formatting throughout the project.
index.js

The entry point for the React Native application, where the app is registered with the AppRegistry.
Setup Instructions
Android Setup

    Install Android Studio: Download and install Android Studio.

    Android SDK: Ensure that the Android SDK is installed via the Android Studio SDK Manager.

    Set up an Android Emulator:
        Open Android Studio.
        Go to Configure > AVD Manager.
        Create a new Virtual Device.

    Configure Environment Variables:
        Add the following to your ~/.bash_profile or ~/.zshrc:

    sh

    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools

        Reload the terminal using source ~/.bash_profile or source ~/.zshrc.

    Start the Metro server:
        Navigate to the project directory.
        Run npx react-native start.

    Build and Run:
        Run the app on your Android device/emulator using npx react-native run-android.

iOS Setup

    Install Xcode: Download and install Xcode from the Mac App Store.

    Install CocoaPods: CocoaPods is used to manage iOS dependencies. Install it using:

    sh

    sudo gem install cocoapods

    Install dependencies:
        Navigate to the ios directory inside the project.
        Run pod install.

    Open the Project in Xcode:
        Open the .xcworkspace file in the ios directory using Xcode.

    Run the Project:
        Select your target device or simulator in Xcode.
        Press Cmd + R to build and run the app.

Running the Project

To run the app on your development machine:
Android

    Start the Metro server:

    sh

npx react-native start

Run the Android app:

sh

    npx react-native run-android

iOS

    Start the Metro server:

    sh

npx react-native start

Run the iOS app:

sh

    npx react-native run-ios

Note: Ensure that your Metro server is running before attempting to build and run the app on any platform.

Here's a draft for a README section on how to use `.env` files and generate builds for different environments in your React Native project:

---

## Environment Configuration

This project uses `.env` files to manage environment-specific configurations, such as API URLs, keys, and other variables that may differ between development, staging, and production environments.

### Setting Up Environment Variables

We use the `react-native-config` package (or `react-native-dotenv`) to manage environment variables.

1. **Create Environment Files:**

   Create separate `.env` files for each environment in the root directory of the project:

   - `.env.development` - Configuration for development environment.
   - `.env.staging` - Configuration for staging environment.
   - `.env.production` - Configuration for production environment.

   Each file should define the environment-specific variables in the following format:

   ```env
   API_URL=https://your-api-url.com
   API_KEY=your-api-key
   ```

   Example `.env.development`:

   ```env
   API_URL=https://dev-api.example.com
   API_KEY=dev-secret-key
   ```

2. **Using Environment Variables in Code:**

   You can import and use the environment variables in your React Native components as follows:

   ```javascript
   import Config from 'react-native-config';

   console.log('API URL:', Config.API_URL);
   ```

   Or, if using `react-native-dotenv`:

   ```javascript
   import {API_URL, API_KEY} from '@env';

   console.log('API URL:', API_URL);
   ```

### Generating Builds for Different Environments

To build and run the app with the appropriate environment configuration, specify the `.env` file when executing the build commands.

1. **Development Build:**

   To run the app in development mode using `.env.development`:

   ```bash
   ENVFILE=.env.development npx react-native run-android
   ENVFILE=.env.development npx react-native run-ios
   ```

2. **Staging Build:**

   To run the app in staging mode using `.env.staging`:

   ```bash
   ENVFILE=.env.staging npx react-native run-android
   ENVFILE=.env.staging npx react-native run-ios
   ```

3. **Production Build:**

   To run the app in production mode using `.env.production`:

   ```bash
   ENVFILE=.env.production npx react-native run-android
   ENVFILE=.env.production npx react-native run-ios
   ```

### Example npm Scripts

For convenience, you can add npm scripts to your `package.json` to automate the build process:

```json
"scripts": {
  "android:dev": "ENVFILE=.env.development react-native run-android",
  "android:staging": "ENVFILE=.env.staging react-native run-android",
  "android:prod": "ENVFILE=.env.production react-native run-android",
  "ios:dev": "ENVFILE=.env.development react-native run-ios",
  "ios:staging": "ENVFILE=.env.staging react-native run-ios",
  "ios:prod": "ENVFILE=.env.production react-native run-ios"
}
```

Now you can run the app with a specific environment by simply running one of the following commands:

```bash
npm run android:dev
npm run android:prod
npm run ios:dev
npm run ios:prod
```

### Notes

- Ensure that your `.env` files are listed in `.gitignore` to avoid committing sensitive information to the repository.
- If you add new environment variables, be sure to restart your development server for the changes to take effect.
- Dont push your actual .env files to github, the above .env files has been pushed for demo purpose

---

## Firebase Crashlytics Integration

This project uses Firebase Crashlytics to monitor app stability and track crashes. Follow the steps below to set up and integrate Firebase Crashlytics into the project.

### Prerequisites

Before integrating Firebase Crashlytics, ensure you have the following:

1. A Firebase project set up in the [Firebase Console](https://console.firebase.google.com/).
2. The Firebase CLI installed on your machine.
3. The React Native Firebase modules installed in your project.

### Step 1: Set Up Firebase in the Project

1. **Create a Firebase Project:**

   - Visit the [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project or select an existing one.

2. **Add Your App to Firebase:**
   - **For Android:**
     - Register your Android app with the package name found in `android/app/src/main/AndroidManifest.xml`.
     - Download the `google-services.json` file from Firebase and place it in the `android/app/` directory.
   - **For iOS:**
     - Register your iOS app with the bundle ID found in `ios/{YourProjectName}/Info.plist`.
     - Download the `GoogleService-Info.plist` file from Firebase and add it to your Xcode project, ensuring it is included in the project and target settings.

### Step 2: Install Firebase Crashlytics Dependencies

1. **Install React Native Firebase Modules:**

   ```bash
   npm install @react-native-firebase/app @react-native-firebase/crashlytics
   ```

2. **For iOS:**

   - Navigate to the `ios` directory and install the CocoaPods dependencies:

   ```bash
   cd ios
   pod install
   cd ..
   ```

### Step 3: Configure Firebase Crashlytics

#### Android Configuration

1. **Update `android/build.gradle`:**

   - Add the Firebase and Crashlytics classpaths:

   ```gradle
   buildscript {
       dependencies {
           classpath 'com.google.gms:google-services:4.3.15'
           classpath 'com.google.firebase:firebase-crashlytics-gradle:2.9.8'
       }
   }
   ```

2. **Update `android/app/build.gradle`:**

   - Apply the Google services and Crashlytics plugins:

   ```gradle
   apply plugin: 'com.google.gms.google-services'
   apply plugin: 'com.google.firebase.crashlytics'
   ```

   - Ensure the following dependencies are included:

   ```gradle
   dependencies {
       implementation 'com.google.firebase:firebase-crashlytics-ktx'
   }
   ```

3. **Enable ProGuard for Crashlytics (Optional):**

   - If using ProGuard, add these rules in `proguard-rules.pro`:

   ```pro
   -keepattributes SourceFile,LineNumberTable
   -keep class * { *; }
   -dontwarn okhttp3.**
   ```

#### iOS Configuration

1. **Update `Podfile`:**

   - Ensure the Firebase Crashlytics pod is included:

   ```ruby
   pod 'Firebase/Core'
   pod 'Firebase/Crashlytics'
   ```

2. **Add Run Script for Crashlytics:**

   - In Xcode, go to your project settings, navigate to `Build Phases`, and add a new "Run Script Phase" with the following script:

   ```bash
   "${PODS_ROOT}/FirebaseCrashlytics/run"
   ```

### Step 4: Initialize Crashlytics in React Native

1. **Enable Crashlytics in your App:**

   - Import and initialize Firebase Crashlytics in your app entry point (`index.js` or `App.js`):

   ```javascript
   import crashlytics from '@react-native-firebase/crashlytics';

   crashlytics().log('App started');
   ```

2. **Optional: Force a Test Crash**

   - You can force a test crash to ensure Crashlytics is properly configured:

   ```javascript
   crashlytics().crash();
   ```

### Step 5: Verify Integration

After running your app and triggering any crashes, check the Firebase Console under "Crashlytics" to verify that the crashes are reported correctly.

### Notes

- **Release vs. Debug:** Crashlytics typically logs data from release builds. Make sure to test with a release build for accurate results.
- **ProGuard/R8 Configuration:** Ensure your ProGuard/R8 settings are correctly configured to avoid issues with obfuscation.

By following these steps, you should have Firebase Crashlytics integrated and configured in your React Native project. This will help you monitor app stability and resolve issues more effectively.

---

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
