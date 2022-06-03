
import React, { Component } from "react";
import { MultiSelect } from 'react-native-element-dropdown';
import { Platform, StyleSheet, ToastAndroid } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import {
  Text,
  Container,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Switch,
  StatusBar,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 1);
const windowWidth = Dimensions.get("window").width;
//import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
// import { CheckBox, Button } from "react-native-elements";
const ambulance = require("../images/ambulance.jpg");
const education1 = require("../images/education1.jpeg");
const food = require("../images/food.jpg");
const transport = require("../images/transport.jpg");


export default function DonationMaterial({ navigation }) {

  const [emergency, setEmergency] = React.useState("");
  const [foods, setFoods] = React.useState("");
  const [educatn, setEducatn] = React.useState("");
  const [transports, setTransport] = React.useState("");
  const [state, setstate] = React.useState("");
  const [value, setValue] = React.useState("");
  const [selected, setSelected] = useState([]);

  const options = ["One Month", "Three Months", "Six Months", "Twelve Months"];
  console.log(value);
  const type = [
    { label: "One Time", value: "One Time" },
    { label: "Monthly", value: "Monthly" },
  ];
  const suggestedAmount = [
    { label: "25 TND", value: 25 },
    { label: "50 TND", value: 50 },
    { label: "100", value: 100 },
    { label: "Other", value: "Other" },
  ];
  const suggestedAmounte = [
    { label: "25 TND", value: 25 },
    { label: "50 TND", value: 50 },
    { label: "100", value: 100 },
    { label: "Other", value: "Other" },
  ];


  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const renderInnerView = (title, image, state, setState) => {
    const fn = () => {};
    return (
      <View>
        
        <Image
          source={image}
          style={{
            width: "100%",
            height: windowWidth * 0.2,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius:15,
          }}
        />
        <View
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "700",
              alignSelf: "flex-start",
              top: "35%",
              left: 20,
            }}
          >
            {title}
          </Text>

          <Switch
            style={{ right: 15, bottom: 10 }}
            trackColor={{ false: "gray", true: "#81B0FF" }}
            thumbColor={Constants.primaryColor}
            onValueChange={() => setState(!state)}
            value={state}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar animated={true} backgroundColor={"#0072FF"} />
        <LinearGradient
          // Background Linear Gradient
          colors={["#0072FF", "rgba(33,150,243,0.7)"]}
          style={{
            width: windowWidth,
          }}
        >
          <BackButton inTop white goBack={navigation.goBack} />
          <Header white>Categories </Header>
        </LinearGradient>
        <ScrollView>
          <View style={styles.box}>
            <View style={styles.boxx}>
              <View style={styles.boxxx}>
                {renderInnerView(
                  "Emergency",
                  ambulance,
                  emergency,
                  setEmergency
                )}
              </View>
              <View style={styles.boxxx}>
                {renderInnerView("Education", education1, educatn, setEducatn)}
              </View>
              <View style={styles.boxxx}>
                {renderInnerView("Food", food, foods, setFoods)}
              </View>
              <View style={styles.boxxx}>
                {renderInnerView(
                  "Transport",
                  transport,
                  transports,
                  setTransport
                )}
              </View>
            </View>
          </View>
          <View>
            <Text black>Donation Type</Text>
            <RadioForm
              radio_props={type}
              initial={2}
              onPress={(value) => {
                ToastAndroid.show(value.toString(), ToastAndroid.SHORT),
                  setValue(value);
              }}
              buttonSize={15}
              buttonOuterSize={25}
              selectedButtonColor={"blue"}
              selectedLabelColor={"blue"}
              labelStyle={{ fontSize: 15 }}
              disabled={false}
              formHorizontal={false}
            />
          </View>
          <View>
            <Text black>Donation Amount</Text>

            <RadioForm
              radio_props={suggestedAmount}
              initial={2}
              onPress={(value) => {
                ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
              }}
              buttonSize={15}
              buttonOuterSize={25}
              selectedButtonColor={"blue"}
              selectedLabelColor={"blue"}
              labelStyle={{ fontSize: 15 }}
              disabled={false}
              formHorizontal={true}
            />
            {value === "Monthly" ? (
              <>
                <Text black>Monthly Donation Amount</Text>

                <RadioForm
                  radio_props={suggestedAmounte}
                  initial={2}
                  onPress={(value) => {
                    ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
                  }}
                  buttonSize={15}
                  buttonOuterSize={25}
                  selectedButtonColor={"blue"}
                  selectedLabelColor={"blue"}
                  labelStyle={{ fontSize: 15 }}
                  disabled={false}
                  formHorizontal={true}
                />
                <Text black>For How Many Months</Text>
                return(
    
   
      return (
        <View style={styles.item}>
          <Text style={styles.selectedTextStyle}>{item.label}</Text>
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
      );
   
  )

    return (
      <View style={styles.container}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={selected}
          search
          searchPlaceholder="Search..."
          onChange={item => {
            setSelected(item);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={renderItem}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                <AntDesign color="black" name="delete" size={17} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  
                {/* <SelectDropdown
	data={options}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		(slectedItem === "Monthly"){
      
    }
		 
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>  */}
              </>
            ) : null}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreditCard");
            
              axios({
                method :"post",
                url:`http://192.168.1.105:3000/api/helpgiver//donnationFin`,
               data:{ typeAmount, amount,category},
         
             })
             .then((response)=>{
               if(response.status === 200) {
                 alert("sended succsseful")
               }
             }).catch((error) => {
               console.log(error);
             });
            }
          }
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
        >
          <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  box: {
    // width: windowWidth * 0.3,
    //    height: windowWidth * 0.2,
    flex: 1,
  },
  boxx: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxxx: {
    marginTop: -50,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: "center",
    // alignItems: 'center',
  },
  container: { padding: 16 },
    dropdown: {
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'white',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
});
