import { View, Text, StyleSheet, BackHandler } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'

export default function SecondScreen({route, navigation}) {

    useEffect(() => {
        if(route.params?.message) {
            alert(route.params.message)
        }
        /*Info from assignment: Android supports hardware back button. To support navigation back using hardware
button following code is implemented to SecondScreen. When component is mounted,
event listener for back button handler is added (and removed when unmounted). Close
function is executed if hardware back button is pressed, which causes app to navigate
to previous screen. */
        BackHandler.addEventListener('hardwareBackPress', close)
        return() => {
        BackHandler.removeEventListener('hardwareBackPress', close)
        }
    }, [])

    function close () {
        navigation.goBack(null);
        return true;
    }

    useLayoutEffect ( () => {
        navigation.setOptions({
          headerStyle: {
            backgroundColor: '#f0f0f0'
          }
        })
      }, [])

  return (
    <View style = {styles.container}>
      <Text>This is the text that shows in Second Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });