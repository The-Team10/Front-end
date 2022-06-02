import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Constants } from "../commun/Constants";

export default function BackButton({ goBack, white, inTop }) {
  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      onPress={goBack}
      style={[styles.container, inTop && { top: 15 }]}
    >
      <Image
        tintColor={white ? "white" : Constants.primaryColor}
        style={styles.image}
        source={require("../assets/arrow_back.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30 + getStatusBarHeight(),
    left: 10,
    zIndex: 1,
  },
  image: {
    width: 24,
    height: 24,
  },
});
