import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Txt({children, style, ...restProps}) {
  return (
    <Text style={[styles.txt, style]} {...restProps}>
      {children}
    </Text>
  );
}

export default Txt;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});
