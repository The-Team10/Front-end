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

export default function ConfirmPassword({ navigation}) {
  const [password,setPassword]=useState("");
const [email,setEmail] = useState("")

useEffect(() => {
 
  fetchData()
})
const fetchData = async () =>{
  var token =await AsyncStorage.getItem('UsertokenInfo')
  console.log(token,'tokennn')
  try{
    axios.get('http://192.168.1.101:3000/api/contributors',{headers:{token:token}}
    ).then((response) =>{
      console.log(response.data)
      setEmail(response.data[0].email)
    })
  }catch{
  console.log('first')
  }
}

 const checkpassword=()=>{
     if(password===email){
navigation.navigate('Update')
     }else{
alert('wrong information')
     }
 }


  useEffect(() => {
    // fetchData()
  });
  const fetchData = async () => {
    var token = await AsyncStorage.getItem("UsertokenInfo");
    console.log(token, "tokennn");
    try {
      axios
        .get("http://192.168.1.101:3000/api/contributors", {
          headers: { token: token },
        })
        .then((response) => {
          console.log(response.data);
          setEmail(response.data[0].email);
        });
    } catch {
      console.log("first");
    }
  };

  const checkpassword = () => {
    if (password === email) {
      navigation.navigate("Update");
    } else {
      alert("wrong information");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="email"
        mode="contained"
        style={styles.textInput}
        dense={false}
        returnKeyType="next"
        onChangeText={(text) => {
          setPassword(text);
        }}
        autoCapitalize="none"
      />

      <Button
        mode="contained"
        color={theme.colors.primary}
        style={{ borderRadius: 50 }}
        icon={() => (
          <AntDesign size={17} name="edit" color={theme.colors.primary} />
        )}
        onPress={checkpassword}
      >
        confirm
      </Button>
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
