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
 
  const [name, setName] = useState("");
  const [lastName, setLastName]= useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



const update = async () =>{
  console.log(token,'tokennn')
  try{
      const data={
          first_name:name,
          last_name:lastName,
          email:email      }
    axios.put('http://192.168.11.163:3000/api/contributors/update/7',data
    ).then((response) =>{
    
    })
  }catch{
  console.log('first')
  }
}




  return (
    <ScrollView style={styles.container}>
    
    
   
  
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          label="First Name"
          mode="contained"
          style={styles.textInput}
          dense={false}
          returnKeyType="next"
          value={name}
          onChangeText={(text) => setName(text)}
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
          onChangeText={(text) => setLastName(text)}
        
        />
        
       
        <TextInput
          label="email"
          mode="contained"
          style={styles.textInput}
          dense={false}
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
           <TextInput
          label="password"
          mode="contained"
          style={styles.textInput}
          dense={false}
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
      </View>
  
      <View style={{ margin: 20 }}>
        <Button
          mode="contained"
          color={theme.colors.primary}
          style={{ borderRadius: 50 }}
          icon={() => (
            <AntDesign size={17} name="edit" color={theme.colors.primary} />
          )}
          onPress={()=>{update}}
        >
          Modifier
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
