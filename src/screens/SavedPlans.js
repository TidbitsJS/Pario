import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SavedPlanCard } from "../components";

import { COLORS, FONTS, icons, images, savedPlans } from "../constants";

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

        <View style={{ marginTop: 50 }}>
          <FlatList
            data={savedPlans}
            renderItem={({ item, index }) => <SavedPlanCard card={item} />}
            keyExtractor={(item) => `saved-card-${item.name}`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SavedPlans;
