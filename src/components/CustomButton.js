import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { FONTS } from "../constants";

const CustomButton = ({
  bgColor,
  textColor,
  borderColor,
  title,
  restStyles,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: bgColor,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        minWidth: 66,
        ...restStyles,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: textColor,
          fontSize: 10,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
