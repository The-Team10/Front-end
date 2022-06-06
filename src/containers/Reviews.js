import { ScrollView, StyleSheet, Text, View,  ActivityIndicator } from "react-native";
import React from "react";
import { Formik } from "formik";
import KeyboardWrapper from "../components/Kybord";
import Input from "../components/Input";
import styled from "styled-components/native";
import Canstants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import Swiper from "./swiperRe";
import axios from "axios"
const StatusBarHeight = Canstants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#e5e7eb",
  tertiary: "#1f2937",
  darklight: "#9ca3af",
  brand: "#1E90FF",
  red: "#1E90FF",
};
const { primary, secondary, tertiary, darklight, brand } = Colors;
const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  border-radius: 5px;
  height: 120px;
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
  padding-left: 13px;
`;
const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 60px;
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

const Reviews = ({ navigation}) => {
  const handleLogin = (credentials, setSubmitting) => {

    axios({
        method: "post",
        url: `http://192.168.1.23:3000/api/review/postreview`,
       data:credentials
      })
      .then((response) => {
        if (response.status === 200) {
        
          alert("successful");

        }
        setSubmitting(false)
         
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false)
      });
  }


  return (
    <>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Reviews</Text>
        <Swiper />
        <View style={{ margin: 15 }} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            color: brand,
            // paddingLeft: 30,
            marginBottom: 20,
          }}
        >
          Your word matters :{" "}
        </Text>
        <KeyboardWrapper>
          <InnerContainer>
            <Formik
              initialValues={{ description: "",}}
              onSubmit={(values, { setSubmitting }) => {
                if(values.first_name == "" || values.last_name == "" || values.description == ""){
                  alert ('champ vide')
                  setSubmitting(false)}
                  else {
                    handleLogin(values, setSubmitting);
                  }
               
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isSubmitting,
              }) => (
                <View>
                  {/* <Input
                    label="First Name"
                    icon="person"
                    placeholder="your name"
                    placeholderTextColor={darklight}
                    onChangeText={handleChange("first_name")}
                    onBlur={handleBlur("first_name")}
                    value={values.first_name}
                  /> */}
                  {/* <Input
                    label="Last Name"
                    icon="person"
                    placeholder="dakhli"
                    placeholderTextColor={darklight}
                    onChangeText={handleChange("last_name")}
                    onBlur={handleBlur("last_name")}
                    value={values.last_name}
                  /> */}
                  <StyledInputLabel>Review</StyledInputLabel>
                  <StyledTextInput
                    multiline={true}
                    numberOfLines={5}
                    placeholder="We love to hear from you"
                    placeholderTextColor={darklight}
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                  />
                  <View style={{ margin: 5 }} />
                  {!isSubmitting &&  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Submit</ButtonText>
                  </StyledButton>}
                  {
                      isSubmitting && <StyledButton disabled={true}>
                     <ActivityIndicator size="large" color={primary}/>
                    </StyledButton>
                  }
                 
                  <View style={{ margin: 7 }} />
                </View>
              )}
            </Formik>
          </InnerContainer>
        </KeyboardWrapper>
      </ScrollView>
    </>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBarHeight,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.2,
    color: "#2986cc",
    // paddingLeft: 6,
    margin: 12,
  },
});
//////////////////////////////////
// import axios from "axios";

// import _ from "lodash";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View,Image } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { Avatar, Button, TextInput } from "react-native-paper";
// import AntDesign from "react-native-vector-icons/AntDesign";
// // import { useSelector } from "react-redux";
// import { theme } from "../core/theme";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Reviews({ navigation }) {
 
//   const [name, setName] = useState("");
//   const [lastName, setLastName]= useState("")
//   const [email, setEmail] = useState("");
//   const [createdAt, setCreatedAt] = useState("")
// const [photo, setPhoto] = useState('')
// const [description, setDescription]= useState("")
// const [data, setData]= useState("")
// console.log(data)



// const fn =async()=>{
//   awaitaxios.get('http://192.168.11.171:3000/api/review/get'
//   ).then((response) =>{
// setData(response.data)
//   })
// }
//   return (
//     <ScrollView style={styles.container}>

//     <View>
    
//     <Button  onPress={fn}>
//    see reviews
//  </Button>
   
//   {
//     data.map((element)=>{
//       return(
//         <Image
//         source={{uri:element.image}}
//         />
//       )
//     })
//   }
//     </View>
 
 
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     flexDirection: "column",
//     paddingTop: 100,
//   },
//   avatar: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   fullname: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     // padding: 20,
//   },
//   logout: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     // padding: 20,
//   },
//   textInput: {
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   message: {
//     fontSize: 13,
//   },
//   link: {
//     fontWeight: "bold",
//     color: theme.colors.primary,
//   },
// });
