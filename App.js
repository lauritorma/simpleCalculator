import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  const addPressed = () => {
    setResult(parseInt(first) + parseInt(second))
  }

  const reductPressed = () => {
    setResult(first - second)
  }
  
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1, margin:10}}
      keyboardType={"number-pad"}
      onChangeText={first => setFirst(first)}
      value={first}
      />

      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1, margin:10}}
      keyboardType={"number-pad"}
      onChangeText={second => setSecond(second)}
      value={second}
      />
     
     <View style={{flex:0, flexDirection: 'row', alignItems: 'center'}}>
     <View style={{flex: 0.2, margin: 10}}>
     <Button
      title='+'
      onPress={addPressed}
      />
      </View>
      <View style={{flex: 0.2, margin: 10}}>
      <Button
      title='-'
      onPress={reductPressed}
      />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
