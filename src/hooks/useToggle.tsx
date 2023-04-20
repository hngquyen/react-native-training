import {useState} from 'react';

type UseToggleHook = [
  boolean,
  {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
  },
];

const useToggle = (initialValue: boolean): UseToggleHook => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return [
    value,
    {
      toggle,
      setTrue,
      setFalse,
    },
  ];
};

export default useToggle;
