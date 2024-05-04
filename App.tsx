import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MeteoApi} from './api/weather';

import Home from './pages/Home';
import Forecasts from './pages/Forecasts';

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: 'transparent',
  },
};

function App() {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'GeoLocation permission',
          message:
            'We need access to your geolocation ' +
            'so you can check teh weather.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        getCurrentUserLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);

  const getCurrentUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        // console.log('lat:', latitude, 'long:', longitude);
      },
      error => Alert.alert('Error', error.message || error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  async function fetchWeatherByLocation() {
    const res = await MeteoApi.getWeather(
      location.latitude,
      location.longitude,
    );
    setWeather(res);
    // console.log(res);
  }

  async function getCityByLocation() {
    const data = await MeteoApi.getCity(location.latitude, location.longitude);
    setCity(data.address.city);
    // console.log('city:', city);
  }

  async function fetchCityByCords(city) {
    setCity(city);
    const {latitude, longitude} = await MeteoApi.fetchCityByName(city);
    setLocation({latitude: latitude, longitude: longitude});
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherByLocation();
      getCityByLocation();
    }
  }, [location]);

  return (
    <>
      <NavigationContainer theme={navTheme}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1593978301851-40c1849d47d4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
          imageStyle={{opacity: 0.6}}>
          {weather && (
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false, animation: 'fade'}}>
              <Stack.Screen name="Home">
                {props => (
                  <Home
                    {...props}
                    weather={weather}
                    city={city}
                    onSubmitSearch={fetchCityByCords}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Forecasts" component={Forecasts} />
            </Stack.Navigator>
          )}
        </ImageBackground>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'black',
  },
});

// meteo_url = https://api.open-meteo.com/v1/forecast?latitude=30.3912&longitude=-9.51614733&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=auto
