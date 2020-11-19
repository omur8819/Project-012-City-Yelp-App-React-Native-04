/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/Ruter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
