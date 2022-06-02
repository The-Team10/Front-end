import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
//import TextInput from "../components/TextInput";
import { Constants } from "../commun/Constants";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";
import axios from "axios"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const placeholder = require("../images/placeholder-image.png");

export default function DonationMaterial({ navigation }) {
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [Donation_name, setDonationName] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const pickImageCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      setModalVisible(!modalVisible);
    }
  };
  const pickImageLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      setModalVisible(!modalVisible);
    }
  };

  const input = (title, state, setState) => {
    const fn =()=>{}
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
        <Header white>Material Donate </Header>
      </LinearGradient>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", paddingTop: 40 }}>
          <Image
            //     tintColor={Constants.primaryColor}
            style={{
              width: "70%",
              height: 120,
              borderRadius: 10,
              backgroundColor: "#E1E1E1",
            }}
            source={image && image ? { uri: image } : placeholder}
          />
          <AntDesign
            onPress={() => setModalVisible(true)}
            name={"camera"}
            size={25}
            color={"gray"}
            style={{ bottom: 16 }}
          />
        </View>

        <View style={{ flex: 1, paddingBottom: 100, top: 0 }}>
          {input("Firstname", first_name, setFirstName)}
          {input("LastName", last_name, setLastName)}
          {input("Adress", adress, setAdress)}
          {input("Phone", phone, setPhone)}
          {input("Donation name", Donation_name, setDonationName)}
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
              url:`http://192.168.11.241:3000/api/helpgiver/donnationMat`,
             data:{ first_name, last_name,Donation_name, phone,description,adress},
       
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
          <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "white",
              height: "30%",
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
            }}
          >
            <AntDesign
              onPress={() => setModalVisible(!modalVisible)}
              name={"closecircleo"}
              size={20}
              color={"black"}
              style={{ position: "absolute", right: 15, top: 15 }}
            />
            <View
              style={{ position: "absolute", right: 0, left: 0, bottom: 10 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "600",
                  bottom: "20%",
                }}
              >
                Choose a photo
              </Text>

              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  width: "80%",
                  height: 50,
                  backgroundColor: Constants.primaryColor,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                onPress={() => pickImageCamera()}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  Launch Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  width: "80%",
                  height: 50,
                  backgroundColor: Constants.primaryColor,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
            
                onPress={() => pickImageLibrary()}
                
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  Pick from gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
