import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import Input from "../components/Input";
// import { useSelector } from "react-redux";
import { theme } from "../core/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [monitor, setMonitor] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const logout = () => {
    navigation.navigate("LoginScreen");
  };

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    var token = await AsyncStorage.getItem("UsertokenInfo");
    console.log(token, "tokennn");
    try {
      axios
        .get("http://192.168.1.23:3000/api/contributors", {
          headers: { token: token },
        })
        .then((response) => {
          console.log(response.data);
          setName(response.data[0].first_name);
          setPhoto(response.data[0].photo);
          setEmail(response.data[0].email);
          setLastName(response.data[0].last_name);
        });
    } catch {
      console.log("first");
    }
  };

  // const populateForm = (params) => {
  //   setEmail({ value: "", error: "" });
  //   setPhone({ value: "", error: "" });
  //   setPassword({ value: "", error: "" });
  // };
  const validateForm = (params) => {
    let payload = {};
    if (name.value !== "") payload.name = name.value;
    if (email.value !== "") payload.email = email.value;
    if (password.value !== "") payload.password = password.value;
    onHandleUpdate(payload);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.avatar}>
          <Avatar.Image
            style={{ backgroundColor: theme.colors.secondary }}
            size={100}
            source={{ uri: photo }}
          />
        </View>
        <View style={styles.fullname}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {name}
            {/* {"_.capitalize(authState.contributors.FirstName)"} */}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {/* <Text style={{ fontSize: 16 }}>{"authState.user.email"}</Text> */}
        </View>
        <View style={styles.logout}>
          <Button
            mode="text"
            onPress={logout}
            icon={() => <AntDesign size={18} name="logout" color="#000" />}
          >
            Déconnexion
          </Button>
        </View>
        <View style={{ padding: 12, marginTop: 30 }}>
          <Input
            placeholder="First name"
            placeholderTextColor="#9ca3af"
            label="First name"
            icon="person"
            returnKeyType="next"
            value={name}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />
          <Input
            placeholder="Last name"
            placeholderTextColor="#9ca3af"
            label="Last name"
            icon="person"
            dense={false}
            returnKeyType="next"
            value={lastName}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />

          <Input
            placeholder="email"
            placeholderTextColor="#9ca3af"
            label="email"
            icon=""
            dense={false}
            returnKeyType="next"
            value={email}
            onChangeText={(text) => setPhone({ value: text, error: "" })}
            error={!!phone.error}
            errorText={phone.error}
            autoCapitalize="none"
          />
        
        </View>
        {/* <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            label="First Name"
            mode="contained"
            style={styles.textInput}
            dense={false}
            returnKeyType="next"
            value={name}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />
          <TextInput
            label="last Name"
            mode="contained"
            style={styles.textInput}
            dense={false}
            returnKeyType="next"
            value={lastName}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />

          <TextInput
            label="email"
            mode="contained"
            style={styles.textInput}
            dense={false}
            returnKeyType="next"
            value={email}
            onChangeText={(text) => setPhone({ value: text, error: "" })}
            error={!!phone.error}
            errorText={phone.error}
            autoCapitalize="none"
          />
        </View> */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              ...styles.message,
              color:
                monitor.type === "error"
                  ? theme.colors.error
                  : theme.colors.success,
            }}
          >
            {monitor.message}
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Button
            mode="contained"
            color={theme.colors.primary}
            style={{ borderRadius: 50 }}
            loading={loading}
            icon={() => (
              <AntDesign size={17} name="edit" color={theme.colors.primary} />
            )}
            onPress={() => {
              navigation.navigate("Password");
            }}
          >
            UPDATE
          </Button>
        </View>
      </ScrollView>
      <TouchableOpacity 
       onPress={() => {
        navigation.navigate("Contact");
      }}
      style={{backgroundColor:"white", paddingBottom:30,paddingLeft:15}}>
        <Text
          style={{
            color: "#1E90FF",
            fontSize: 22,
            letterSpacing: 0.2,
            textDecorationLine: "underline",
          }}
        >
          Contact Us
        </Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: 100,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  fullname: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  message: {
    fontSize: 13,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
