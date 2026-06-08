import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Params = () => {
    const allParams = useLocalSearchParams();

    console.log(allParams);
    console.log("param screen");
    
    
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Params are : {JSON.stringify(allParams)}</Text>
    </View>
  );
};

export default Params;
