import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>n. sakthi avinash</Text>
      <Text style={styles.regNoText}>Reg. No.: 22mia1105</Text>
      <Button title="Click Me!" onPress={() => alert('Button Pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  regNoText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
