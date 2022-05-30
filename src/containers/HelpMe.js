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
const windowWidth = Dimensions.get("window").width;

export default function HelpMe({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [helpName, setHelpName] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [cin, setCin] = React.useState("");
  const [status, setStatus] = React.useState("");

  const input = (title, state, setState) => {
    // axios({
    //   method :"post",
    //   url:`http://localhost:3000/api/helpseekers/needs`,
    //   data:{ first_name, last_name, need_name, CIN,description,adress,status},

    // })
    // .then((response)=>{
    //   if(response.data === 200) {
    //     alert("sended succsseful")
    //   }
    // }).catch((error) => {
    //   console.log(error);
    // });
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
          {input("Firstname", firstName, setFirstName)}
          {input("LastName", lastName, setLastName)}
          {input("Cin", cin, setCin)}
          {input("Status", status, setStatus)}
          {input("Adress", adress, setAdress)}
          {input("Phone", phone, setPhone)}
          {input("Help name", helpName, setHelpName)}
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
        >
          <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
