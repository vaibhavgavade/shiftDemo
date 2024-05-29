//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Test = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const employee = {
    name: 'vaibhav',
    impID: '0040QN',
    companyName: 'IBM',
    location: {
      city: 'Mumbai',
      near: 'Mind Space',
      Village: 'Airoli',
    },
  };

  const {
    name,
    location: {Village, near, city},
  } = employee;
  console.log(Village, near, city);

  console.log('Component rendered');
  return <View style={styles.container} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Test;
