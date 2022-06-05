import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const HelpMe = () => {

  const [needs, setNeeds] = useState();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    axios({
      method: "get",
      url: `http://192.168.1.23:3000/api/helpgiver/listNeeds`,

      //  data:credentials
    })
      .then((response) => {
        if (response.status == 200) {
          setNeeds(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setNeeds();
    };
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          letterSpacing: 0.2,
          color: "deepskyblue",
          paddingTop: 100,
          paddingLeft: 15,
          marginBottom: 25,
        }}
      >
        List Of needs
      </Text>
      {needs ? (
        needs.map((elemnt) => [
          <TouchableOpacity
            style={{
              elevation: 40,
              width: "100%",
              height: 300,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              backgroundColor: "powderblue",
              alignSelf: "center",
            }}
            onPress={() => {
              setVisible(!visible);
            }}
            key={elemnt.need_id}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={() => setVisible(!visible)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <View
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: 15,
                    padding: 20,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.35,
                    shadowRadius: 6,
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      letterSpacing: 0.2,
                      padding: 20,
                      marginVertical: 10,
                    }}
                  >
                    first name: {elemnt.first_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      letterSpacing: 0.2,
                      padding: 20,
                      marginVertical: 10,
                    }}
                  >
                    last name: {elemnt.last_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      letterSpacing: 0.2,
                      padding: 20,
                      marginVertical: 10,
                    }}
                  >
                    phone: {elemnt.phone}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      letterSpacing: 0.2,
                      padding: 20,
                      marginVertical: 10,
                    }}
                  >
                    adress: {elemnt.adress}
                  </Text>
                  <Pressable
                    onPress={() => {
                      setVisible(!visible);
                    }}
                    style={{
                      backgroundColor: "red",
                      padding: 6,
                      borderRadius: 15,
                      marginTop: 50,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "600" }}>
                      close
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Donation");
                      setVisible(!visible);
                    }}
                    style={{
                      backgroundColor: "black",
                      padding: 6,
                      borderRadius: 15,
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "600" }}>
                      choose
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.date}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.categorie}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.region}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.description}
              
          
            </Text>
         
     
          
          </TouchableOpacity>,
          

          
        ])
      ) : (
        <Text> list </Text>
      )}
      
    </ScrollView>
  );
};

export default HelpMe;

const styles = StyleSheet.create({});

////////////////////////////////////////////////////////////////////////////////////////
// import * as React from "react";
// import {
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Dimensions,
//   StatusBar,
// } from "react-native";
// import Header from "../components/Header";
// import { Constants } from "../commun/Constants";
// import BackButton from "../components/BackButton";
// import { LinearGradient } from "expo-linear-gradient";
// import axios from "axios";
// // import { Formik } from "formik";
// const windowWidth = Dimensions.get("window").width;

// export default function HelpMe({ navigation }) {
//   const [first_name, setFirstName] = React.useState("");
//   const [last_name, setLastName] = React.useState("");
//   const [need_name, setHelpName] = React.useState("");
//   const [adress, setAdress] = React.useState("");
//   // const [phone, setPhone] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   const [CIN, setCin] = React.useState("");
//   const [status, setStatus] = React.useState("");

//   const input = (title, state, setState) => {

// const fn =()=>{

//  axios({
//      method :"post",
//      url:`http://localhost:3000/api/helpseekers/needs`,
//     data:{ firstName, lastName,helpName, cin,description,adress,status},

//   })
//   .then((response)=>{
//     if(response.status === 200) {
//       alert("sended succsseful")
//     }
//   }).catch((error) => {
//     console.log(error);
//   });
// }

//     return (
//       <TextInput
//         //  label={title}
//         placeholder={title}
//         placeholderStyle={{ size: 10 }}
//         underlineColorAndroid={"gray"}
//         returnKeyType="next"
//         value={state}
//         onChangeText={(text) => setState(text)}
//         autoCapitalize="none"
//         style={{
//           borderRadius: 10,
//           height: 60,
//           fontSize: 14,
//           margin: 10,
//         }}
//       />
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar animated={true} backgroundColor={"#0072FF"} />
//       <LinearGradient
//         colors={["#0072FF", "rgba(33,150,243,0.7)"]}
//         style={{
//           width: windowWidth,
//         }}
//       >
//         <BackButton inTop white goBack={navigation.goBack} />

//         <Header white>Help me </Header>

//       </LinearGradient>

//       <ScrollView style={{ flex: 1 }}>
//         <View style={{ flex: 1, paddingBottom: 100, top: 0 }}>
//           {input("Firstname", first_name, setFirstName)}
//           {input("LastName", last_name, setLastName)}
//           {input("Cin", CIN, setCin)}
//           {input("Status", status, setStatus)}
//           {input("Adress", adress, setAdress)}
//           {/* {input("Phone", phone, setPhone)} */}
//           {input("Help name", need_name, setHelpName)}
//           {input("Description", description, setDescription)}
//         </View>

//         <TouchableOpacity
//           style={{
//             paddingVertical: 15,
//             paddingHorizontal: 40,
//             backgroundColor: Constants.primaryColor,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             borderBottomLeftRadius: 30,
//             borderBottomRightRadius: 30,
//             alignItems: "center",
//             justifyContent: "center",
//             position: "absolute",
//             bottom: 20,
//             left: 90,
//             right: 90,
//             borderRadius: 10,
//           }}
//           onPress={()=>{
//             axios({
//               method :"post",
//               url:`http://192.168.11.241:3000/api/helpseekers/needs`,
//              data:{ first_name, last_name,need_name,CIN,description,adress,status},

//            })
//            .then((response)=>{
//              if(response.status === 200) {
//                alert("sended succsseful")
//              }
//            }).catch((error) => {
//              console.log(error);
//            });
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 16 }}
//           // onPress={fn()}
//           >Submit</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }
