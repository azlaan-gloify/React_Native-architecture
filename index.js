/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import crashlytics from '@react-native-firebase/crashlytics';

// Initialize Crashlytics
crashlytics().log('App mounted.');

AppRegistry.registerComponent(appName, () => App);
