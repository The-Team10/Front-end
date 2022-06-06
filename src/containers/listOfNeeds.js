import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const HelpMe = () => {
  const [needs, setNeeds] = useState();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  useEffect(() => {
    axios({
      method: "get",
      url: `http://192.168.1.23:3000/api/helpgiver/listNeeds`,
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
        List Of needs
      </Text>
      {needs ? (
        needs.map((elemnt) => [
          <TouchableOpacity
            style={{
              elevation: 40,
              width: "100%",
              height: 300,
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
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Donation");
                      setVisible(!visible);
                    }}
                    style={{
                      backgroundColor: "black",
                      padding: 6,
                      borderRadius: 15,
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "600" }}>
                      choose
                    </Text>
                  </Pressable>
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
  );
};
export default HelpMe;
const styles = StyleSheet.create({});