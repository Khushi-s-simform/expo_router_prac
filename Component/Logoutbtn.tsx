import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderLogoutButton() {
  const logout = async () => {
    router.replace("/");
  };

  return (
    <TouchableOpacity
      onPress={logout}
      style={{ marginRight: 10 }}
    >
      <Ionicons
        name="log-out-outline"
        size={24}
      />
    </TouchableOpacity>
  );
}