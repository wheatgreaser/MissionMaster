import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';


import { useEffect, useState } from 'react';
import Login from './Login';

export default function Homescreen({navigation}) {
  const [loaded, setLoaded] = useState(false);

  function LoginPage(){
    navigation.navigate('Login');
  }
  function SignupPage(){
    navigation.navigate('Signup');
  }

  useEffect(() => {
    Font.loadAsync({
      'coolfont': require('./assets/fonts/coolfont.ttf'),
    }).then(() => setLoaded(true));
  }, []);
  return loaded ? (
    <View style={styles.container}>
      <Text style={styles.HeadingBoy}>Mission Master</Text>
      <View style = {styles.CoolStyle}>
        <TouchableOpacity
                    style={{
                      backgroundColor: 'yellow',
                      padding: 10,
                      borderRadius: 5,
                      top: 100
                    }}
                    onPress={LoginPage}
                  >
                    <Text style={{ color: 'black', fontFamily: 'coolfont', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CoolStyle}>
        <TouchableOpacity
                  style={{
                    backgroundColor: 'yellow',
                    padding: 10,
                    borderRadius: 5,
                    top: 100
                  }}
                  onPress={SignupPage}
                >
                  <Text style={{ color: 'black', fontFamily: 'coolfont', fontSize: 20 }}>Signup</Text>
          </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
    
  },
  HeadingBoy:{
    padding: '50',
    fontSize: 30,
    fontFamily: 'coolfont',
    color: 'green'
  },
  CoolStyle:{
    padding: 10
  }
});
