import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Header from './compoments/Header'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Header/>
          </View>
<View style={{flex:1}}>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
