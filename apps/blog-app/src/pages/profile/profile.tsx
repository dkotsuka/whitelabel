import {Button, Text, View} from 'react-native';

export const ProfileScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  return (
    <View>
      <Text>This is {route.params?.name}'s profile</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
