import React from "react";
import { View, Text, SafeAreaView, StatusBar, FlatList } from "react-native";

import { COLORS, FONTS, savedPlans } from "../constants";
import { SavedPlanCard } from "../components";

const SavedPlans = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <FlatList
        data={savedPlans}
        renderItem={({ item }) => <SavedPlanCard card={item} />}
        keyExtractor={(item) => `saved-card-${item.name}`}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={() => (
          <View style={{ marginBottom: 50 }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: COLORS.tertiary,
                fontSize: 25,
              }}
            >
              Saved Trip Plans
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SavedPlans;
