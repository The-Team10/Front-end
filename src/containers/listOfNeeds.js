import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import axios from "axios";
const windowWidth = Dimensions.get("window").width;

const HelpMe = (navigation) => {
  const [needs, setNeeds] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios({
      method: "get",

      url: `http://192.168.11.163:3000/api/helpgiver/listNeeds`,


      //  data:credentials
    })
      .then((response) => {
        if (response.status == 200) {
          setNeeds(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setNeeds();
    };
  }, []);

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

        List Of needs
      </Text>
      {needs ? (
        needs.map((elemnt) => [
          <TouchableOpacity
            style={{
              elevation: 40,
              width: "100%",
              height: 250,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              backgroundColor: "powderblue",
              alignSelf: "center",
            }}
            onPress={() => {
              setVisible(!visible);
            }}
            key={elemnt.need_id}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={() => setVisible(!visible)}

        <BackButton inTop white goBack={navigation.goBack} />
        <Header white>Material Donate </Header>
      </LinearGradient>

      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            letterSpacing: 0.2,
            color: "deepskyblue",
            paddingTop: 100,
            paddingLeft: 15,
            marginBottom: 25,
          }}
        >

              key={elemnt.need_id}
            >
              <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(!visible)}
                key={elemnt.need_id}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 25,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "lightgray",
                      borderRadius: 15,
                      padding: 20,
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.35,
                      shadowRadius: 6,
                      elevation: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "500",
                        letterSpacing: 0.2,
                        padding: 20,
                        marginVertical: 10,
                      }}
                    >
                      first name: {elemnt.first_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "500",
                        letterSpacing: 0.2,
                        padding: 20,
                        marginVertical: 10,
                      }}
                    >
                      last name: {elemnt.last_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "500",
                        letterSpacing: 0.2,
                        padding: 20,
                        marginVertical: 10,
                      }}
                    >
                      phone: {elemnt.phone}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "500",
                        letterSpacing: 0.2,
                        padding: 20,
                        marginVertical: 10,
                      }}
                    >
                      adress: {elemnt.adress}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setVisible(!visible);
                      }}
                      style={{
                        backgroundColor: "red",
                        padding: 6,
                        borderRadius: 15,
                        marginTop: 50,
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "600" }}>
                        close
                      </Text>
                    </Pressable>
                  </View>
                </View>

              </View>
            </Modal>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.date}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.categorie}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.region}
          
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "500", letterSpacing: 0.2 }}
            >
              {elemnt.description}
          
            </Text>
          
          </TouchableOpacity>,
        ])
      ) : (
        <Text> list </Text>
      )}
    </ScrollView>

    </View>

  );
};

export default HelpMe;
