import { View, Text, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Canstants from "expo-constants";
import Swiper from "../containers/swiperAb";

const StatusBarHeight = Canstants.statusBarHeight;

const HeaderText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1E90FF;
  letter-spacing: 1px;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: ${StatusBarHeight}px;
`;
const Container = styled.ScrollView`
  display: flex;
  flex: 1;
`;
const ContentText = styled.Text`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: 20px;
  color: lightslategrey;
  padding-right: 5px;
  margin-bottom: 60px;
`;

const AboutUs = () => {
  return (
    <>
      <StatusBar style="dark" />
      <HeaderText>About Us</HeaderText>
      <Container>
        <ContentText>
        We turn your compassion into hope for those in need around the world. 
        </ContentText>
        <Swiper/>
      </Container>
    </>
  );
};

export default AboutUs;

