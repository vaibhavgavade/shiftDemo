// src/components/Loader.tsx
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import LoaderGreen from '../../assets/LoaderGreen';
import colors from '../../styles/colors';

interface LoaderType {
  isRed?: boolean;
}

const Loader: React.FC<LoaderType> = ({isRed = false}) => {
  return (
    <View style={styles.container}>
      {isRed ? <ActivityIndicator style={styles.loader} /> : <LoaderGreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 10,
    width: 10,
    color: colors.greenTint1,
  },
});

export default Loader;
