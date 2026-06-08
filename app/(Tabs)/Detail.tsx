import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Detail = () => {
  return (
    <View  style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
          <Text>Detail screen</Text>
          <Button title='product detail' onPress={() => router.navigate('/product/1')} />
    </View>
  )
}

export default Detail