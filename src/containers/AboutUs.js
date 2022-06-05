import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Canstants from "expo-constants";
import Swiper from "../containers/swiperAb";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import { getStatusBarHeight } from "react-native-status-bar-height";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { LinearGradient } from "expo-linear-gradient";
const StatusBarHeight = Canstants.statusBarHeight;
const AboutUs = (props) => {
  return (
    <View style={{ flex: 1, top: getStatusBarHeight() }}>
      <StatusBar animated={true} backgroundColor={"#0072FF"} />
      <LinearGradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={props.navigation.goBack} />
        <Header white>About us </Header>
      </LinearGradient>
      <View style={{ top: 0 }}>
        <Swiper />
      </View>
    </View>
  );
};
export default AboutUs;























// import { View, Text, ScrollView } from "react-native";
// import React from "react";
// import styled from "styled-components/native";
// import { StatusBar } from "expo-status-bar";
// import Canstants from "expo-constants";
// import Swiper from "../containers/swiperAb";

// const StatusBarHeight = Canstants.statusBarHeight;

// const HeaderText = styled.Text`
//   font-size: 32px;
//   font-weight: bold;
//   color: #2986cc;
//   letter-spacing: 1px;
//   text-align: left;
//   margin-left: 20px;
//   margin-bottom: 10px;
//   margin-top: ${StatusBarHeight}px;
// `;
// const Container = styled.ScrollView`
//   display: flex;
//   flex: 1;
// `;
// const ContentText = styled.Text`
//   font-size: 22px;
//   font-weight: 500;
//   letter-spacing: 1px;
//   margin-left: 20px;
//   color: lightslategrey;
//   padding-right: 5px;
//   margin-bottom: 60px;
// `;

// const AboutUs = () => {
//   return (
//     <>
//       <StatusBar style="dark" />
//       <HeaderText>About Us</HeaderText>
//       <Container>
//         <ContentText>
//         We turn your compassion into hope for those in need around the world. 
//         </ContentText>
//         <Swiper/>
//       </Container>
//     </>
//   );
// };

// export default AboutUs;

