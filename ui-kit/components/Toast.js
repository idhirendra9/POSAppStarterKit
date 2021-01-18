import {ToastAndroid, AlertIOS} from 'react-native';
import {Environment} from '../config';
export default (message = '') => {
  if (Environment.isAndroid) {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } else {
    alert(message);
  }
};
