import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";

export default function Header(props) {
  return (
    <Text
      style={[
        styles.header,
        props?.white && { color: "white" },
        props?.top && { paddingTop: 50 },
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
