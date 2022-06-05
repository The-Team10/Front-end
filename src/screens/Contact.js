import React, { useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ContactUs = require("../images/contact.png");
// const imgContactUs = require("../images/imgContactUs.png");
const Contact = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  }, []);
  const handleBackPress = () => {
    return true; // Do nothing when back button is pressed
  };
  const RenderElements = (index, icon, textOne, textTow, color, iconType) => {
    return (
      <View key={index} style={styles.seperator}>
        <View style={[styles.icons, { backgroundColor: color }]}>
          {iconType === "AntDesign" ? (
            <AntDesign name={icon} size={30} color={"white"} />
          ) : (
            <Entypo name={icon} size={30} color={"white"} />
          )}
        </View>
        <View style={styles.innerSeperator} />
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>{textOne}</Text>
          <Text numberOfLines={1} style={styles.secondText}>
            {textTow}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.center]}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        // Background Linear Gradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={navigation.goBack} />
        <Header white>Contact us </Header>
      </LinearGradient>
      <View style={styles.container}>
        <Image resizeMode="contain" source={ContactUs} style={styles.image} />
      </View>
      {RenderElements(
        1,
        "wechat",
        "Email",
        "donationMail@mailing.com",
        "green",
        "AntDesign"
      )}
      {RenderElements(1, "old-phone", "Phone", "+0178335464", "pink", "Entypo")}
      {RenderElements(
        1,
        "location-pin",
        "Address",
        "Technopark Elghazela ariana, 2088",
        "blue",
        "Entypo",
        Constants.primaryColor
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    paddingVertical: 20,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: "5%",
  },
  image: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.25,
    borderRadius: 15,
  },
  seperator: {
    flexDirection: "row",
    alignItems: "center",
    top: 10,
    backgroundColor: "white",
    width: "95%",
    borderRadius: 25,
    height: "13%",
    marginVertical: 5,
  },
  icons: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    marginHorizontal: 20,
  },
  innerSeperator: {
    height: "80%",
    marginHorizontal: 5,
    width: "0.5%",
    backgroundColor: "gray",
  },
  textContainer: {
    flexDirection: "column",
    width: "60%",
    marginLeft: 15,
  },
  firstText: {
    color: "black",
    fontSize: 16,
    fontWeigth: "bold",
    paddingBottom: 10,
  },
  secondText: {
    color: "gray",
    fontSize: 13,
    fontWeigth: "600",
  },
});
export default Contact;
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator
// } from "react-native";
// import React from "react";
// import { Formik } from "formik";
// import KeyboardWrapper from "../components/Kybord";
// import Input from "../components/Input";
// import styled from "styled-components/native";
// import Canstants from "expo-constants";
// import { StatusBar } from "expo-status-bar";
// import axios from "axios"
// const StatusBarHeight = Canstants.statusBarHeight;
// export const Colors = {
//   primary: "#ffffff",
//   secondary: "#e5e7eb",
//   tertiary: "#1f2937",
//   darklight: "#9ca3af",
//   brand: "#309dff",
//   green: "#309dff",
//   red: "#ef4444",
// };
// const { primary, secondary, tertiary, darklight, brand, green } = Colors;
// const InnerContainer = styled.View`
//   flex: 1;
//   width: 100%;
//   align-items: center;
// `;
// const ContactText = styled.Text`
//   font-size: 32px;
//   font-weight: bold;
//   color: ${brand};
//   margin-top: ${StatusBarHeight + 10}px;
//   letter-spacing: 1px;
//   text-align: center;
//   margin-bottom:20px;
// `;
// const Desc = styled.Text`
//   font-size: 19px;
//   font-weight: 400;
//   color: black;
//   margin-top: 20px;
//   letter-spacing: 1px;
//   padding: 6px;
// `;
// const ContactContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 6px;
//   margin-bottom: 20px;
// `;
// const ContactBox = styled.TouchableOpacity`
//   flex: 1;
//   height: 70px;
//   width: 120px;
//   border-radius: 15px;
//   background-color: ${green};
//   align-items: center;
//   justify-content: center;
//   padding: 6px;
//   margin: 6px;
// `;
// const StyledTextInput = styled.TextInput`
//   background-color: ${secondary};
//   border-radius: 5px;
//   height: 120px;
//   font-size: 16px;
//   margin-top: 3px;
//   margin-bottom: 10px;
//   color: ${tertiary};
//   padding-left: 13px;
// `;
// const StyledInputLabel = styled.Text`
//   color: ${tertiary};
//   font-size: 13px;
//   text-align: left;
// `;
// export const StyledButton = styled.TouchableOpacity`
//   padding: 15px;
//   background-color: ${brand};
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   margin-top: 5px;
//   margin-bottom: 5px;
//   height: 60px;
// `;
// export const ButtonText = styled.Text`
//   color: ${primary};
//   font-size: 16px;
// `;
// const ContactUs = ({ navigation }) => {
//   const handleLogin = (credentials, setSubmitting) => {

