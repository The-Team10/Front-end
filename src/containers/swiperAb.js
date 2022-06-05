
import {
  View,
  ImageBackgroundBase,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { LinearGradient } from "expo-linear-gradient";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const data = [
  {
    img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/270016693_1543668452664464_1190113551452546891_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gW6V9GZg5B4AX_ONTEv&tn=wdBRAgZB__0yLnsO&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_9UGNT1cO0Jgihg0i9njriosJA4_SCbFOoVRpWLWgcDA&oe=629B24E5",
    text: `sirine dakhli`,
  },
  {
    img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/119947343_3213647615386929_7545166807325895355_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=7jU4ljt1agEAX_juPbL&_nc_ht=scontent.ftun9-1.fna&oh=00_AT-RG4BUUSgfrNIDl80ums4sU36Nq9z6AOxopGF067ItHQ&oe=62BA0869",
    text: `haythem`,
  },
  {
    img: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/241106425_10221448276310849_4448129345126851676_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NnmmaRpWlksAX85XdCv&_nc_ht=scontent.ftun4-2.fna&oh=00_AT95CjD7UgvO2cdn-mdQN-dB40WBQweLzHZmzOwulTyKsA&oe=629FF1EA",
    text: `abdelkader Amri`,
  },
];
const swiper = (props) => {
  return (
    <View style={{ opacity: 0.8 }}>
      {/*   <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1581778725195-4f7f95bb166d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        resizeMode="cover"
        style={styles.back}
      > */}
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(33,150,243,0.85)", "rgba(33,150,243,0.4)"]}
        style={{
          width: windowWidth,
          //   marginVertical: 20,
          flexDirection: "column",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View style={styles.container}>
          <SwiperFlatList
            autoplay
            autoplayDelay={5}
            autoplayLoop
            index={2}
            showPagination
            data={data}
            renderItem={({ item }) => (
              <View style={styles.child}>
                <Image
                  source={{ uri: item.img }}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </LinearGradient>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            marginVertical: 50,
            borderRadius: 25,
            backgroundColor: "white",
            textAlign: "center",
            textAlignVertical: "center",
            maxWidth: "90%",
            letterSpacing: 1.2,
            lineHeight: 20,
            padding: 20,
            textShadowColor: "black",
            textShadowOffset: { width: -1, height: 0 },
            textShadowRadius: 0,
          }}
        >
          AllIn serves as a conduit between the compassion of our donors and the
          needs of our beneficiaries. We turn your compassion into hope for
          those in need around the world. Mission Baitulmaal provides
          life-saving, life-sustaining and life-enriching humanitarian aid to
          under-served populations around the world regardless of faith or
          nationality.
        </Text>
      </View>
      {/*       </ImageBackground>
       */}
    </View>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { width, height: windowHeight * 0.4, backgroundColor: "  #B0E0E6" },
  child: { width, justifyContent: "center", padding: 10, alignItems: "center" },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    color: "white",
    bottom: 15,
  },
  image: {
    width: windowHeight * 0.4,
    height: windowHeight * 0.3,
    borderRadius: 80,
    marginBottom: 20,
  },
  back: { width: "100%", height: windowHeight * 0.4 },
});
export default swiper;


// import {
//     View,
//     ImageBackgroundBase,
//     Text,
//     StyleSheet,
//     Dimensions,
//     Image,
//     ImageBackground,
//   } from "react-native";
//   import React from "react";
//   import { SwiperFlatList } from "react-native-swiper-flatlist";
  
//   const data = [
//     {
//       img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/270016693_1543668452664464_1190113551452546891_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gW6V9GZg5B4AX_ONTEv&tn=wdBRAgZB__0yLnsO&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_9UGNT1cO0Jgihg0i9njriosJA4_SCbFOoVRpWLWgcDA&oe=629B24E5",
//       text: `sirine dakhli`,
//     },
//     {
//       img: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/119947343_3213647615386929_7545166807325895355_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=7jU4ljt1agEAX_juPbL&_nc_ht=scontent.ftun9-1.fna&oh=00_AT-RG4BUUSgfrNIDl80ums4sU36Nq9z6AOxopGF067ItHQ&oe=62BA0869",
//       text: `haythem`,
//     },
//     {
//       img: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-1/241106425_10221448276310849_4448129345126851676_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NnmmaRpWlksAX85XdCv&_nc_ht=scontent.ftun4-2.fna&oh=00_AT8xO-lLv50OFy3U3F1xlKje-2P-rJ7l_2SZF7lhETctLA&oe=62A00D1A",
//       text: `abdelkader Amri`,
//     },
//   ];
  
//   const swiper = (props) => {
   
//     return (
//       <View style={{opacity:0.8}}>
//         <ImageBackground
//           source={{
//             uri: "https://images.unsplash.com/photo-1581778725195-4f7f95bb166d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//           }}
//           resizeMode="cover"
//           style={styles.back}
//         >
//             <View style={styles.container}>
//           <SwiperFlatList
//             autoplay
//             autoplayDelay={5}
//             autoplayLoop
//             index={2}
//             showPagination
//             data={data}
//             renderItem={({ item }) => (
//               <View style={styles.child}>
//                 <Image
//                   source={{ uri: item.img }}
//                   resizeMode="contain"
//                   style={styles.image}
//                 />
//                 <Text style={styles.text}>{item.text}</Text>
//               </View>
//             )}
//           />
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   };
  
//   const { width } = Dimensions.get("window");
//   const styles = StyleSheet.create({
//     container: { width,height:700, backgroundColor: "	#B0E0E6" },
//     child: { width, justifyContent: "center", padding: 10, alignItems: "center" },
//     text: { fontSize: 23, textAlign: "center", fontWeight: "400",color:"white" },
//     image: { width: 270, height: 300, borderRadius: 80, marginBottom: 120 },
//     back:{width:"100%",height:700}
//   });
  
//   export default swiper;