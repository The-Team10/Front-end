import { View, Text,Image } from 'react-native'
import React from 'react'


const EventCard = (props) => {
  return (
    <View >
                  <View
                    style={{
                      backgroundColor: "white",
                      width: "95%",
                      height: 180,
                      flexDirection: "row",
                      margin: 5,
                      alignSelf: "center",
                      elevation: 10,
                      borderRadius: 20,
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        padding: 3,
                        zIndex: 3,
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        source={{
                          //  uri : {item.image},
                          uri: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80",
                        }}
                        resizeMode="cover"
                        style={{
                          width: "120%",
                          height: "90%",
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 4,
                        alignSelf: "center",
                        height: "100%",
                        paddingTop: 5,
                        backgroundColor: "darkblue",
                        borderRadius: 15,
                        overflow: "hidden",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 28,
                          fontSize: 20,
                          fontWeight: "800",
                          marginBottom: 9,
                          letterSpacing: 0.2,
                          color: "white",
                        }}
                      >
                        {props.item.eventName}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 28,
                          fontSize: 17,
                          fontWeight: "600",
                          marginBottom: 9,
                          letterSpacing: 0.2,
                          color: "white",
                        }}
                      >
                        {props.item.description}
                      </Text>
                      <View
                        style={{
                          justifyContent: "space-between",
                          flexDirection: "row",
                          padding: 30,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "white",
                          }}
                        >
                          {props.item.date}
                        </Text>
                        <Text style={{ fontSize: 16, color: "lightgray" }}>
                          {props.item.amount} DTN
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
  )
}

export default EventCard