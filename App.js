import { StyleSheet} from "react-native";
import Router from "./src/router";
// import {createDrawerNavigator} from '@react-navigation/drawer'
// import {NavigationContainer} from '@react-navigation/native'
import Contact from "./src/screens/Contact"
//  const Drawer = createDrawerNavigator();
//  import HomeScreen from "./src/screens/HomeScreen"
//  import SettingScreen from "./src/screens/SettingScreen"
export default function App() {
  console.disableYellowBox = true;
  // return <Contact />
//     <NavigationContainer>
// <Drawer.Navigator intialRouteName="Home">
//   <Drawer.Screen name="Home" component={HomeScreen}/>
//   <Drawer.Screen name="setting" component={SettingScreen}/>
// </Drawer.Navigator>
//     </NavigationContainer>
  
 
  
  return <Router />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
