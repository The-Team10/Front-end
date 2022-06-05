import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResetPassword = () => {
  
  const [email, setEmail] = useState("");
  const [boolean, setBoolean] = useState(true);
  const [boolean1, setBoolean1] = useState(true);
  const [resetCode, setResetCode] = useState("");
  const [hashedCode, setHashedCode] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendMessage = () => {
   axios.post('http://192.168.11.217:3000/api/reset',{email:email})
      .then((response) => {
        if(response.data.message === 'email has been send'){
          // alert(response.data.message);
        alert(response.data.message);
        AsyncStorage.setItem("resetToken", response.data.resetToken);
        AsyncStorage.getItem("resetToken", (err, result) => {
          setHashedCode(result);
        });
        setBoolean(false);
        }else{
          // alert(response.data)
          alert(response.data)
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verify = async() => {
    axios({
      method: "post",
      url: `http://192.168.11.217:3000/api/verify`,
      data: { resetCode, hashedCode },
    })
      .then((response) => {
        if(response.data==='you can change your password'){
          AsyncStorage.removeItem("resetToken")
          
          // alert(response.data);
          console.log(response.data)
          setBoolean1(false)
        }alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePassword = () => {
    axios({
      method: "post",
      url: `http://192.168.11.217:3000/api/update`,
      data: { email,newpassword, confirmPassword },
    })
      .then((response) => {
        if(response.data==='password updated successfully'){
          alert(response.data);
          navigation.navigate("Login");
        }alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.bord}></View>
      <View style={styles.all}>
        
        { boolean1 ? 
        <>{boolean ? (
            <>
              <Text style={styles.title}>Your email </Text>
  
              <Text>an email will be sent to your email </Text>
  
              <TextInput
                style={styles.input}
                onChangeText={(newText) => setEmail(newText)}
                placeholder="  email..."
              />
              <Pressable onPress={sendMessage} style={styles.button}>
                <Text style={styles.valid}>send</Text>
              </Pressable>
            </>
          ) 
          :
          (
            <>
              <Text style={styles.title}>verify </Text>
              <Text>put the code here </Text>
              <TextInput
                style={styles.input}
                onChangeText={(newText) => setResetCode(newText)}
                placeholder="  verify..."
              />
              <Pressable style={styles.button} onPress={verify}>
                <Text style={styles.valid}>verify</Text>
              </Pressable>
            </>
          )}</>
          
          :
          
          
          
          
          <>
              <Text style={styles.title}>update </Text>
              <Text>update your password </Text>
              <TextInput
                style={styles.input}
                onChangeText={(newText) => setNewPassword(newText)}
                placeholder="  new password..."
              />
                <TextInput
                style={styles.input}
                 onChangeText={(newText) => setConfirmPassword(newText)}
                placeholder="  confirm your new password..."
              />
              <Pressable style={styles.button} onPress={updatePassword} >
                <Text style={styles.valid}>update</Text>
              </Pressable>
            </>
            }
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    input: {
      height: 40,
      margin: 12,
      borderWidth: 10,
      padding: 10,
      position: "relative",
    },
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
    position: "absolute",
    bottom: 20,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "10%",
    marginBottom: "10%",
  },
  bord: {
    height: "10%",
    backgroundColor: "#244E81",
  },
  all: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
})

/////////////////////////////////////////



// import React, { useState } from 'react'
// import Background from '../components/Background'
// import BackButton from '../components/BackButton'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import TextInput from '../components/TextInput'
// import Button from '../components/Button'
// import { emailValidator } from '../helpers/emailValidator'

// export default function ResetPasswordScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: '', error: '' })

//   const sendResetPasswordEmail = () => {
//     const emailError = emailValidator(email.value)
//     if (emailError) {
//       setEmail({ ...email, error: emailError })
//       return
//     }
//     navigation.navigate('LoginScreen')
//   }

//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Restore Password</Header>
//       <TextInput
//         label="E-mail address"
//         returnKeyType="done"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//         description="You will receive email with password reset link."
//       />
//       <Button
//         mode="contained"
//         onPress={sendResetPasswordEmail}
//         style={{ marginTop: 16 }}
//       >
//         Send Instructions
//       </Button>
//     </Background>
//   )
// }
