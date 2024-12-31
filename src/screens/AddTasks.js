import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, Alert} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';

function AddTasks() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const navigation = useNavigation();

  const handleAdd = () => {
    const firstPair = [uuid.v4(), value1];
    const secondPair = [uuid.v4(), value2];
    const thirdPair = [uuid.v4(), value3];
    try {
      AsyncStorage.multiSet([firstPair, secondPair, thirdPair]);
      console.log('successfully added items');
      Alert.alert('successfully added items');
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Image
        source={require('../assets/images/shape.png')}
        style={styles.image}
      />
      <Heading text={'Add Tasks'} />
      <View>
        <Input placeholder={'Task1'} onChangeText={v => setValue1(v)} />
        <Input placeholder={'Task2'} onChangeText={v => setValue2(v)} />
        <Input placeholder={'Task3'} onChangeText={v => setValue3(v)} />
      </View>
      <Button
        variantType={'primary'}
        buttonText={'Add Tasks'}
        onPress={handleAdd}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {},
});

export default AddTasks;
