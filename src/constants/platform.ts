/* eslint-disable no-magic-numbers */
import {Platform, StatusBar, Dimensions, PixelRatio} from 'react-native';
import {Header} from '@react-navigation/stack';

export const ROOT = 'root';

export const OSVersion = Platform.Version;

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const NEW_PERMISSIONS_MAYOR_VERSION = 13;
const OsMayorVersion = isAndroid
  ? OSVersion
  : parseInt((OSVersion as string).split('.')[0], 10);

// TODO: use apple app id and package name to redirect to the app detail
export const MARKET_URL = isIos
  ? 'itms-apps://?action=discover&referrer=app-store'
  : 'http://market.android.com/apps/';
const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;
export const HEADER_HEIGHT = ((Header as unknown) as {HEIGHT: number}).HEIGHT;
const NATIVE_BAR_CURRENT_HEIGHT = StatusBar.currentHeight || 0;
const IOS_STATUS_BAR_HEIGHT = Platform.OS === "ios" && (WINDOW_HEIGHT > 800 || WINDOW_WIDTH > 800) ? 47 : 20;
export const STATUS_BAR_HEIGHT = isIos
  ? IOS_STATUS_BAR_HEIGHT
  : NATIVE_BAR_CURRENT_HEIGHT;
export const STATUS_BAR_IS_FIXED = isAndroid && OSVersion < 21;
export const ACTION_BAR_HEIGHT = STATUS_BAR_IS_FIXED ? 74 : 64;
export const TABBAR_HEIGHT = 50;
export const OLD_PERMISSIONS_LOGIC =
  isIos && OsMayorVersion < NEW_PERMISSIONS_MAYOR_VERSION;


export const DRAWER_WIDTH = WINDOW_WIDTH * 0.9;

const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;

export const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;

export const VIEWPORT_HEIGHT =
  WINDOW_HEIGHT -
  TABBAR_HEIGHT -
  ACTION_BAR_HEIGHT -
  (STATUS_BAR_IS_FIXED ? STATUS_BAR_HEIGHT : 0);
// Height iphone notch = 896
// Height iphone small = 667
// Height android 5' = 668
export const IS_SMALL_DEVICE = SCREEN_HEIGHT <= 732;
export const IS_X = isIos && (SCREEN_HEIGHT > 800 || WINDOW_WIDTH > 800)
export const REFERENCE_WIDTH = 380;
export const REFERENCE_HEIGHT = 650;
const USE_WIDTH =
  WINDOW_WIDTH / REFERENCE_WIDTH < WINDOW_HEIGHT / REFERENCE_HEIGHT;
export const REF_RATIO = USE_WIDTH
  ? WINDOW_WIDTH / REFERENCE_WIDTH
  : WINDOW_HEIGHT / REFERENCE_HEIGHT;

export const refRatioScale = (value: number) => value * REF_RATIO;

export const pixelRatioScale = (value: number) => value * PixelRatio.get();
