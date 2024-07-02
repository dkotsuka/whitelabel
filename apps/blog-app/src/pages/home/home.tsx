import {useState} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';

type Event = NativeSyntheticEvent<TextInputSubmitEditingEventData>;

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const [country, setCountry] = useState('');

  const navigateToCountry = (country: string) => {
    navigation.navigate('Country', {country});
  };

  const onSubmit = (event: Event) => {
    navigateToCountry(event.nativeEvent.text);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 32,
          textAlign: 'center',
          marginBottom: 20,
        }}>
        {'Qual país você\ngostaria de conhecer?'}
      </Text>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          borderRadius: 64,
          margin: 16,
        }}>
        <TextInput
          style={{flex: 1, paddingHorizontal: 24, fontSize: 24}}
          keyboardType="web-search"
          onSubmitEditing={onSubmit}
          onChangeText={setCountry}
          value={country}
        />
        <IconButton
          icon="magnify"
          size={32}
          onPress={() => navigateToCountry(country)}
        />
      </View>
    </View>
  );
};
