import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Todo from './Todo';
import instaLogo from './assets/instaLogo.png'


 const App = () => {
   const [imput, setImput] = useState('');
   const [todos, setTodos] = useState([]);

   const addTodo = () => {
     setTodos([...todos, imput]);
     setImput('');
   }
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.bar}> 
      <Image source={'/Users/aleksandra/Flatiron/projects/native_learn/ExpoProject/assets/instaLogo.png'}></Image> 
      </TouchableOpacity>
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
  bar: {
   width: '100%',
   height: 50,
   backgroundColor: '#292929',
  },
  stories: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 20,
    borderWidth: 5,
    borderColor: '#d6249f',
    borderColor: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
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
