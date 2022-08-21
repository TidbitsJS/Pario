import React from "react";
import { View, Text, SafeAreaView, FlatList, StatusBar } from "react-native";
import { NotificationCard } from "../components";

import { COLORS, FONTS, notifications } from "../constants";

const Notification = () => {
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
          Notifications
        </Text>

        <View style={{ marginTop: 50 }}>
          <FlatList
            data={notifications}
            renderItem={({ item }) => <NotificationCard item={item} />}
            keyExtractor={(item) => `notification-${item.id}`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
