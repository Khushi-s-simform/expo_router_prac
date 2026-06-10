import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, Pressable, Text, View } from "react-native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  console.log("ID SCREEN");
  {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable onPress={() => router.setParams({ id: "5" })}>
          <Text>Product id :- {id}</Text>
          <Text>Tap to toggle id</Text>
        </Pressable>
        <Button
          title="Params"
          onPress={() => router.navigate("/Drawer/product/1/abc/xyz")}
        />
      </View>
    );
  }
};

export default ProductDetail;
