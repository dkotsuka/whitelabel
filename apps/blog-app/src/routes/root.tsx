import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './main.stack';

export const Root = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
