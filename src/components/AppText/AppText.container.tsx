import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';

const fontWeights: Record<string, string> = {
  regular: 'Regular',
  bold: 'Bold',
  '100': 'ExtraLight',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'ExtraBold',
};

const defaultStyles: StyleProp<TextStyle> = {
  fontWeight: 'normal',
};

const AppText: React.FC<TextProps> = ({children, style, ...rest}) => {
  const {fontWeight = '400'} = StyleSheet.flatten(style || {});
  const fontFamily = `Oxanium-${fontWeights[fontWeight]}`;
  return (
    <Text {...rest} style={[styles.text, {fontFamily}, style, defaultStyles]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
