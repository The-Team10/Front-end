import React, { useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Constants } from "../commun/Constants";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const spashAllIn = require("../images/spashAllIn.png");

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("StartUpScreens");
    }, 3000);
  }, []);
  return (
    <View style={styles.center}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Constants.primaryColor, "rgba(95,158,160,0.5)"]}
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={spashAllIn}
          style={{
            // flex: 1,
            width: windowWidth * 0.8,
            height: windowHeight * 0.3,
            borderRadius: 110,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 21,
            paddingVertical: 20,
            fontWeigth: "bold",
            textAlign: "center",
          }}
        >
          Welcome to our app !
        </Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Splash;
