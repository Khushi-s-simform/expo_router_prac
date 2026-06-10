import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("khushi");
  const [password, setPassword] = useState("khushi123");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    router.replace("/Drawer/Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <View style={{ marginTop: 12 }}>
        <Button
          title="Don't have an account? Register"
          onPress={() => router.navigate("/Register")}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