//       axios({
//           method: "post",
//           url: `http://192.168.11.217:3000/api/contact/contact`,
//          data:credentials
//         })
//         .then((response) => {
//           if (response.status === 200) {

//             alert("successful");

//           }
//           setSubmitting(false)

//         })
//         .catch((error) => {
//           console.log(error);
//           setSubmitting(false)
//         });
//     }

//   return (

//     <>

//      {/* <BackButton goBack={navigation.goBack} /> */}

//       <StatusBar style="dark" />
//       <ContactText>Contact Us</ContactText>
//       <KeyboardWrapper>
//         <ScrollView>
//           <InnerContainer>
//             <Desc>
//               Have questions,suggestions,special requests or feedbacks? We'd
//               love to hear from you. You can email us directly, call us, send us
//               snail mail or use the form below.
//             </Desc>
//             {/* <TouchableOpacity onPress={() => navigation.navigate("Contact")}/> */}
//             <ContactContainer>
//               <ContactBox style={{ elevation: 25 }}>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     marginBottom: 4,
//                     color: "white",
//                     fontWeight: "500",
//                     letterSpacing: 1,
//                   }}
//                 >
//                   Send us email:
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 18,
//                     marginBottom: 4,
//                     color: "white",
//                     fontWeight: "700",
//                   }}
//                 >
//                   info@allin.com
//                 </Text>
//               </ContactBox>
//               <ContactBox style={{ elevation: 25 }}>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     marginBottom: 4,
//                     color: "white",
//                     fontWeight: "500",
//                     letterSpacing: 1,
//                   }}
//                 >
//                   Call us:
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 18,
//                     marginBottom: 4,
//                     color: "white",
//                     fontWeight: "700",
//                   }}
//                 >
//                   +216 25 777 233
//                 </Text>
//               </ContactBox>
//             </ContactContainer>
//             <Formik
//               initialValues={{  first_name:"", last_name:"",adressEmail:"", phone:"",adress:"",description:""}}
//               onSubmit={(values, { setSubmitting }) => {
//                if(values.first_name == "" || values.last_name == "" || values.adressEmail == ""|| values.phone == "" || values.adress=="" || values.description==""){
//                    alert ('champ vide')
//                    setSubmitting(false)
//                } else {
//                   handleLogin(values, setSubmitting);
//                }

//               }}
//             >
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 values,
//                 isSubmitting,
//               }) => (
//                 <View>
//                   <Input
//                     label="First Name"
//                     icon="person"
//                     placeholder=""
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("first_name")}
//                     onBlur={handleBlur("first_name")}
//                     value={values.first_name}
//                   />
//                   <Input
//                     label="Last Name"
//                     icon="person"
//                     placeholder=""
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("last_name")}
//                     onBlur={handleBlur("last_name")}
//                     value={values.last_name}
//                   />
//                   <Input
//                     label="Addresse email"
//                     icon="mail"
//                     placeholder="email@email.com"
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("adressEmail")}
//                     onBlur={handleBlur("adressEmail")}
//                     keyboardType="email-address"
//                     value={values.adressEmail}
//                   />
//                   <Input
//                     label="Phone"
//                     icon="device-mobile"
//                     placeholder="+216 "
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("phone")}
//                     onBlur={handleBlur("phone")}
//                     keyboardType="phone-pad"
//                     value={values.phone}
//                   />
//                   <Input
//                     label="Address"
//                     icon="location"
//                     placeholder="9 rue ibn khaldoun nabeul"
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("adress")}
//                     onBlur={handleBlur("adress")}
//                     value={values.adress}
//                   />
//                   <StyledInputLabel>Description</StyledInputLabel>
//                   <StyledTextInput
//                     multiline={true}
//                     numberOfLines={5}
//                     placeholder="We love to hear from you"
//                     placeholderTextColor={darklight}
//                     onChangeText={handleChange("description")}
//                     onBlur={handleBlur("description")}
//                     value={values.description}
//                   />
//                   <View style={{ margin: 5 }} />
//                   {
//                       !isSubmitting &&  <StyledButton onPress={handleSubmit}>
//                       <ButtonText>Submit</ButtonText>
//                     </StyledButton>
//                   }
//                   {
//                       isSubmitting && <StyledButton disabled={true}>
//                      <ActivityIndicator size="large" color={primary}/>
//                     </StyledButton>
//                   }

//                   <View style={{ margin: 7 }} />
//                 </View>
//               )}
//             </Formik>
//           </InnerContainer>
//         </ScrollView>
//       </KeyboardWrapper>
//     </>
//   );
//               };

// export default ContactUs;
