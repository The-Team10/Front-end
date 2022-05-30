import { StyleSheet} from "react-native";
import Router from "./src/router";

import Contact from "./src/screens/Contact"

export default function App() {
  console.disableYellowBox = true;
 return <Router />;
// return <Contact/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
