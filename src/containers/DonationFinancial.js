import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";

export default function DonationFinancial() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [donationName, setDonationName] = React.useState("");
  const [typeDonation, setTypeDonation] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <View>
      <Header top>Donation Financial</Header>

      <ScrollView>
        <Text
          style={{
            color: "black",
            fontSize: 17,
            paddingVertical: 5,
            paddingHorizontal: 10,
            textAlign: "left",
            fontWeigth: "bold",
          }}
        >
          My donitor is for{" "}
        </Text>
        
        <View style={{ flex: 1, paddingBottom: 100, marginHorizontal: 10 }}>
          <TextInput
            label="First name"
            returnKeyType="next"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Last name"
            returnKeyType="next"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Donation name"
            returnKeyType="next"
            value={donationName}
            onChangeText={(text) => setDonationName(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="type donation"
            returnKeyType="next"
            value={typeDonation}
            onChangeText={(text) => setTypeDonation(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Adress"
            returnKeyType="next"
            value={adress}
            onChangeText={(text) => setAdress(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Image url"
            returnKeyType="next"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Phone"
            returnKeyType="next"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TextInput
            label="Description"
            returnKeyType="next"
            value={description}
            onChangeText={(text) => setDescription(text)}
            autoCapitalize="none"
            style={{ borderRadius: 10 }}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              //    position: "absolute",
              //     bottom: 50,
              paddingHorizontal: 40,
              backgroundColor: Constants.primaryColor,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
