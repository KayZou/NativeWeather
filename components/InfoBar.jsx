import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Txt from './Txt';
import Clock from './Clock';
import {useNavigation} from '@react-navigation/native';

function InfoBar({temperature, interpretation, city, dailyWeather}) {
  const nav = useNavigation();
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>
      <View style={styles.city}>
        <Txt style={styles.txtCity}>{city}</Txt>
      </View>
      <View style={styles.interpretation}>
        <Txt style={styles.txtInter}>{interpretation.label}</Txt>
      </View>
      <View style={styles.temp}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('Forecasts', {city, ...dailyWeather});
          }}>
          <Txt style={styles.txtTemp}>{temperature}°c</Txt>
        </TouchableOpacity>
        <Image
          source={{
            uri: interpretation.imageURI,
          }}
          style={styles.image}
        />
      </View>
    </>
  );
}

export default InfoBar;

const styles = StyleSheet.create({
  clock: {
    alignItems: 'flex-end',
  },
  city: {
    flex: 1,
  },
  txtCity: {
    fontSize: 25,
  },
  interpretation: {
    alignSelf: 'flex-end',
    transform: [{rotate: '-90deg'}],
  },
  temp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  txtTemp: {
    fontSize: 100,
  },
  txtInter: {
    fontSize: 20,
  },
  image: {
    width: 80,
    height: 70,
  },
});
