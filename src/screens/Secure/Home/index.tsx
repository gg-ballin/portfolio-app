import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {
  navigation?: any;
}
const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
