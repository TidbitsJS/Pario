import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, icons, images } from "../constants";

const SavedPlans = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.tertiary,
            fontSize: 25,
          }}
        >
          Saved Trip Plans
        </Text>

        <View style={{ marginTop: 50 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default SavedPlans;
