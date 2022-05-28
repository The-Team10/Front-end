import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton, Text, TouchableRipple } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import axios from "axios";
export default function RegisterScreen({ navigation }) {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("help_givers");
  // const [status, setStatus] = useState("");
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="First name"
        dense={true}
        returnKeyType="next"
        value={first_name.value}
        onChangeText={(text) => setFirstname(text)}
        error={!!first_name.error}
        errorText={first_name.error}
      />
      <TextInput
        label="Last name"
        dense={true}
        returnKeyType="next"
        value={last_name.value}
        onChangeText={(text) => setLastname(text)}
        error={!!last_name.error}
        errorText={last_name.error}
      />
      <TextInput
        label="Email"
        dense={true}
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        dense={true}
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        dense={true}
        returnKeyType="done"
        value={confirmPassword.value}
        onChangeText={(text) => setConfirmPassword(text)}
        error={!!confirmPassword.error}
        errorText={confirmPassword.error}
        secureTextEntry
      />
    
      <View style={{ flexDirection: "row" }}>
        <TouchableRipple
          onPress={() => setRole("help_givers")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Help Givers</Text>
            <RadioButton
              onPress={() => setRole("help_givers")}
              value="help_givers"
              style={{ color: "#000" }}
              status={role === "help_givers" ? "checked" : "unchecked"}
            />
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => setRole("help_seekers")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Help Seekers</Text>
            <RadioButton
              onPress={() => setRole("help_seekers")}
              value="help_seekers"
              status={role === "help_seekers" ? "checked" : "unchecked"}
            />
          </View>
        </TouchableRipple>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          axios({
            method: "post",
            url: `http://192.168.11.101:3000/api/contributors/signup`,
            data: {first_name, last_name,email,password,confirmPassword,role},
          })
            .then((response) => {
              if (response.data === "signup successful") {
                navigation.reset({
                 
                  routes: [{ name: "LoginScreen" }],
                });
                alert(response.data);

              }
                // console.log(response.data);
               alert(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});