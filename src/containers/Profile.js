import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, TextInput } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
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


useEffect(() => {
 
  fetchData()
})
const fetchData = async () =>{
  var token =await AsyncStorage.getItem('UsertokenInfo')
  console.log(token,'tokennn')
  try{
    axios.get('http://192.168.1.105:3000/api/contributors',{headers:{token:token}}
    ).then((response) =>{
      console.log(response.data)
  setName(response.data[0].first_name)
  setPhoto(response.data[0].photo)
  setEmail(response.data[0].email)
  setLastName(response.data[0].last_name)
    })
  }catch{
  console.log('first')
  }
}

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
          onPress={() => console.log("signout")}
          icon={() => <AntDesign size={18} name="logout" color="#000" />}
        >
          Déconnexion
        </Button>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
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
      </View>
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
