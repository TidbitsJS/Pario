import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, icons } from "../constants";

const SettingCard = ({ icon, title, subtitle }) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 25 }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.primary,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              color: COLORS.primary,
              fontSize: 16,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.primary,
              fontSize: 10,
              marginTop: 3,
            }}
          >
            {subtitle}
          </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={icons.nextArrow}
            resizeMode="contain"
            style={{ width: 6, height: 11 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default SettingCard;
