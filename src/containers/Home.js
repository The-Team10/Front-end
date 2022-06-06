import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ScrollView,

} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
// import { Header } from "react-native-elements";
import { Constants } from "../commun/Constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "jwt-decode";
import axios from "axios";
import EventCard from "../components/EventCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const img1 = require("../images/donate1.jpg");
const img2 = require("../images/donate2.jpg");
const img3 = require("../images/donate3.jpg");
const materialDonationLogo = require("../images/materialDonationLogo.png");

export default function Home(props) {
  const [event, setEvent] = useState([]);
  const [role, setRole] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("UsertokenInfo").then((res) => {
      const decoded = jwt(res);
      setRole(decoded.user.role);
    });
    axios
      .get("http://192.168.1.23:3000/api/getEvents")
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      setEvent([]);
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    return true; // Do nothing when back button is pressed
  };

  const [entries, setEnteries] = React.useState([
    {
      imgUrl: img1,
    },
    {
      imgUrl: img2,
    },
    {
      imgUrl: img3,
    },
  ]);
  const [index, setIndex] = React.useState(0);

  const isCarousel = React.useRef(null);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Image source={item.imgUrl} style={styles.image} />
      </View>
    );
  };

  const renderInnerView = (IconName, title, route, image) => {
    // return (
    //   <>
    //     <TouchableOpacity
    //       onPress={() => props?.navigation.navigate(route)}
    //       style={{
    //         backgroundColor: Constants.primaryColor,
    //         width: windowWidth * 0.45,
    //         height: windowWidth * 0.35,
    //         marginVertical: 8,
    //         borderRadius: 20,
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       {image ? (
    //         <Image source={materialDonationLogo} style={styles.image} />
    //       ) : (
    //         <FontAwesome5
    //           style={{ bottom: 5 }}
    //           name={IconName}
    //           size={60}
    //           color={Constants.white}
    //         />
    //       )}
    //       <Text style={{ color: "white" }}>{title}</Text>
    //     </TouchableOpacity>
    //   </>
    // );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 60,
      }}
    >
      <View
        style={{ height: windowHeight * 0.4, alignSelf: "center", top: 10 }}
      >
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={entries}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "darkblue",
              width: 120,
              height: 55,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              marginRight: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, letterSpacing: 0.1 }}>
              Events
            </Text>
          </TouchableOpacity>
          {role && role === "help_givers" ? (
            <>
              <TouchableOpacity
                style={{
                  backgroundColor: "skyblue",
                  width: 120,
                  padding: 12,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  marginRight: 4,
                }}
                onPress={() => {
                  props.navigation.navigate("list of Needs");
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, letterSpacing: 0.1 }}
                >
                  List of Needs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "skyblue",
                  width: 120,
                  padding: 12,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                }}
                onPress={() => {
                  props.navigation.navigate("Donation");
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, letterSpacing: 0.1 }}
                >
                  Donnation
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "skyblue",
                width: 120,
                padding: 12,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
              }}
              onPress={() => {
                props.navigation.navigate("HelpMe");
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, letterSpacing: 0.1 }}
              >
                need help
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View >
          <ScrollView style={{ }}>
            
           
        
            {event ?(
              event.map((item) => [
                
              <EventCard
              key={item.event_id}
              item={item}
              />
             
              ])):null}
            
            
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: windowWidth * 0.8,
    //  paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.3,
    borderRadius: 15,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
