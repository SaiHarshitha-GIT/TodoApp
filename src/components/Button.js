import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

function Button({variantType, buttonText, onPress, buttonStyles}) {
  return (
    <TouchableOpacity
      style={
        variantType === 'primary'
          ? [styles.primaryButton, buttonStyles]
          : [styles.secondaryButton, buttonStyles]
      }
      onPress={onPress}>
      <Text
        style={
          variantType === 'primary' ? styles.primaryText : styles.secondaryText
        }>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    width: '90%',
    backgroundColor: '#50C2C9',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginLeft: 23,
    marginRight: 27,
    alignSelf: 'center',
  },

  secondaryButton: {},

  primaryText: {
    color: '#ffff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },

  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    //lineHeight: '157%',
    color: '#50C2C9',
  },
});

export default Button;
