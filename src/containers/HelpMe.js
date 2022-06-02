import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
// import { Formik } from "formik";
const windowWidth = Dimensions.get("window").width;

export default function HelpMe({ navigation }) {
//   const [first_name, setFirstName] = React.useState("");
//   const [last_name, setLastName] = React.useState("");
//   const [need_name, setHelpName] = React.useState("");
//   const [adress, setAdress] = React.useState("");
  // const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
//   const [CIN, setCin] = React.useState("");
//   const [status, setStatus] = React.useState("");

  const input = (title, state, setState) => {

const fn =()=>{

 axios({
     method :"post",
     url:`http://localhost:3000/api/helpseekers/needs`,
    // data:{ firstName, lastName,helpName, cin,description,adress,status},
    data:{ description},

  })
  .then((response)=>{
    if(response.status === 200) {
      alert("sended succsseful")
    }
  }).catch((error) => {
    console.log(error);
  });
}

    return (
      <TextInput
        //  label={title}
        placeholder={title}
        placeholderStyle={{ size: 10 }}
        underlineColorAndroid={"gray"}
        returnKeyType="next"
        value={state}
        onChangeText={(text) => setState(text)}
        autoCapitalize="none"
        style={{
          borderRadius: 10,
          height: 60,
          fontSize: 14,
          margin: 10,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={navigation.goBack} />

        <Header white>Help me </Header>

      </LinearGradient>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 100, top: 0 }}>
          {/* {input("Firstname", first_name, setFirstName)}
          {input("LastName", last_name, setLastName)}
          {input("Cin", CIN, setCin)}
          {input("Status", status, setStatus)}
          {input("Adress", adress, setAdress)} */}
          {/* {input("Phone", phone, setPhone)} */}
          {/* {input("Help name", need_name, setHelpName)} */}
          {input("Description", description, setDescription)}
        </View>

        <TouchableOpacity
          style={{
          paddingVertical: 15,
          paddingHorizontal: 40,
          backgroundColor: Constants.primaryColor,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          left: 90,
          right: 90,
          borderRadius: 10,
          }}
          onPress={()=>{
            axios({
              method :"post",
              url:`http://192.168.11.241:3000/api/helpseekers/needs`,
             data:{ first_name, last_name,need_name,CIN,description,adress,status},

           })
           .then((response)=>{
             if(response.status === 200) {
               alert("sended succsseful")
             }
           }).catch((error) => {
             console.log(error);
           });
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}
          // onPress={fn()}
          >Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
