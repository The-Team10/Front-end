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

export default function RegisterScreen({ navigation }) {
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const [role, setRole] = React.useState("help_givers");

  const onSignUpPressed = () => {
    const firstnameError = nameValidator(firstname.value);
    const lastnameError = nameValidator(lastname.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || firstnameError || lastnameError) {
      setFirstname({ ...firstname, error: firstnameError });
      setLastame({ ...lastname, error: lastnameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>

      <TextInput
        label="First name"
        dense={true}
        returnKeyType="next"
        value={firstname.value}
        onChangeText={(text) => setFirstname({ value: text, error: "" })}
        error={!!firstname.error}
        errorText={firstname.error}
      />
      <TextInput
        label="Last name"
        dense={true}
        returnKeyType="next"
        value={lastname.value}
        onChangeText={(text) => setLastname({ value: text, error: "" })}
        error={!!lastname.error}
        errorText={lastname.error}
      />
      <TextInput
        label="Email"
        dense={true}
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
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
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        dense={true}
        returnKeyType="done"
        value={confirmPassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
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
        onPress={onSignUpPressed}
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
