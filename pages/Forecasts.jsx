import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';
import ForecastItem from '../components/ForecastItem';

import Txt from '../components/Txt';
import {useRoute} from '@react-navigation/native';
import {DAYS, getWeatherInterpretation} from '../utils/weather_utils';

function Forecasts({}) {
  const {params} = useRoute();

  return (
    <>
      <Header city={params.city} />
      <View style={{marginTop: 50}}>
        {params.time.map((time, index) => {
          const weatherCode = params.weathercode[index];
          const image = getWeatherInterpretation(weatherCode).imageURI;
          const temp = params.temperature_2m_max[index];
          const date = new Date(time);
          const dayOfTheWeek = DAYS[date.getDay()];
          const formatedDate = date.toLocaleDateString('default', {
            day: 'numeric',
            month: 'numeric',
          });
          return (
            <ForecastItem
              key={index}
              {...time}
              image={image}
              temp={temp.toFixed(0)}
              day={dayOfTheWeek}
              date={formatedDate}
            />
          );
        })}
      </View>
    </>
  );
}

export default Forecasts;

const styles = StyleSheet.create({});
