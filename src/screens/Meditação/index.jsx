/**
 * @format
 */

 import { AppRegistry } from 'react-native';
 import App from './../Meditação/App';
 import { name as appName } from './../../../app.json';

 export default function Medita() {
  return (
    <App />
  );
}
 
 AppRegistry.registerComponent(appName, () => App);