import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Txt from './Txt';

function DetailedInfo({sunrise, sunset, windspeed}) {
  return (
    <View style={styles.container}>
      <StyledContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise 🌞</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset 🌥</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windspeed} km/h</StyledValue>
        <StyledLabel>Wind Speed 💨</StyledLabel>
      </StyledContainer>
    </View>
  );
}

export default DetailedInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#0000005c',
  },
});

function StyledContainer({children}) {
  return <View style={{alignItems: 'center'}}>{children}</View>;
}

function StyledLabel({children}) {
  return <Txt style={{fontSize: 15}}>{children}</Txt>;
}

function StyledValue({children}) {
  return (
    <Txt style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
      {children}
    </Txt>
  );
}
