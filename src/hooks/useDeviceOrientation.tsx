import {useState, useEffect} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

enum Orientation {
  Portrait = 'portrait',
  Landscape = 'landscape',
  Unknown = 'unknown',
}

type UseDeviceOrientationHook = {
  orientation: Orientation;
};

const useDeviceOrientation = (): UseDeviceOrientationHook => {
  const [orientation, setOrientation] = useState<Orientation>(
    Orientation.Unknown,
  );

  const handleOrientationChange = ({window}: {window: ScaledSize}) => {
    if (window.width > window.height) {
      setOrientation(Orientation.Landscape);
    } else {
      setOrientation(Orientation.Portrait);
    }
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  return {orientation};
};

export default useDeviceOrientation;
