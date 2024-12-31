import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Heading from '../components/Heading';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

function Splash() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image
          source={require('../assets/images/shape.png')}
          style={styles.shape}
        />
        <Image
          source={require('../assets/images/todoImage.png')}
          style={styles.image}
        />
        <Heading text={'Gets things with TODos'} />
        <Text style={styles.para}>
          {'Track your daily habits, set goals, and stay motivated.'}
        </Text>
        <Button
          buttonText={'Get Started'}
          variantType={'primary'}
          onPress={() => navigation.navigate('Registration')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 73,
  },

  shape: {
    paddingBottom: 78,
    width: 300,
    height: 270,
  },

  image: {
    width: 254,
    height: 194,
    marginBottom: 65,
    textAlign: 'center',
    alignSelf: 'center',
  },

  para: {
    width: 203,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#00000',
    alignSelf: 'center',
    paddingBottom: 136,
  },
});

export default Splash;
