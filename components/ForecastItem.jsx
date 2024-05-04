import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Txt from './Txt';

function ForecastItem({image, day, date, temp}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Txt style={styles.day}> {day} </Txt>
      <Txt style={styles.date}> {date} </Txt>
      <Txt style={styles.temp}> {temp} °c</Txt>
    </View>
  );
}

export default ForecastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {},
  date: {},
  temp: {
    textAlign: 'right',
    fontWeight: 'bold',
    minWidth: 50,
  },
});
