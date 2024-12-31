import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function Heading({text, otherStyles}) {
  return <Text style={[styles.heading, otherStyles]}>{text}</Text>;
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    color: '#00000',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 16,
  },
});
