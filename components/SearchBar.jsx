import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function SearchBar({onSubmit}) {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    onSubmit(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Search for a city..."
        style={styles.searchBar}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    margin: 10,
    padding: 10,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
