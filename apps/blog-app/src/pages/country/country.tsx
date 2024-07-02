import {StatusBar, Text, View} from 'react-native';

import {SearchBar} from '../../../../../design/components/SearchBar/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
export const CountryScreen = ({route}: any) => {
  const colors = ['#C2D3CD', '#EEE'];
  const secondaryColor = '#083D77';
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors[0]} />
      <LinearGradient
        colors={colors}
        style={{
          flex: 1,
          padding: 16,
        }}>
        <SearchBar placeholder="Digite um lugar" onSearch={console.log} />
      </LinearGradient>
    </>
  );
};
