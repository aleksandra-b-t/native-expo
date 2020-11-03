import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './Todo';

 const App = () => {
   const [imput, setImput] = useState('');
   const [todos, setTodos] = useState([]);

   const addTodo = () => {
     setTodos([...todos, imput]);
     setImput('');
   }
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.container}>Hi, I am Aleksandra and i am building React Native App!</Text>
      <StatusBar style="auto" />
    </View>
    {todos.map(todo => (
      <Todo title={todo} />
    ))}
    <TextInput 
    style={styles.todoImput}
    value={imput} 
    onChangeText={text => setImput(text)} />
      <Button onPress={addTodo} title='ADD'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoImput:{
    margin: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    color: '#fff',
    fontSize: '30px',
    backgroundColor: '#585858',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
