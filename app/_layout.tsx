import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import index from './index'


export default function Layout() {
  return<Stack screenOptions={{ headerShown: false }}/>;
}