import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Switch,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
const windowWidth = Dimensions.get("window").width;
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
const education = require("../images/education.png");
const emergency = require("../images/emergency.jpg");
const food = require("../images/food.jpg");
export default function DonationMaterial({ navigation }) {
  const [emergncy, setEmergency] = React.useState("");
  const [foods, setFoods] = React.useState("");
  const [educatn, setEducatn] = React.useState("");

  const renderInnerView = (title, image, state, setState) => {
    return (
      <View
        style={{
          backgroundColor: "gray",
          width: windowWidth * 0.9,
          //  height: windowWidth * 0.2,
          marginVertical: 8,
          borderRadius: 20,
          flexDirection: "column",
          alignSelf: "center",
          elevation: 10,
        }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: windowWidth * 0.2,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "700",
              top: "30%",
              left: 20,
            }}
          >
            {title}
          </Text>

          <Switch
            style={{ right: 15, bottom: 10 }}
            trackColor={{ false: "gray", true: "#81b0ff" }}
            thumbColor={Constants.primaryColor}
            onValueChange={() => setState(!state)}
            value={state}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={navigation.goBack} />
        <Header white>Categories</Header>
      </LinearGradient>

      <ScrollView>
        <View style={{ flex: 1, flexDirection: "column", paddingTop: 15 }}>
          {renderInnerView("Education", education, educatn, setEducatn)}
          {renderInnerView("Emergency", emergency, emergncy, setEmergency)}

          {renderInnerView("Food", food, foods, setFoods)}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreditCard")}
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
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
