import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { installReactHook } from 'react-native/Libraries/Performance/Systrace';

export default function App() {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  

  const addPressed = () => {
    if (first.length == 0 || second.length == 0) {
      alert("Cannot be null")
    }
    else{
    setResult(parseInt(first) + parseInt(second))
    setHistory([...history, {key: first + '+' + second + '=' + (parseInt(first) + parseInt(second))}])
    setFirst('');
    setSecond('');
    }
  }

  const reductPressed = () => {
    if (first.length == 0 || second.length == 0) {
      alert("Cannot be null")
    }
    else{
    setResult(first - second)
    setHistory([...history, {key: first + '-' + second + '=' + (first - second)}])
    setFirst('');
    setSecond('');
    }
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
      <View style={{flex: 1, margin: 10, justifyContent: 'center'}}>
      <Text>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) =>
        <Text>{item.key}</Text>
       }
      />
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
    marginTop: "50%"
  },
}); 

