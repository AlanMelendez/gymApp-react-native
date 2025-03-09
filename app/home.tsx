import { View, Text, Image} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageSlider from "../components/ImageSlider";


const home = () => {
  return (
    <SafeAreaView className="flex-1 flex bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-5 mt-2">
        <View className="space-y-2">
            
          <Text className="text-black uppercase  font-bold  tracking-wider " style={{ fontSize: hp(3.5) }}>
            Let's Start
          </Text>
          <Text className="uppercase font-bold  tracking-wider text-rose-700" style={{ fontSize: hp(3.5) }}>
            WORKOUT
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
           <Image className="rounded-full" source={require("../assets/images/avatar.png")} style={{height: hp(8), width: hp(8)}}/>
          <View className="flex items-center justify-center rounded-full px-2 py-1 bg-neutral-100 border-[3px] border-neutral-200" style={{height: hp(5.5), width: hp(5.5)}}>
              <Ionicons name="notifications-circle" size={hp(3)} color="green" />
          </View>
        </View>
      </View>


      <View >
        <ImageSlider />
      </View>

    
    </SafeAreaView>
  );
};

export default home;
