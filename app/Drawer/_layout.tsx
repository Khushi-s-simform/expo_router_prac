import { Drawer } from "expo-router/drawer";
import HeaderLogoutButton from "../../Component/Logoutbtn";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <HeaderLogoutButton />,
      }}
    >
      <Drawer.Screen
        name="(Tabs)"
        options={{
          title: "App",
          headerShown: true,
          drawerIcon: () => <Ionicons name="apps-outline" size={24} color={"black"} />,
          drawerActiveBackgroundColor: "#ffffff",
        }}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: true,
          drawerIcon: () => <Ionicons name="person" size={24} color={"black"} />,
          drawerActiveBackgroundColor: "#ffffff",
        }}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          title: "Settings",
          headerShown: true,
          drawerIcon: () => <Ionicons name="settings" size={24} color={"black"} />,
          drawerActiveBackgroundColor: "#ffffff",
        }}
      />
    </Drawer>
  );
}
