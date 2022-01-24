// eslint-disable-next-line no-unused-vars
import {TabNavigatorProps} from 'interfaces/tabNavigatorInterface';
import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import Colors from '../../../theme/colors';
import SVG from '../../../assets/index';

import styles from './styles';

const CustomTabBar = ({navigation, state}: TabNavigatorProps) => {
  const [current, setCurrent] = useState(0);

  const navigationHandler = (number: number, path: string) => {
    setCurrent(number);
    navigation.navigate(path);
  };

  useEffect(() => {
    const {index}: any = state;
    setCurrent(index);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableWithoutFeedback onPress={() => navigationHandler(0, 'Home')}>
          <View style={styles.iconContainer}>
            {current === 0 ? SVG.FirstTabFocused : SVG.FirstTab}
            <Text
              style={[
                {
                  color:
                    current === 0
                      ? Colors.Primary.darkTeal
                      : Colors.TextColors.tertiary,
                },
                styles.screenName,
              ]}>
              Home
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigationHandler(1, 'Tasks')}>
          <View style={styles.iconContainer}>
            {current === 1 ? SVG.SecondTabFocused : SVG.SecondTab}
            <Text
              style={[
                {
                  color:
                    current === 1
                      ? Colors.Primary.darkTeal
                      : Colors.TextColors.tertiary,
                },
                styles.screenName,
              ]}>
              Tasks
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigationHandler(2, 'Notifications')}>
          <View style={styles.iconContainer}>
            {current === 2 ? SVG.ThirdTabFocused : SVG.ThirdTab}

            <Text
              style={[
                {
                  color:
                    current === 2
                      ? Colors.Primary.darkTeal
                      : Colors.TextColors.tertiary,
                  top: 1,
                },
                styles.screenName,
              ]}>
              Notifications
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigationHandler(3, 'FarmTools')}>
          <View style={styles.iconContainer}>
            {current === 3 ? SVG.FourthTabFocused : SVG.FourthTab}

            <Text
              style={[
                {
                  color:
                    current === 3
                      ? Colors.Primary.darkTeal
                      : Colors.TextColors.tertiary,
                },
                styles.screenName,
              ]}>
              FarmTools
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CustomTabBar;
