import React from "react";
import { View, Text, SafeAreaView, FlatList, StatusBar } from "react-native";

import { NotificationCard } from "../components";
import { COLORS, FONTS, notifications } from "../constants";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationCard item={item} />}
        keyExtractor={(item) => `notification-${item.id}`}
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
              Notifications
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Notification;
