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
  
  
  const data = [
    {
      img: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: `Thank you `,
    },
    {
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80",
      text: `This Application is a real blessing, keep up the good work.`,
    },
    {
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      text: `Thank you so much for this Opportunity, me and my family are very grateful to this application that provided the chance to my little brother to get operated and heal`,
    },
  ];
  
  const swiper = (props) => {
    return (
      <View style={{opacity:0.8}}>
        <ImageBackground
          source={{
             uri: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          resizeMode="cover"
          style={styles.back}
        >
            <View style={styles.container}>
          <SwiperFlatList
            // autoplay
            // autoplayDelay={5}
            // autoplayLoop
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
        </ImageBackground>
      </View>
    );
  };
  
  const { width } = Dimensions.get("window");
  const styles = StyleSheet.create({
    // container: { width,height:700, backgroundColor: "#B0E0E6" },
        container: { width,height:700 },
    child: { width, justifyContent: "center", padding: 10, alignItems: "center" },
    text: { fontSize: 23, textAlign: "center", fontWeight: "400",color:"white" },
    image: { width: 150, height: 170, borderRadius: 65, marginBottom: 90 },
    back:{width:"120%",height:800}
  });
  
  export default swiper;