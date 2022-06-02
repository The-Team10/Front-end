import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Reviews from "../containers/Reviews";
import Statistics from "../containers/Statistics";
import AntDesign from "react-native-vector-icons/AntDesign";
import Profile from "../containers/Profile";
import { Text } from "react-native";
import { Constants } from "../commun/Constants";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "#FAFBFA",
          elevation: 8,
          //   height: 68,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let colorr = focused ? Constants.primaryColorRouter : "gray";
          let sizes = focused ? 23 : 20;

          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Reviews") {
            iconName = "switcher";
          }
          if (route.name === "Statistics") {
            iconName = "barschart";
          }
          if (route.name === "Profile") {
            iconName = "barschart";
          } else if (route.name === "AboutUs") {
            iconName = "team";
          }
          // You can return any component that you like here!
          return <AntDesign name={iconName} size={sizes} color={colorr} />;
        },
        tabBarLabel: ({ focused }) => {
          let title;
          let colorr = focused ? Constants.primaryColorRouter : "gray";
          let sizes = focused ? 13 : 11;

          if (route.name === "Home") {
            title = "Home";
          }
          if (route.name === "Reviews") {
            title = "Reviews";
          }
          if (route.name === "Statistics") {
            title = "Statistics";
          }
          if (route.name === "Profile") {
            title = "Profile";
          } else if (route.name === "AboutUs") {
            title = "About Us";
          }
          // You can return any component that you like here!
          return (
            <Text
              style={{
                color: Constants.primaryColorRouter,
                fontSize: sizes,
                color: colorr,
                fontWeight: "600",
                bottom: 3,
              }}
            >
              {title}
            </Text>
          );
        },
        tabBarActiveTintColor: Constants.primaryColorRouter,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="Statistics" component={Statistics} />
       <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

// import React from 'react'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'

// export default function Dashboard({ navigation }) {
//   return (
//     <Background>
//       <Logo />
//       <Header>Let’s start</Header>
//       <Paragraph>
//         Your amazing app starts here. Open you favorite code editor and start
//         editing this project.
//       </Paragraph>
//       <Button
//         mode="outlined"
//         onPress={() =>
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'StartScreen' }],
//           })
//         }
//       >
//         Logout
//       </Button>
//     </Background>
//   )
// }
