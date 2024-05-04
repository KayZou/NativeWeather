import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Txt from './Txt';

import {getCurrentTime} from '../utils/DateTime';

function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Txt style={styles.txt}>{time}</Txt>
    </View>
  );
}

export default Clock;

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});
