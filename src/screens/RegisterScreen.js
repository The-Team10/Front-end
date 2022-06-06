import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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

import * as ImagePicker from "expo-image-picker";

import axios from "axios";
export default function RegisterScreen({ navigation }) {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [photo, setPhoto] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("help_givers");
  const [anonyme, setAnonyme] = useState(false);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
    let data = {
      file: base64Img,
      upload_preset: "ml_default",
    };

    fetch("https://api.cloudinary.com/v1_1/dm6yw4dn0/upload", {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        setPhoto(data.url);
        console.log(photo, "photo");
      })
      .catch((err) => console.log(err));
  };
  let openImagePickerAsyn = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
    let data = {
      file: base64Img,
      upload_preset: "ml_default",
    };

    fetch("https://api.cloudinary.com/v1_1/dm6yw4dn0/upload", {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        setPhoto(data.url);
        console.log(photo, "photo1");
      })
      .catch((err) => console.log(err));
  };
  let register = () => {
    let data = {
      first_name,
      last_name,
      email,
      password,
      role,
      photo,
      anonyme,
    };
    console.log(data, "dataaaaaaa");

    axios
      .post(`http://192.168.1.17:3000/api/contributors`, data)
      .then((response) => {
        console.log(response, "response");
        if (response.data === "signup successful") {
          navigation.reset({
            routes: [{ name: "LoginScreen" }],
          });
          alert(response.data);
        }
        console.log(response.data);
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>

        <Text style={{ fontWeight: "500", fontSize: 18 }}>
        Please choose your profile picture
        </Text>
        <Image
          source={{
            uri: photo,
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 200,
            marginHorizontal: 5,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: "10%",
            marginVertical: "10%",
          }}
        >
          <Button
            style={{ marginLeft: 10 }}
            title="Open the camera"
            
            onPress={openImagePickerAsync}
          >
            camera
          </Button>
          <Button
            title="Open the gallery"
            
            onPress={openImagePickerAsyn}
          >
            gallery
          </Button>
        </View>

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
        {/* <TextInput
        label="status"
        dense={true}
        returnKeyType="next"
        value={status.value}
        onChangeText={(text) => setStatus(text)}
        error={!!status.error}
        errorText={status.error}
      /> */}
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
            onPress={() => setAnonyme(!anonyme)}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Anonyme </Text>

              <RadioButton
                onPress={() => setAnonyme(!anonyme)}
                value="anonyme"
                style={{ color: "#000" }}
                status={anonyme == true ? "checked" : "unchecked"}
              />
              {console.log(anonyme)}
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
              url: `http://192.168.1.23:3000/api/contributors/signup`,
              data: {
                first_name,
                last_name,
                email,
                password,
                confirmPassword,
                role,
                photo,
                anonyme,
              },
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
    </ScrollView>
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
