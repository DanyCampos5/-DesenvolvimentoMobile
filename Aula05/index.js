import { registerRootComponent } from 'expo';

import home2 from './src/pages/home2';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(home2);
