import * as React from "react";
import { Text, View, StatusBar, Dimensions, Slider } from "react-native";
import Header from "../components/Header";
import { Constants } from "../commun/Constants";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const img8 = require("../images/img8.jpg");
import AntDesign from "react-native-vector-icons/FontAwesome5";
export default function Statistics(props) {
  const [n, setN] = React.useState(50);
  const [m, setM] = React.useState(25);
  const [x, setX] = React.useState(40);
  const [y, setY] = React.useState(15);
  const renderTexturee = (firstText, secondText, icon) => {
    return (
      <View
        style={{
          height: windowWidth * 0.42,
          width: windowWidth,
          backgroundColor: "white",
          borderRadius: 25,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontWeight: "300", fontSize: 18, marginTop: 20 }}>
            Your Portfolio Ballance
          </Text>
          <Text
            style={{
              marginTop: -80,
              fontWeigth: "900",
              fontSize: 30,
              color: "#2196F3",
            }}
          >
            12,724.33 DN
          </Text>
        </View>
      </View>
    );
  };
  const renderTexture = (firstText, secondText, icon) => {
    return (
      <View
        style={{
          height: windowWidth * 0.42,
          width: windowWidth * 0.42,
          backgroundColor: "#0CD3C3",
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 0.5, alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 15,
              color: "white",
              marginTop: 20,
            }}
          >
            {firstText}
          </Text>
          <Text
            style={{
              alignItems: "center",
              fontweigth: "bold",
              fontSize: 30,
              color: "white",
              marginTop: 30,
            }}
          >
            {secondText}
          </Text>
        </View>
      </View>
    );
  };
  const renderSlider = (
    value,
    setValue,
    maximumValue,
    icon,
    number,
    color,
    width
  ) => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 0.25,
          backgroundColor: "transparent",
          size: 800,
        }}
      >
        <Slider
          onChange={() => {
            setValue(value);
          }}
          minimumTrackTintColor={color}
          thumbTintColor={"rgba(33,150,243,0.0)"}
          maximumTrackTintColor={"rgba(33,150,243,0.5)"}
          //   disabled={true}
          value={value}
          maximumValue={maximumValue}
          style={{
            transform: [{ rotate: "270deg" }],
            width: windowWidth * 0.4,
            height: windowHeight * 0.2,
            top: 20,
            scaleY: 2.2,
          }}
          width={width}
        />
        <View style={{ position: "absolute", bottom: 0 }}></View>
        <AntDesign
          size={17}
          name={icon}
          color={"white"}
          style={{ paddingTop: 15 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            paddingTop: 10,
            fontSize: 14,
          }}
        >
          {number}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={"white"} />
      <LinearGradient
        colors={["#0072FF", "rgba(33,150,243,0.7)"]}
        style={{
          width: windowWidth,
        }}
      >
        <BackButton inTop white goBack={props.navigation.goBack} />
        <Header white>Statistics </Header>
      </LinearGradient>
      <View >
        <LinearGradient
          colors={["rgba(33,150,243,0.7)", "rgba(33,150,243,0.4)"]}
          style={{
            width: windowWidth,
            flexDirection: "row",
            paddingBottom: 100,
          }}
        >
          {renderSlider(n, setN, 50, "book", 133, "#D418C1", "10%")}
          {renderSlider(m, setM, 50, "heartbeat", 133, "red")}
          {renderSlider(x, setX, 50, "hamburger", 133, "#3FF819rr")}
          {renderSlider(y, setY, 50, "bus", 133, "#D9E00E")}
        </LinearGradient>
      </View>
      <View
        style={{
          height: windowHeight * 0.3,
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          top: 1,
        }}
      ></View>
      <View
        style={{
          top: -50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {renderTexturee("Food", "19 10 2010", "hand-holding-heart")}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {renderTexture("Help Givers", "98")}
        {renderTexture("Help Seekers", "120")}
      </View>
    </View>
  );
}













