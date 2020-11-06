import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
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
    <ScrollView horizontal='true' style={styles.container}>
      <Image style={styles.stories}
      source={{uri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
      ></Image>
      <Image style={styles.stories}
      source={{uri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
      ></Image>
      <Image style={styles.stories}
      source={{uri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
      ></Image>
      <Image style={styles.stories}
      source={{uri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
      ></Image>
      <StatusBar style="auto" />
    </ScrollView>
    {todos.map(todo => (
      <Todo title={todo} />
    ))}
    <TextInput 
    style={styles.todoImput}
    value={imput} 
    onChangeText={text => setImput(text)} />
      <Button onPress={addTodo} color='pink' title='ADD'/>
      <Image
          style={styles.picture}
          source={{uri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'}}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stories: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 20,
    borderWidth: 4,
    borderColor: gradient(yellow, red, purple),
  },
  but: {
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 50, 
  },
  picture: {
    height: 300,
    margin: 20,
    borderRadius: 50, 
    
  },
  todoImput:{
    margin: 20,
    height: 40,
    borderWidth: 1,
  },
  container: {
   flexDirection: 'row',
   flexWrap: 'wrap'

  },
});

export default App;
