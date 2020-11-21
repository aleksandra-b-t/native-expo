import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Todo from './Todo';
import instaLogo from './assets/instaLogo.png'
 

const stories = ['https://images.unsplash.com/photo-1563289141-f9ed1256047a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuZ2F8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1564567404863-d2e5bde6d959?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563209259-2819dbb22d93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563289142-a0b5d6b78c79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563273941-3f576efb8738?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563273941-9b69c469e03d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563209259-ef47f3d5e36d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbmdhfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60']

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
        {stories.map((image, imageIndex) => {
          <Image 
          source={{uri: image}}
          style={styles.stories}
          key={imageIndex}
          />
        }) }
        </ScrollView>
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
