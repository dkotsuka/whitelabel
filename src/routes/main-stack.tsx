import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../pages/home/home';
import {SettingsScreen} from '../pages/settings/settings';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
