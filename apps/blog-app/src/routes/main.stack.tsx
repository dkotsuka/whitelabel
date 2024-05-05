import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../pages/home/home';
import {ProfileScreen} from '../pages/profile/profile';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
