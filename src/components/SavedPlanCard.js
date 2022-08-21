import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS, icons } from "../constants";

const ListItem = ({ title }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
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
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        padding: 20,
        flexDirection: "row",
        marginBottom: 25,
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

          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Image
              source={liked ? icons.heartFill : icons.heartOutline}
              resizeMode="contain"
              style={{ width: 24, height: 20, borderRadius: 5 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 15 }}>
          {card.features.map((item, index) => (
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
              : `${card.completedPercentage}% completed`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedPlanCard;
