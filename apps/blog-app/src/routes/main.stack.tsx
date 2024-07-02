import {CountryScreen} from '../pages/country/country';
import {HomeScreen} from '../pages/home/home';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Country"
        component={CountryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
