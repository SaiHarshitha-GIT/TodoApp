import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Heading from '../components/Heading';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

function Dashboard() {
  const [tasks, setTasks] = useState([[]]);
  const navigation = useNavigation();

  useEffect(() => {
    const getAllItems = async () => {
      let keys = [];
      let values;
      try {
        keys = await AsyncStorage.getAllKeys();
        values = await AsyncStorage.multiGet(keys);
        const data = values
          .map(([key, value]) => ({[key]: value}))
          .map(item => {
            const [id, value] = Object.entries(item)[0];
            return {id, value};
          });

        console.log('data', data);
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

  const getFormattedTime = () => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  };

  const handleDelete = id => {
    const newList = tasks.filter(list => list.id != id);
    setTasks(newList);
  };

  const handleDeleteAll = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Deleted all Tasks...');
      setTasks([]);
    } catch (error) {
      Alert.alert('error deleting the items');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={require('../assets/images/shape.png')} />
        <Image
          source={require('../assets/images/userPicture.png')}
          style={styles.userPicture}
        />
        <Text style={styles.welcomeText}>Welcome Sai Harshitha</Text>
      </View>
      <View style={styles.clockBlock}>
        <Text style={styles.greetingText}>Good Afternoon</Text>
        <Text style={styles.timeText}>{getFormattedTime()}</Text>
      </View>
      <View style={styles.tasksBlock}>
        <Heading text={'Task list'} otherStyles={{textAlign: 'left'}} />
        <Button
          variantType={'primary'}
          onPress={handleDeleteAll}
          buttonText={'Delete All'}
        />
        <View style={styles.taskListBlock}>
          <View style={styles.taskButtonContainer}>
            <Text>Daily Task</Text>
            <TouchableHighlight onPress={() => navigation.navigate('AddTasks')}>
              <Image
                source={require('../assets/images/Vector.png')}
                style={styles.addButton}></Image>
            </TouchableHighlight>
          </View>
          <View>
            <FlatList
              data={tasks}
              showsVerticalScrollIndicator={true}
              style={styles.flatList}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Pressable
                  style={styles.listItemContainer}
                  onPress={() => handleDelete(item.id)}
                  key={item.id}>
                  <Text style={styles.listItem}>{item.value}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#50C2C9',
    width: '100%',
    height: 380,
  },
  userPicture: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },

  welcomeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 30,
  },
  timeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 48,
    textAlign: 'center',
  },
  greetingText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'right',
    marginRight: 24,
  },
  clockBlock: {
    paddingVertical: 24,
  },
  taskListBlock: {
    borderWidth: 3,
    borderColor: 'grey',
    padding: 25,
    margin: 24,
    borderRadius: 8,
    //marginBottom: 40,
  },
  tasksBlock: {
    //marginBottom: 40,
  },
  addButton: {
    width: 22,
    height: 22,
  },
  taskButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  flatList: {
    //height: 120,
  },
  listItem: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },

  listItemContainer: {
    paddingVertical: 5,
  },
});

export default Dashboard;
