import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSubheading: {
    color: theme.colors.textSubheading,
  },
  colorPlaceholder: {
    color: theme.colors.textPlaceholder,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeAuxiliary: {
    fontSize: theme.fontSizes.auxiliary,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'subheading' && styles.colorSubheading,
    color === 'placeholder' && styles.colorPlaceholder,
    fontSize === 'auxiliary' && styles.fontSizeAuxiliary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;