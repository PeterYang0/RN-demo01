import React from 'react';
import Toast from 'react-native-easy-toast';

export default class ToastManager {
  /**
   * 静态toast
   */
  static toast;

  /**
   * 显示toast
   * showToast
   * @param text
   * @param duration
   * @param callback
   */
  static show(text, duration, callback) {
    this.toast && this.toast.show(text, duration, callback);
  }

  /**
   * 关闭toast
   * closeToast
   * @param duration
   */
  static close(duration) {
    this.toast && this.toast.close(duration);
  }

  /**
   * 网络错误
   */
  static netError() {
    this.show('网络错误，请稍后重试！');
  }
}

export class ToastComponent extends React.Component {
  /**
   * 组件被移除的时候
   */
  componentWillUnmount() {
    ToastManager.toast = null;
  }

  render() {
    // return <Toast ref={e => (ToastManager.toast = e)} />;
    return (
      <Toast
        ref={e => (ToastManager.toast = e)}
        positionValue={200}
        fadeInDuration={300}
        fadeOutDuration={300}
        opacity={0.7}
        textStyle={{color: '#000'}}
      />
    );
  }
}
