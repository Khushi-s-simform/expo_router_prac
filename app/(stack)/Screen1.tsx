import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Screen1 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Screen1</Text>
      <Button title="Screen2" onPress={() => router.navigate('/Screen2')} />
      <Button title="Go back" onPress={() => router.back()}/>
    </View>
  );
};

export default Screen1;
