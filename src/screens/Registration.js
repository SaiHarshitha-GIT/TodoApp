import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import * as Keychain from 'react-native-keychain';

function Registration() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleRegistration = async () => {
    try {
      const credentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (credentials) {
        const token = await credentials.user.getIdToken();

        console.log('User created', credentials);
        console.log('Token retrieved:', token);
        console.log('Navigating to Dashboard...');
        navigation.navigate('Dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image
          source={require('../assets/images/shape.png')}
          style={styles.image}
        />
        <Heading text={'Welcome to Onboard! '} />
        <Text style={styles.para}>{'Let’s help to meet up your tasks.'}</Text>
        <Input
          placeholder={'Enter your full name'}
          onChangeText={name => setFullName(name)}
        />
        <Input
          placeholder={'Enter your Email'}
          onChangeText={e => setEmail(e)}
        />
        <Input
          placeholder={'Enter Password'}
          secureTextEntry={true}
          onChangeText={p => setPassword(p)}
        />
        <Input placeholder={'Confirm password'} secureTextEntry={true} />
        <Button
          variantType={'primary'}
          buttonText={'Register'}
          onPress={handleRegistration}
        />
        <View
          style={{
            flexDirection: 'row',
            //justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            marginLeft: 23,
            //marginRight: 27,
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              marginRight: 5,
            }}>
            Already have an account ?
          </Text>
          <Button
            variantType={'secondary'}
            buttonText={'SignIn'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
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
    textAlign: 'center',
  },
});

export default Registration;
