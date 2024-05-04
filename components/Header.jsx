import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Txt from './Txt';
import {useNavigation} from '@react-navigation/native';

function Header({city}) {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
          style={styles.btn}>
          <Txt>{'<'}</Txt>
        </TouchableOpacity>
      </View>
      <View style={styles.headerTxt}>
        <Txt> {city.toUpperCase()} </Txt>
        <Txt style={(styles.subtitle, {fontSize: 16})}>7 Days Forecast</Txt>
      </View>
      <View />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subtitle: {},
  headerTxt: {
    alignItems: 'center',
  },
  btn: {
    width: 10,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
});
