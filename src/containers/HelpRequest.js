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
//import TextInput from "../components/TextInput";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HelpRequest({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [donationName, setDonationName] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const input = (title, state, setState) => {
    return (
      <TextInput
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
      <StatusBar
        animated={true}
        backgroundColor={"#0072FF"}
        //  barStyle={statusBarStyle}
        //  showHideTransition={statusBarTransition}
        //    hidden={hidden}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
          // height: windowHeight,
          //  flex: 1,
          //   justifyContent: "center",
          //   alignItems: "center",
          //   textAlign: "center",
        }}
      >
        <BackButton inTop white goBack={navigation.goBack} />
        <Header white>Credit Card </Header>
      </LinearGradient>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 100, top: 0 }}>
          {input("Firstname", firstName, setFirstName)}
          {input("LastName", lastName, setLastName)}
          {input("Adress", adress, setAdress)}
          {input("Phone", phone, setPhone)}
          {input("Donation name", donationName, setDonationName)}
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
