import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});
