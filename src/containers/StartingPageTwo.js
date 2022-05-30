import React, { useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Constants } from "../commun/Constants";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const startup2 = require("../images/startup2.png");

const StartingPageTwo = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Image
        resizeMode="contain"
        source={startup2}
        style={{
          // flex: 1,
          width: windowWidth * 0.8,
          height: windowHeight * 0.3,
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          color: "black",
          fontSize: 17,
          paddingVertical: 20,
          textAlign: "center",
          fontWeigth: "bold",
        }}
      >
        Help people
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 15,
          paddingVertical: 20,
          textAlign: "center",
          fontWeigth: "bold",
        }}
      >
        even when you know they can't help you back.
      </Text>

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
        onPress={() => navigation.navigate("StartingPageThree")}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Next</Text>
      </TouchableOpacity>
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
export default StartingPageTwo;
