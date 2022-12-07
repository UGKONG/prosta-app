import type {Dispatch, SetStateAction} from 'react';
import type {Peripheral} from 'react-native-ble-manager';

export type SnsPlatform = 'KAKAO' | 'NAVER' | 'FACEBOOK';
export type AppPlatform = 'LUNA' | 'PROSTA' | 'VENA';
export type Device = Peripheral;
export type User = {
  USER_ID?: number;
  AUTH_ID: string;
  USER_NAME: string;
  SNS_PLATFORM: SnsPlatform;
  APP_PLATFORM: AppPlatform;
};
export type SetState<T> = Dispatch<SetStateAction<T>>;
export type ConnectedDevice = {id: string; name: string};
export type BluetoothDataRequestType =
  | 'exit'
  | 'batteryV'
  | 'init'
  | 'battery'
  | 'off'
  | 'on'
  | 'power'
  | 'mode'
  | 'timer';
export type BluetoothDataRequest = {
  type: BluetoothDataRequestType;
  isAuto?: boolean;
};
export type ActiveDevice = {
  id: string;
  name: string;
  battery: number;
  isPowerConnect: boolean;
  detail: Peripheral;
  isOn: boolean;
};
export type MyDevice = {
  id: string;
  name: string;
};
export type RemoteState = {
  mode: number;
  power: number;
  timer: number;
};
export type Store = {
  remoteState: RemoteState | null;
  isBluetoothReady: boolean;
  bluetoothDataRequest: BluetoothDataRequest | null;
  activeDevice: ActiveDevice | null;
  isModal: boolean;
  isMenu: boolean;
  isLogin: null | User;
  navigation: any;
  loginRequired: boolean;
  myDeviceList: MyDevice[];
  possibleDeviceName: AppPlatform;
  lang: 'ko' | 'en';
  setState: (type: string, payload: any) => void;
};
export type LoginData = {id: string; pw: string};
export type DayObject = {
  dateString: string;
  timestamp: number;
  year: number;
  month: number;
  day: number;
};
export type SnsLoginList = {
  id: number;
  name: SnsPlatform;
  img: string;
  color: string;
  onPress: () => void;
};
export type SnsLoginData = {
  appPlatform: AppPlatform;
  snsPlatform: SnsPlatform;
  id: string;
  name: string;
};
export type NaverLoginPlatformKey = {
  kConsumerKey: string;
  kConsumerSecret: string;
  kServiceAppName: string;
  kServiceAppUrlScheme?: string;
};
export type ConvertString = {
  stringToBytes: (str: string) => number[];
};
export type SendDataInfo = {
  id: string;
  serviceUUID: string;
  characteristicUUID?: string;
  value?: number[];
};
export type AsyncStorageError = Error | null | undefined;
export type AsyncStorageResult = string | null | undefined;
export type BluetoothDataResponse = {
  characteristic: string;
  peripheral: string;
  service: string;
  value: any;
};
export type Use = {
  USE_ID: number;
  USER_ID: number;
  APP_PLATFORM: AppPlatform;
  DEVICE_ID: string;
  DEVICE_NAME: string;
  USE_MODE: number;
  USE_POWER: number;
  USE_TIMER: number;
  USE_BATTERY: number;
  USE_DATE: string;
};
export type CalendarSelectDate = {
  [key: string]: {
    selected?: boolean;
    color?: string;
    startingDay?: boolean;
    endingDay?: boolean;
    textColor?: string;
    marked?: boolean;
    dotColor?: string;
  };
};
