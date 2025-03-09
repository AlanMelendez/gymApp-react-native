import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { StyleSheet } from "nativewind";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeIn, FadeInDown, FadeOut, FadeOutDown } from 'react-native-reanimated';


import "../global.css";
import { Link, useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View className="flex-1 flex  justify-end">
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/neck.png")}
        className="h-full w-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeIn.delay(1300).springify()} className="flex items-center mb-8">
          <Text
            className="text-white font-bold uppercase text-center tracking-wide"
            style={{ fontSize: hp(2.5) }}
          >
            Welcome to
            <Text className="text-red-700"> GYMKEY</Text>
          </Text>

          <Text
            className="text-white font-bold uppercase text-center tracking-wide"
            style={{ fontSize: hp(2.5) }}
          >
            Our App
            <Text className="text-red-700"> AI Gym Assistant</Text>
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(1000).springify()} className="flex items-center">
          <TouchableOpacity
               
             //onPress={() => navigation.navigate("home")}
            className="bg-red-800 py-4 px-6 rounded-full w-[70%] flex items-center justify-center mx-auto shadow-lg"
            >
            <Text className="text-white font-bold uppercase text-center tracking-wide" style={{ fontSize: hp(2) }}>
              Get Started
              <Link href="/home" > Now</Link>
            </Text>
            </TouchableOpacity>
         </Animated.View> 
      </LinearGradient>
    </View>
  );
}
