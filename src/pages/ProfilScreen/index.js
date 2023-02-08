import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfilScreen</Text>
    </View>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 50,
  },
});
