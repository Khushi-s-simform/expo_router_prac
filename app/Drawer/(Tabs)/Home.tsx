import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Home = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Button title="Screen1" onPress={() => router.navigate('/Screen1')} />
      {/* <Link href={'/Screen1'} prefetch>
        Screen1
      </Link> */}
      <Text onPress={()=>{ navigation.openDrawer()}}>Open Drawer</Text>
    </View>
  );
};

export default Home;
