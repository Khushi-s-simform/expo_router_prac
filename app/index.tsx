import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
      <Button title="Login" onPress={() => router.navigate('/Login')} />
      <Button title="Register" onPress={() => router.navigate('/Register')} />
    </View>
  );
}
