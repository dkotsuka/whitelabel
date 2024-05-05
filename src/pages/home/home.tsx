import {Button, Text, View} from 'react-native';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Settings', {name: 'Jane'})}
      />
      <Button title="HERE" />
    </View>
  );
};
