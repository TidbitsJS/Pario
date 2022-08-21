import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, icons } from "../constants";
import CustomButton from "./CustomButton";

const NotificationCard = ({ item }) => {
  let cardTheme = {
    headText: COLORS.white,
    content: COLORS.white,
    firstBtnBg: COLORS.white,
    firstBtnText: COLORS.tertiary,
    secondBtnBorder: COLORS.lightPrimary,
    secondBtnText: COLORS.white,
    icon: COLORS.white,
  };

  switch (item.cardColor) {
    case COLORS.primary:
      break;

    case COLORS.lightPrimary:
      cardTheme = {
        headText: COLORS.tertiary,
        content: COLORS.primary,
        firstBtnBg: COLORS.primary,
        firstBtnText: COLORS.white,
        secondBtnBorder: COLORS.primary,
        secondBtnText: COLORS.primary,
        icon: COLORS.primary,
      };
    default:
  }

  return (
    <TouchableOpacity
      style={{
        backgroundColor: item.cardColor,
        padding: 20,
        borderRadius: 5,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.medium,
              color: cardTheme.headText,
              fontSize: 16,
            }}
          >
            {item.title}
          </Text>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
          />
        </View>
        <Image
          source={icons.close}
          resizeMode="contain"
          style={{ width: 11, height: 11, tintColor: cardTheme.icon }}
        />
      </View>

      <View style={{ marginTop: 15, paddingRight: 20 }}>
        {item.message.map((msg, index) => (
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: cardTheme.content,
              fontSize: 10,
              marginBottom: 2,
            }}
            key={`msg-${item.title}-${index}`}
          >
            {msg}
          </Text>
        ))}
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <CustomButton
          bgColor={cardTheme.firstBtnBg}
          textColor={cardTheme.firstBtnText}
          borderColor={cardTheme.firstBtnBg}
          title={item.btnTitle}
          restStyles={{ marginRight: 10 }}
        />

        <CustomButton
          bgColor="transparent"
          textColor={cardTheme.secondBtnText}
          borderColor={cardTheme.secondBtnBorder}
          title="Later"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
