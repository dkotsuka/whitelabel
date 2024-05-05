import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './routes/main-stack';

export const Root = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
