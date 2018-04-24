import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

const App = () =>
  (
    <View style={styles.container}>
      <Text>
        Welcome to React Native!
      </Text>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
