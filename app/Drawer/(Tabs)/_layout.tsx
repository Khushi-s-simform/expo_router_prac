import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#5080B3",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color={"black"} />,
          tabBarActiveTintColor: "#ffffff",
        }}
      />
      <Tabs.Screen
        name="Detail"
        options={{
          title: "Detail",
          tabBarIcon: () => <Ionicons name="bag" size={24} color={"black"} />,
          tabBarActiveTintColor: "#ffffff",
        }}
      />
      <Tabs.Screen
        name="product/[id]"
        options={{
          title: "Product",
          tabBarIcon: () => <Ionicons name="cart" size={24} color={"black"} />,
          tabBarActiveTintColor: "#ffffff",
        }}
      />
      <Tabs.Screen
        name="product/[...param]"
        options={{
          title: "Params",
          tabBarIcon: () => (
            <Ionicons name="cart-outline" size={24} color={"black"} />
          ),
          tabBarActiveTintColor: "#ffffff",
        }}
      />
    </Tabs>
  );
}
