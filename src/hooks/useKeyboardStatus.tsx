import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

type UseKeyboardStatusHook = {
  keyboardVisible: boolean;
  dismissKeyboard: () => void;
};

const useKeyboardStatus = (): UseKeyboardStatusHook => {
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const handleKeyboardShow = () => {
    setKeyboardVisible(true);
  };

  const handleKeyboardHide = () => {
    setKeyboardVisible(false);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return {keyboardVisible, dismissKeyboard};
};

export default useKeyboardStatus;
