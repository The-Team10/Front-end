import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./components/Splash";
import TabNavigator from "./navigation/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import StartUpScreens from "./navigation/StartUpScreens";
import SignInAndOut from "./navigation/SignInAndOut";
import DonationMaterial from "./containers/DonationMaterial";
import DonationFinancial from "./containers/DonationFinancial";
import Contact from "./screens/Contact";
import CreditCard from "./containers/CreditCard";
import listOfNeeds from "./containers/listOfNeeds";
import Donation from "./containers/Donation";
import HelpMe from "./containers/HelpMe";

import { Provider } from "react-native-paper";
import { theme } from "./core/theme";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>


          <Stack.Screen name="TabNavigator" component={TabNavigator} />


       

          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="StartUpScreens" component={StartUpScreens} />
          <Stack.Screen name="SignInAndOut" component={SignInAndOut} />
          <Stack.Screen name="CreditCard" component={CreditCard} />
          <Stack.Screen name="DonationMaterial" component={DonationMaterial} />

          <Stack.Screen name="Donation" component={Donation} />
          <Stack.Screen name="HelpMe" component={HelpMe} />
          
          <Stack.Screen name="list of Needs" component={listOfNeeds} />
          <Stack.Screen name="Contact" component={Contact} />

          <Stack.Screen
            name="DonationFinancial"
            component={DonationFinancial}
          />

         
        



          
         
       
         

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
