import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input({placeholder, secureTextEntry, onChangeText}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 23,
    marginRight: 27,
    borderColor: 'grey',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: 'Poppins',
    fontSize: 16,
    borderWidth: 1,
    height: 50,
    marginBottom: 30,
  },
});

export default Input;
