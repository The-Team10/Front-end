import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
//import TextInput from "../components/TextInput";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";

const placeholder = require("../images/placeholder-image.png");

export default function DonationMaterial({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [donationName, setDonationName] = React.useState("");
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
      <BackButton goBack={navigation.goBack} />
      <Header top>Donation Material</Header>

      <ScrollView>
        {/*         <Text
          style={{
            color: "#6F7170",
            fontSize: 17,
            paddingVertical: 5,
            paddingHorizontal: 10,
            textAlign: "left",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          Contact informations :
        </Text> */}
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
          {input("Firstname", firstName, setFirstName)}
          {input("LastName", lastName, setLastName)}
          {input("Adress", adress, setAdress)}
          {input("Phone", phone, setPhone)}
          {input("Donation name", donationName, setDonationName)}
          {input("Description", description, setDescription)}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          paddingVertical: 15,
          //    position: "absolute",
          //     bottom: 50,
          paddingHorizontal: 40,
          backgroundColor: Constants.primaryColor,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          //   borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
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