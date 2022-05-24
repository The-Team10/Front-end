import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./components/Splash";
import TabNavigator from "./navigation/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import StartUpScreens from "./navigation/StartUpScreens";
import SignInAndOut from "./navigation/SignInAndOut";
import { Provider } from "react-native-paper";
import { theme } from "./core/theme";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="StartUpScreens" component={StartUpScreens} />
          <Stack.Screen name="SignInAndOut" component={SignInAndOut} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}