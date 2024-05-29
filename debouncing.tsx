//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Debouncing = () => {
  const useDebounceHook = (dValue, delay) => {
    const [debounce, setDebounceValue] = useState(dValue);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(dValue);
      }, delay);
      return () => clearTimeout(handler);
    }, [dValue, delay]);

    return debounce;
  };

  const debounceValue = useDebounceHook(inputValue, 500);
  const [value, changeValue] = useState('');

  let counter = 0;
  const getData = () => {
    console.log('fetch api data...', counter++);
  };
  return (
    <View style={styles.container}>
      <Text>vaibhav</Text>
      {getData()}
      <TextInput
        value={value}
        onChangeText={v => changeValue(v)}
        style={{backgroundColor: '#f0f'}}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
  },
});

//make this component available to the app
export default Debouncing;
