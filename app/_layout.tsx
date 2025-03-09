import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'nativewind'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import '../global.css'


const RootLayout = () => {
  return (
    <View className='flex flex-1 justify-center items-center' >
      <Text className="">Hello world!</Text>
    </View>
  )
}

export default RootLayout