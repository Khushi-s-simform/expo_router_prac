import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Detail = () => {
  return (
    <View  style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
          <Text>Detail screen</Text>
          <Button title='product detail' onPress={() => router.navigate('/Drawer/product/1')} />
    </View>
  )
}

export default Detail