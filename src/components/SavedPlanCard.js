import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../constants";

const ListItem = ({ title }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View
      style={{
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        marginRight: 5,
      }}
    />
    <Text
      style={{
        fontFamily: FONTS.regular,
        color: COLORS.white,
        fontSize: 10,
      }}
    >
      {title}
    </Text>
  </View>
);

const SavedPlanCard = ({ card }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        padding: 20,
        flexDirection: "row",
      }}
    >
      <Image
        source={card.img}
        resizeMode="cover"
        style={{ width: 120, height: 118 }}
      />
      <View style={{ flex: 1, marginLeft: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.medium,
              color: COLORS.white,
              fontSize: 16,
              flex: 1,
            }}
          >
            {card.name}
          </Text>

          <TouchableOpacity>
            <Image
              source={icons.heartOutline}
              resizeMode="contain"
              style={{ width: 24, height: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 15 }}>
          {card.content.map((item, index) => (
            <ListItem key={`${card.name}-${index}`} title={item} />
          ))}
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: 6,
              color: COLORS.white,
            }}
          >
            {card.isCompleted
              ? "Done"
              : `${card.completedPercentage} completed`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedPlanCard;
