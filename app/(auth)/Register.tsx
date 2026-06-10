import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const Register = () => {
  const [fullName, setFullName] = useState("khushi");
  const [email, setEmail] = useState("k@gmail.com");
  const [username, setUsername] = useState("khushi");
  const [password, setPassword] = useState("khushi123");
  const [confirmPassword, setConfirmPassword] = useState("khushi123");

  const handleRegister = () => {
    if (!fullName || !email || !username || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    console.log({
      fullName,
      email,
      username,
      password,
    });

    Alert.alert("Success", "Registration completed");

    router.replace("/Drawer/Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Register" onPress={handleRegister} />

      <View style={{ marginTop: 12 }}>
        <Button
          title="Already have an account? Login"
          onPress={() => router.navigate("/Login")}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
