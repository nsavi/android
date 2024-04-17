import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  nameText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Im N Sakthi Avinash</Text>
      <Button title="Click Me!" onPress={() => console.log('Button pressed!')} />
    </View>
  );
};

export default App;
