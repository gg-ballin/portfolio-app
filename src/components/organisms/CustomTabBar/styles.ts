import {IS_SMALL_DEVICE, SCREEN_WIDTH} from '../../../constants/platform';
import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowColor: Colors.ScaleGrays.neutralGray30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 19,
    zIndex: 10000,
  },
  shadow: {
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  content: {
    backgroundColor: Colors.Common.white,
    elevation: 19,
    zIndex: 10000,
    width: SCREEN_WIDTH,
    bottom: 0,
    left: 0,
    paddingBottom: IS_SMALL_DEVICE ? 15 : 25,
    paddingTop: 17,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    paddingBottom: 2,
  },
  screenName: {
    fontSize: 12,
    marginTop: 5,
  },
});
