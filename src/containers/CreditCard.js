import React, { useEffect,useState } from "react";
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FancyAlert } from 'react-native-expo-fancy-alerts';

// import {  useConfirmPayment } from "@stripe/stripe-react-native";

const windowWidth = Dimensions.get("window").width;
const stripe = ()=>{
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch("http://192.168.11.217:3000/api/payment/payFinancial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  
}
export default function CreditCard({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const closeAlert = React.useCallback(() => {
    setVisible(false);
  });

  const onChange = (form) => console.log(form);
  const [selected, setSelected] = React.useState(false);
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
      <View style={{ paddingTop: 30 }}>
        <CreditCardInput onChange={onChange} />
        {/* <TouchableOpacity
          onPress={() => setSelected(!selected)}
          style={{
            margin: 15,
            paddingTop: 40,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: 14,
              letterSpacing: 2,
              marginHorizontal: 15,
            }}
          >
            xxxx xxxx xxxx 4587
          </Text>
          {selected ? (
            <AntDesign
              name={"checkcircleo"}
              size={15}
              color={Constants.primaryColor}
              style={{ top: 1 }}
            />
          ) : (
            <Entypo
              name={"circle"}
              size={15}
              color={"gray"}
              style={{ top: 1 }}
            />
          )}
        </TouchableOpacity> */}
         <TouchableOpacity
         onPress={toggleAlert}
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
          bottom: -70,
          left: 90,
          right: 90,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
      </View>
     <View>
     <FancyAlert
        visible={visible}
        icon={
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1E90FF",
              borderRadius: 50,
              width: "100%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>✓</Text>
          </View>
        }
        style={{ backgroundColor: "white" }}
      >
        <Text style={{ marginTop: -16, marginBottom: 32 }}>sended successful check your email</Text>
        <TouchableOpacity style={{
    borderRadius: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: "stretch",
    backgroundColor: "#1E90FF",
    marginTop: -20,
    minWidth: "41%",
    paddingHorizontal: 10,
  }} onPress={closeAlert}>
        <Text style={{btnText: {
    color: "#FFFFFF",
  },}}>OK</Text>
      </TouchableOpacity>  
      <Text style={{ fontSize:25, marginTop: -16, marginBottom: 32}}>
      
      
      </Text>
      
      </FancyAlert>


     </View>
    </View>
  );
}
