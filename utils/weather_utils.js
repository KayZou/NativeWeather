export const WEATHER_INTERPRETATIONS = [
  {
    codes: [0],
    imageURI:
      'https://static.vecteezy.com/system/resources/thumbnails/013/743/930/small/sun-or-brightness-icon-png.png',
    label: 'Clear Sky',
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: 'Cloudy',
    imageURI:
      'https://i.pinimg.com/originals/19/8d/ae/198daeda14097d45e417e62ff283f10e.png',
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: 'Rainy',
    imageURI:
      'https://static.vecteezy.com/system/resources/thumbnails/009/664/902/small/dark-cloud-raining-free-free-png.png',
  },
  {
    codes: [71, 73, 75, 77],
    label: 'Snowy',
    imageURI:
      'https://freepngimg.com/download/cloud/61864-forecasting-weather-snow-cloud-snowy-free-frame.png',
  },
  {
    codes: [95, 96, 99],
    label: 'Thunderstorm',
    imageURI:
      'https://static.vecteezy.com/system/resources/previews/033/493/810/original/storm-cloud-object-isolated-on-transparent-background-pollution-cloud-generative-ai-png.png',
  },
];

export function getWeatherInterpretation(code) {
  return WEATHER_INTERPRETATIONS.find(interpretation => {
    return interpretation.codes.includes(code);
  });
}

export const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
