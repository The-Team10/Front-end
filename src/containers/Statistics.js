import * as React from "react";
import { Text, View, StatusBar, Dimensions, Slider } from "react-native";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const img8 = require("../images/img8.jpg");

import AntDesign from "react-native-vector-icons/FontAwesome5";
export default function Statistics(props) {
  const [n, setN] = React.useState(10);
  const [m, setM] = React.useState(20);
  const [x, setX] = React.useState(40);
  const [y, setY] = React.useState(50);

  /*   const renderTexture = (firstText, secondText) => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 5,
          paddingHorizontal: 20,
          height: 50,
          borderBottomWidth: 0.7,
          borderLeftWidth: 0.7,
          borderRightWidth: 0.7,
          borderColor: "gray",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.02)",
          //  elevation: 0.5,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 15 }}>{firstText}</Text>
        <Text>{secondText}</Text>
      </View>
    );
  }; */

  const renderTexture = (firstText, secondText, icon) => {
    return (
      <View
        style={{
          height: windowWidth * 0.42,
          width: windowWidth * 0.42,
          backgroundColor: "white",
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          size={25}
          name={icon}
          color={Constants.primaryColor}
          style={{ flex: 0.3, alignSelf: "flex-start", left: 20, top: 20 }}
        />
        <View style={{ flex: 0.3, alignItems: "center" }}>
          <Text style={{ fontWeight: "500", fontSize: 15 }}>{firstText}</Text>
          <Text
            style={{
              color: "rgba(0,0,0,0.3)",
              fontweigth: "500",
              fontsize: 13,
            }}
          >
            {secondText}
          </Text>
        </View>
      </View>
    );
  };

  const renderSlider = (value, setValue, maximumValue, icon, number, color) => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 0.25,
          backgroundColor: "transparent",
        }}
      >
        <Slider
          onChange={() => {
            setValue(value);
          }}
          minimumTrackTintColor={color}
          thumbTintColor={"rgba(33,150,243,0.0)"}
          maximumTrackTintColor={"rgba(33,150,243,0.5)"}
          //   disabled={true}
          value={value}
          maximumValue={maximumValue}
          style={{
            transform: [{ rotate: "270deg" }],
            width: windowWidth * 0.4,
            height: windowHeight * 0.2,
            top: 20,
          }}
        />
        <View style={{ position: "absolute", bottom: 0 }}></View>
        <AntDesign
          size={17}
          name={icon}
          color={color}
          style={{ paddingTop: 15 }}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "600",
            paddingTop: 10,
            fontSize: 14,
          }}
        >
          {number}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        // Background Linear Gradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={props.navigation.goBack} />
        <Header white>Statistics </Header>
      </LinearGradient>
      <View
      /*     style={{
          // height: windowHeight * 0.3,
          marginVertical: 20,
          flexDirection: "row",
          flex: 1,
          //   justifyContent: "space-around",
        }} */
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(33,150,243,0.7)", "rgba(33,150,243,0.4)"]}
          style={{
            width: windowWidth,
            //   marginVertical: 20,
            flexDirection: "row",
            paddingBottom: 80,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,

            // flex: 1,
          }}
        >
          {renderSlider(n, setN, 50, "hand-holding-heart", 133, "red")}
          {renderSlider(m, setM, 50, "hand-holding-heart", 133, "yellow")}
          {renderSlider(x, setX, 50, "hand-holding-heart", 133, "green")}
          {renderSlider(y, setY, 50, "hand-holding-heart", 133, "white")}
        </LinearGradient>
      </View>
      <View
        style={{
          height: windowHeight * 0.3,
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          top: 1,
        }}
      ></View>
      <View
        style={{
          // paddingTop: 30,
          top: -25,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {renderTexture("Food", "19 10 2010", "hand-holding-heart")}
        {renderTexture("Givers", "19 10 2010", "hand-holding-heart")}
      </View>
      <View
        style={{
          // paddingTop: 30,
          // top: -25,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {renderTexture("Donators", "19 10 2010", "hand-holding-heart")}
        {renderTexture("Seekers", "19 10 2010", "hand-holding-heart")}
      </View>
    </View>
  );
}
