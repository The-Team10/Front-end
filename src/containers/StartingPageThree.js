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
const startup3 = require("../images/startup3.png");

const StartingPageThree = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Image
        resizeMode="contain"
        source={startup3}
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
        Beauty helping
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
        helping one person may not change the world but it could change the
        world for one person
      </Text>
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          position: "absolute",
          bottom: 50,
          paddingHorizontal: 40,
          backgroundColor: Constants.primaryColor,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("SignInAndOut")}
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
export default StartingPageThree;
