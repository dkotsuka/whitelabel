import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {GestureDetectorProvider} from 'react-native-screens/gesture-handler';

import {MainStack} from './main.stack';

export const Root = () => {
  return (
    <GestureHandlerRootView>
      <GestureDetectorProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </GestureDetectorProvider>
    </GestureHandlerRootView>
  );
};
