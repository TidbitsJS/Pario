import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../constants";

const ServiceCard = ({ icon, name }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        minWidth: 78,
        maxWidth: 78,
        alignItems: "center",
        marginRight: 10,
        marginBottom: 40,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 79,
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
