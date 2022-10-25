import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NotLogged() {
  const navigation = useNavigation()

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver ésta pantalla debes iniciar sesión</Text>
      <Button title='Ir al login' onPress={() => navigation.navigate('Account')} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 10
  },
})
