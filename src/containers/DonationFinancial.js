import  React, { Component } from "react";
<<<<<<< HEAD
=======
// import SelectDropdown from 'react-native-select-dropdown';
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
import{
  Platform,
  StyleSheet,
  ToastAndroid
} from 'react-native';
<<<<<<< HEAD
=======

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
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
  RadioButtonLabel
} from "react-native-simple-radio-button";
<<<<<<< HEAD
=======

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));
const windowWidth = Dimensions.get("window").width;
//import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
// import { CheckBox, Button } from "react-native-elements";
const ambulance = require("../images/ambulance.jpg");
const education1 = require("../images/education1.jpeg");
const food = require("../images/food.jpg");
const transport  = require("../images/transport.jpg");
export default function DonationMaterial({ navigation }) {
<<<<<<< HEAD
=======

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
  const [emergency, setEmergency] = React.useState("");
  const [foods, setFoods] = React.useState("");
  const [educatn, setEducatn] = React.useState("");
  const [transports, setTransport] = React.useState("");
  const [state, setstate] = React.useState("");
  const [value, setValue] = React.useState("");
<<<<<<< HEAD
=======
  const options = ["One Month","Three Months", "Six Months", "Twelve Months"]
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
  console.log(value)
  const type = [
    {label: "One Time", value: "One Time"},
    {label: "Monthly", value: "Monthly"}
  ];
  const suggestedAmount = [
    {label: "25 TND", value: 25},
    {label: "50 TND",value: 50},
    {label: "100",value: 100},
    {label: "Other", value: "Other"},
  ];
  const suggestedAmounte = [
    {label: "25 TND", value: 25},
    {label: "50 TND", value: 50},
    {label: "100", value: 100},
    {label: "Other", value: "Other"},
  ];
<<<<<<< HEAD
  const renderInnerView = (title, image, state, setState) => {
    return (
      <View>
=======
 

  const renderInnerView = (title, image, state, setState) => {
    return (
      <View
        // style={{
        
        //   width: windowWidth * 0.3,
        //   //  height: windowWidth * 0.2,
          
        //   marginVertical: 8,
        //   borderRadius: 20,
        //   flexDirection: 'row',
        //   alignSelf: "center",
          
         
        //   elevation: 20,
        // }}
      >
        
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
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
<<<<<<< HEAD
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderRadius: 10,
=======
            
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderRadius: 10,
            
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "700",
<<<<<<< HEAD
=======
             
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
              alignSelf: "center",
              top: "70%",
              left: 20,
            }}
          >
            {title}
          </Text>
<<<<<<< HEAD
=======
         
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
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
    <><View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        // Background Linear Gradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
<<<<<<< HEAD
=======
         
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
        }}
      >
        <BackButton inTop white goBack={navigation.goBack} />
        <Header white>Categories </Header>
      </LinearGradient>
      <ScrollView>
        <View style={ styles.box}>
          <View style={ styles.boxx}>
          <View style={ styles.boxxx}>{renderInnerView("Emergency", ambulance, emergency, setEmergency)}</View>
          <View style={ styles.boxxx}>{renderInnerView("Education", education1, educatn, setEducatn)}</View>
          <View style={ styles.boxxx}>{renderInnerView("Food", food, foods, setFoods)}</View>
<<<<<<< HEAD
          <View style={ styles.boxxx}>{renderInnerView("Transport", transport,transports,  setTransport)}</View>
          </View>
        </View><View >
        <Text black>Donation Type</Text>
        <RadioForm
=======
          <View style={ styles.boxxx}>{renderInnerView("Transport", transport,transports,  setTransport)}</View> 
          </View>
        </View><View >
        <Text black>Donation Type</Text> 
        <RadioForm
        
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
          radio_props={type}
          initial={2}
          onPress={(value) => { ToastAndroid.show(value.toString(), ToastAndroid.SHORT),setValue(value) } }
          buttonSize={15}
          buttonOuterSize={25}
          selectedButtonColor={'blue'}
          selectedLabelColor={'blue'}
          labelStyle={{ fontSize: 15, }}
          disabled={false}
          formHorizontal={false} />
<<<<<<< HEAD
      </View>
      <View>
      <Text black>Donation Amount</Text>
      <RadioForm
=======
          
      </View>
      <View>
      <Text black>Donation Amount</Text> 



      <RadioForm
        
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
          radio_props={suggestedAmount}
          initial={2}
          onPress={(value) => { ToastAndroid.show(value.toString(), ToastAndroid.SHORT); } }
          buttonSize={15}
          buttonOuterSize={25}
          selectedButtonColor={'blue'}
          selectedLabelColor={'blue'}
          labelStyle={{ fontSize: 15, }}
          disabled={false}
          formHorizontal={true} />
      {
          value === "Monthly" ?
          <>
<<<<<<< HEAD
                <Text black>Monthly Donation Amount</Text>
                    <RadioForm
=======
                <Text black>Monthly Donation Amount</Text>  

                    <RadioForm
       
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
          radio_props={suggestedAmounte}
          initial={2}
          onPress={(value) => { ToastAndroid.show(value.toString(), ToastAndroid.SHORT); } }
          buttonSize={15}
          buttonOuterSize={25}
          selectedButtonColor={'blue'}
          selectedLabelColor={'blue'}
          labelStyle={{ fontSize: 15, }}
          disabled={false}
          formHorizontal={true} />
<<<<<<< HEAD
                <Text black>For How Many Months</Text>
=======
                <Text black>For How Many Months</Text> 
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
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
          </>
          :
          null
        }
     </View>
<<<<<<< HEAD
=======
      

     
>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
     </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreditCard")}
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
<<<<<<< HEAD
    </View></>
  );
};
=======

      
    </View></>
  );
  


};

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
const styles = StyleSheet.create({
  box: {
    // width: windowWidth * 0.3,
    //    height: windowWidth * 0.2,
      flex: 1,
<<<<<<< HEAD
=======

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
  },
  boxx: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxxx:{
    marginTop:-50,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
     justifyContent: 'center',
    // alignItems: 'center',
<<<<<<< HEAD
  }
})














=======
    
  }
})

>>>>>>> 983b9d38508b4f48984c945dc8a59f22f0b3d191
