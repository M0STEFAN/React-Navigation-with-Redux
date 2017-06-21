import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginStatusMessage />
        <AuthButton />
      </View>
    );
  }
};

// MainScreen.navigationOptions = {
//   title: 'Home Screen11',
//   headerMode: 'screen'
// };

MainScreen.navigationOptions = ({ navigation, sceneProps }) => ({
  title: "Home Screen",
  headerRight: <Button title="Learn More"
                       color="#841584" />,
  headerLeft: <Button title="Learn More"
                      color="#841584" />,
  header: null
});

export default MainScreen;
