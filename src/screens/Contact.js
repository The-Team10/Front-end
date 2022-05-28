import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React from "react";
  import { Formik } from "formik";
  import KeyboardWrapper from "../components/Kybord";
  import Input from "../components/Input";
  import styled from "styled-components/native";
  import Canstants from "expo-constants";
  import { StatusBar } from "expo-status-bar";
  
  const StatusBarHeight = Canstants.statusBarHeight;
  export const Colors = {
    primary: "#ffffff",
    secondary: "#e5e7eb",
    tertiary: "#1f2937",
    darklight: "#9ca3af",
    brand: "#309dff",
    green: "#309dff",
    red: "#ef4444",
  };
  const { primary, secondary, tertiary, darklight, brand, green } = Colors;
  const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
  `;
  const ContactText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: ${brand};
    margin-top: ${StatusBarHeight + 10}px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom:20px;
  `;
  const Desc = styled.Text`
    font-size: 19px;
    font-weight: 400;
    color: black;
    margin-top: 20px;
    letter-spacing: 1px;
    padding: 6px;
  `;
  const ContactContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    margin-bottom: 20px;
  `;
  const ContactBox = styled.TouchableOpacity`
    flex: 1;
    height: 70px;
    width: 120px;
    border-radius: 15px;
    background-color: ${green};
    align-items: center;
    justify-content: center;
    padding: 6px;
    margin: 6px;
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
  const ContactUs = ({ navigation }) => {
    const handleLogin = (Credentials, setSubmitting) => {};
    return (
        
      <>

       {/* <BackButton goBack={navigation.goBack} /> */}
       
        <StatusBar style="dark" />
        <ContactText>Contact Us</ContactText>
        <KeyboardWrapper>
          <ScrollView>
            <InnerContainer>
              <Desc>
                Have questions,suggestions,special requests or feedbacks? We'd
                love to hear from you. You can email us directly, call us, send us
                snail mail or use the form below.
              </Desc>
              {/* <TouchableOpacity onPress={() => navigation.navigate("Contact")}/> */}
              <ContactContainer>
                <ContactBox style={{ elevation: 25 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginBottom: 4,
                      color: "white",
                      fontWeight: "500",
                      letterSpacing: 1,
                    }}
                  >
                    Send us email:
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 4,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    info@allin.com
                  </Text>
                </ContactBox>
                <ContactBox style={{ elevation: 25 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginBottom: 4,
                      color: "white",
                      fontWeight: "500",
                      letterSpacing: 1,
                    }}
                  >
                    Call us:
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 4,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    +216 25 777 233
                  </Text>
                </ContactBox>
              </ContactContainer>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin(values, setSubmitting);
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
                    <Input
                      label="First Name"
                      icon="person"
                      placeholder=""
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("first")}
                      onBlur={handleBlur("first")}
                      value={values.first}
                    />
                    <Input
                      label="Last Name"
                      icon="person"
                      placeholder=""
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("last")}
                      onBlur={handleBlur("last")}
                      value={values.last}
                    />
                    <Input
                      label="Addresse email"
                      icon="mail"
                      placeholder="email@email.com"
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      keyboardType="email-address"
                      value={values.email}
                    />
                    <Input
                      label="Phone"
                      icon="device-mobile"
                      placeholder="+216 "
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      keyboardType="phone-pad"
                      value={values.phone}
                    />
                    <Input
                      label="Address"
                      icon="location"
                      placeholder="9 rue ibn khaldoun nabeul"
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("address")}
                      onBlur={handleBlur("address")}
                      value={values.address}
                    />
                    <StyledInputLabel>Description</StyledInputLabel>
                    <StyledTextInput
                      multiline={true}
                      numberOfLines={5}
                      placeholder="We love to hear from you"
                      placeholderTextColor={darklight}
                      onChangeText={handleChange("feedback")}
                      onBlur={handleBlur("feedback")}
                      value={values.feedback}
                    />
                    <View style={{ margin: 5 }} />
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>Submit</ButtonText>
                    </StyledButton>
                    <View style={{ margin: 7 }} />
                  </View>
                )}
              </Formik>
            </InnerContainer>
          </ScrollView>
        </KeyboardWrapper>
      </>
    );
  };
  
  export default ContactUs;
  
  