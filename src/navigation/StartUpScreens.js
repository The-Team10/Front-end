import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartingPageOne from "../containers/StartingPageOne";
import StartingPageTwo from "../containers/StartingPageTwo"
import StartingPageThree from "../containers/StartingPageThree"
import Password from "../containers/Password"
import Update from "../containers/Update"
const Stack = createStackNavigator();

export default function StartUpScreens() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingPageOne" component={StartingPageOne} />
        <Stack.Screen name="StartingPageTwo" component={StartingPageTwo} />
        <Stack.Screen name="StartingPageThree" component={StartingPageThree} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Update" component={Update} />
        
      </Stack.Navigator>
  );
}
