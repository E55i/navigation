import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {AntDesign} from '@expo/vector-icons'

export default function HomeScreen({navigation}) {

  const [message, setMessage] = useState('Testing')

  useLayoutEffect ( () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0'
      },
      headerRight: () => (
        <AntDesign
        style= {styles.navButton}
        name="arrowright"
        size={24}
        onPress={() => navigation.navigate('Second',{message: message})}
        />
      )
    })
  }, [message])

  return (
    <View style ={styles.container}>
      <Text>This is the text that shows in Home Screen {message}</Text>
      <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type message here"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    navButton:{
      marginRight: 5,
      padding: 4,
    }
  });