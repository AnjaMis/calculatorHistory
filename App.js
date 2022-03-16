import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

export default function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [history, setHistory] = useState([])

  const addition = () => {
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum)
    setHistory([...history, { key: `${num1} + ${num2} = ${sum}` }])
  }

  const subtraction = () => {
    const sub = parseFloat(num1) - parseFloat(num2)
    setResult(sub)
    setHistory([...history, { key: `${num1} - ${num2} = ${sub}` }])
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>Result = {result}</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={String(num1)}
          onChangeText={(text) => setNum1(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={String(num2)}
          onChangeText={(text) => setNum2(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title=" + " onPress={addition} />
        <Button title=" - " onPress={subtraction} />
      </View>
      <View style={styles.historyContainer}>
        <Text style={{ fontSize: 18 }}>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18 }}>{item.key}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  historyContainer: {
    flex: 4,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
})
