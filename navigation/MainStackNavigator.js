import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import DetailScreen from "../screens/DetailScreen";
import SplashScreen from "../screens/SplashScreen";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      {/* Splash Screen iniziale */}
      <MainStack.Screen name="Splash" component={SplashScreen} />
      {/* TabNavigator è il tab principale */}
      <MainStack.Screen name="Tabs" component={TabNavigator} />
      {/* Schermate extra fuori dalla tab bar */}
      <MainStack.Screen name="Detail" component={DetailScreen} />
    </MainStack.Navigator>
  );
}
