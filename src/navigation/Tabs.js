import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";

import { Home } from "../screens";

const CustomTabIcon = ({ focused, icon }) => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: 20,
        height: 20,
        tintColor: focused ? COLORS.primary : COLORS.lightPrimary,
      }}
    />
    <View
      style={{
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: focused ? COLORS.primary : "transparent",
        marginTop: 3,
      }}
    />
  </View>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.home} />
            // <View style={{ alignItems: "center" }}>
            //   <Image
            //     source={icons.home}
            //     resizeMode="contain"
            //     style={{
            //       width: 20,
            //       height: 20,
            //       tintColor: focused ? COLORS.primary : COLORS.lightPrimary,
            //     }}
            //   />
            //   <View
            //     style={{
            //       width: 5,
            //       height: 5,
            //       borderRadius: 5,
            //       backgroundColor: focused ? COLORS.primary : "transparent",
            //       marginTop: 3,
            //     }}
            //   />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.notification} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
