import { Redirect } from "expo-router";

export default function Index() {
  const token = "";
  if (!token) {
    return <Redirect href={"/(auth)/Login"} />;
  }
  return <Redirect href="/Drawer/Home" />;
}
