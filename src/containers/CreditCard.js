import React, { useEffect } from "react";
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

const windowWidth = Dimensions.get("window").width;

export default function CreditCard({ navigation }) {
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
        {/*  <TouchableOpacity
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
      </View>
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
          left: 0,
          bottom: 0,
          right: 0, //   borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
