import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../constants";

const ServiceCard = ({
  icon,
  name,
  boxWidth,
  boxHeight,
  restStyles,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        minWidth: boxWidth,
        maxWidth: boxWidth,
        alignItems: "center",
        marginRight: 10,
        ...restStyles,
      }}
      onPress={handlePress}
    >
      <View
        style={{
          width: "100%",
          height: boxHeight,
          borderRadius: 5,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.tertiary,
          fontSize: 14,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;
