import {View, TextInput} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchBarProps {
  onSearch: (search: string) => void;
  placeholder?: string;
}

export const SearchBar = ({onSearch, placeholder}: SearchBarProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        paddingLeft: 12,
      }}>
      <Icon name="search" size={24} color="gray" />
      <TextInput
        style={{
          flex: 1,
          marginLeft: 8,
          fontSize: 16,
        }}
        placeholder={placeholder}
        onChangeText={onSearch}
        returnKeyType="search"
        keyboardType="web-search"
      />
      <IconButton
        icon="image-filter-center-focus-weak"
        size={24}
        iconColor="gray"
      />
    </View>
  );
};
