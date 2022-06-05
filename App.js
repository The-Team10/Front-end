import { StyleSheet } from "react-native";
import Router from "./src/router";
import { NativeBaseProvider } from "native-base";
import Events from "./src/screens/Events";

export default function App() {
  return <Router/>
//   return (
//   <NativeBaseProvider>
//  <Events />
  
//   </NativeBaseProvider>
//   );
 

  //  return <Router />;
  //  return <ResetPassword/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
