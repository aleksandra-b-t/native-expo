import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Todo = ({title}) => {
    return (
        <View>
            <Text style={styles.note}> {title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({ 
note: {
    flex: 1,
    color: 'black',
    fontSize: '30px',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

}
})


export default Todo;