// import * as React from "react";
// import { Text, View, StatusBar, Dimensions, Slider } from "react-native";
// import Header from "../components/Header";
// import { Constants } from "../commun/Constants";
// import BackButton from "../components/BackButton";
// import { LinearGradient } from "expo-linear-gradient";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// const img8 = require("../images/img8.jpg");
// import AntDesign from "react-native-vector-icons/FontAwesome5";
// export default function Statistics(props) {
//   const [n, setN] = React.useState(50);
//   const [m, setM] = React.useState(25);
//   const [x, setX] = React.useState(40);
//   const [y, setY] = React.useState(15);
//   /*   const renderTexture = (firstText, secondText) => {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           marginHorizontal: 5,
//           paddingHorizontal: 20,
//           height: 50,
//           borderBottomWidth: 0.7,
//           borderLeftWidth: 0.7,
//           borderRightWidth: 0.7,
//           borderColor: "gray",
//           justifyContent: "space-between",
//           alignItems: "center",
//           backgroundColor: "rgba(0,0,0,0.02)",
//           //  elevation: 0.5,
//           borderRadius: 5,
//         }}
//       >
//         <Text style={{ fontWeight: "700", fontSize: 15 }}>{firstText}</Text>
//         <Text>{secondText}</Text>
//       </View>
//     );
//   }; */
//   const renderTexturee = (firstText, secondText, icon) => {
//     return (
//       <View
//         style={{
//           height: windowWidth * 0.42,
//           width: windowWidth,
//           backgroundColor: "white",
//           borderRadius: 25,
//           borderBottomLeftRadius: 0,
//           borderBottomRightRadius: 0,
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <View
//           style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//         >
//           <Text style={{ fontWeight: "300", fontSize: 18, marginTop: 20 }}>
//             Your Portfolio Ballance
//           </Text>
//           <Text
//             style={{
//               marginTop: -80,
//               fontWeigth: "900",
//               fontSize: 30,
//               color: "#2196F3",
//             }}
//           >
//             12,724.33 DN
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   const renderTexture = (firstText, secondText, icon) => {
//     return (
//       <View
//         style={{
//           height: windowWidth * 0.42,
//           width: windowWidth * 0.42,
//           backgroundColor: "#0CD3C3",
//           borderRadius: 25,
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <View style={{ flex: 0.5, alignItems: "center" }}>
//           <Text
//             style={{
//               fontWeight: "500",
//               fontSize: 15,
//               color: "white",
//               marginTop: 20,
//             }}
//           >
//             {firstText}
//           </Text>
//           <Text
//             style={{
//               alignItems: "center",
//               fontweigth: "bold",
//               fontSize: 30,
//               color: "white",
//               marginTop: 30,
//             }}
//           >
//             {secondText}
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   const renderSlider = (
//     value,
//     setValue,
//     maximumValue,
//     icon,
//     number,
//     color,
//     width
//   ) => {
//     return (
//       <View
//         style={{
//           flexDirection: "column",
//           alignItems: "center",
//           flex: 0.25,
//           backgroundColor: "transparent",
//           size: 800,
//         }}
//       >
//         <Slider
//           onChange={() => {
//             setValue(value);
//           }}
//           minimumTrackTintColor={color}
//           thumbTintColor={"rgba(33,150,243,0.0)"}
//           maximumTrackTintColor={"rgba(33,150,243,0.5)"}
//           //   disabled={true}
//           value={value}
//           maximumValue={maximumValue}
//           style={{
//             transform: [{ rotate: "270deg" }],
//             width: windowWidth * 0.4,
//             height: windowHeight * 0.2,
//             top: 20,
//             scaleY: 2.2,
//           }}
//           width={width}
//         />
//         <View style={{ position: "absolute", bottom: 0 }}></View>
//         <AntDesign
//           size={17}
//           name={icon}
//           color={"white"}
//           style={{ paddingTop: 15 }}
//         />
//         <Text
//           style={{
//             color: "white",
//             fontWeight: "600",
//             paddingTop: 10,
//             fontSize: 14,
//           }}
//         >
//           {number}
//         </Text>
//       </View>
//     );
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar animated={true} backgroundColor={"#0072FF"} />
//       <LinearGradient
//         // Background Linear Gradient
//         colors={["#0072FF", "rgba(33,150,243,0.7)"]}
//         style={{
//           width: windowWidth,
//         }}
//       >
//         <BackButton inTop white goBack={props.navigation.goBack} />
//         <Header white>Statistics </Header>
//       </LinearGradient>
//       <View
//       /*     style={{
//           // height: windowHeight * 0.3,
//           marginVertical: 20,
//           flexDirection: "row",
//           flex: 1,
//           //   justifyContent: "space-around",
//         }} */
//       >
//         <LinearGradient
//           // Background Linear Gradient
//           colors={["rgba(33,150,243,0.7)", "rgba(33,150,243,0.4)"]}
//           style={{
//             width: windowWidth,
//             //   marginVertical: 20,
//             flexDirection: "row",
//             paddingBottom: 100,
//             // flex: 1,
//           }}
//         >
//           {renderSlider(n, setN, 50, "book", 133, "#D418C1")}
//           {renderSlider(m, setM, 50, "heartbeat", 133, "red")}
//           {renderSlider(x, setX, 50, "hamburger", 133, "#3FF819rr")}
//           {renderSlider(y, setY, 50, "bus", 133, "#D9E00E")}
//         </LinearGradient>
//       </View>
//       <View
//         style={{
//           height: windowHeight * 0.3,
//           width: "100%",
//           backgroundColor: "transparent",
//           position: "absolute",
//           top: 1,
//         }}
//       ></View>
//       <View
//         style={{
//           // paddingTop: 30,
//           top: -50,
//           flexDirection: "row",
//           justifyContent: "center",
//         }}
//       >
//         {renderTexturee("Food", "19 10 2010", "hand-holding-heart")}
//       </View>
//       <View
//         style={{
//           // paddingTop: 30,
//           // top: -25,
//           flexDirection: "row",
//           justifyContent: "space-around",
//         }}
//       >
//         {renderTexture("Help Givers", "98")}
//         {renderTexture("Help Seekers", "120")}
//       </View>
//     </View>
//   );
// }









