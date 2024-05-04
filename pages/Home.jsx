import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import InfoBar from '../components/InfoBar';
import DetailedInfo from '../components/DetailedInfo';
import SearchBar from '../components/SearchBar';

import Txt from '../components/Txt';
import {getWeatherInterpretation} from '../utils/weather_utils';

function Home({weather, city, onSubmitSearch}) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode,
  );

  const currentDayWeather = weather.daily;

  return (
    <>
      <View style={styles.infoBar}>
        <InfoBar
          dailyWeather={currentDayWeather}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
          city={city}
        />
      </View>
      <View style={styles.searchBar}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={styles.detailInfo}>
        {currentDayWeather && currentWeather && (
          <DetailedInfo
            sunrise={currentDayWeather.sunrise[0].split('T')[1]}
            sunset={currentDayWeather.sunset[0].split('T')[1]}
            windspeed={currentWeather.windspeed}
          />
        )}
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  infoBar: {
    flex: 2,
  },
  searchBar: {
    flex: 2,
  },
  detailInfo: {
    flex: 1,
  },
});
