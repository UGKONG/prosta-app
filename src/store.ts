import createStore from 'zustand';
import type {Store} from './types';

export default createStore<Store>(set => ({
  remoteState: null,
  isBluetoothReady: false,
  bluetoothDataRequest: null,
  activeDevice: null,
  isModal: false,
  isMenu: false,
  isLogin: null,
  navigation: null,
  loginRequired: false,
  myDeviceList: [],
  possibleDeviceName: 'PROSTA',
  lang: 'ko',
  // lang: 'en',
  setState: (type: string, payload: any) =>
    set((state: Store): Store => ({...state, [type]: payload})),
}));
