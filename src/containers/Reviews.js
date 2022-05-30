import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, TextInput } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { useSelector } from "react-redux";
import { theme } from "../core/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Reviews({ navigation }) {
 
  const [name, setName] = useState("");
  const [lastName, setLastName]= useState("")
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("")
const [photo, setPhoto] = useState('')
const [description, setDescription]= useState("")
const [data, setData]= useState("")
console.log(data)



const fn =async()=>{
  awaitaxios.get('http://192.168.11.171:3000/api/review/get'
  ).then((response) =>{
setData(response.data)
  })
}
  return (
    <ScrollView style={styles.container}>

    <View>
    
    <Button  onPress={fn}>
   see reviews
 </Button>
   
  {
    data.map((element)=>{
      return(
        <Image
        source={{uri:element.image}}
        />
      )
    })
  }
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
