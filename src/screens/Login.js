import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const credentials = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      if (credentials) {
        const idtoken = await credentials.user.getIdToken();
        console.log('Access token is ', idtoken);
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
        <Heading text={'Welcome back '} />
        <Image
          source={require('../assets/images/loginImage.png')}
          style={styles.loginImage}
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
        <View
          style={{
            alignItems: 'center',
            justifycontent: 'center',
            marginHorizontal: 20,
          }}>
          <Button
            variantType={'secondary'}
            buttonText={'Forgot Password?'}
            buttonStyles={{marginBottom: 20}}
          />
          <Button
            variantType={'primary'}
            buttonText={'Login'}
            onPress={handleLogin}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  loginImage: {
    width: 185,
    height: 138,
    alignSelf: 'center',
    marginBottom: 87,
  },
});
export default Login;
