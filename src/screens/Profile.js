import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { SettingCard } from "../components";

import { COLORS, FONTS, icons, images, settings } from "../constants";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.backArrow}
                resizeMode="contain"
                style={{ width: 25, height: 20, marginRight: 15 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: COLORS.tertiary,
                fontSize: 25,
              }}
            >
              My Account
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={images.userProfile}
                resizeMode="cover"
                style={{ width: 68, height: 68 }}
              />
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.white,
                    fontSize: 16,
                  }}
                >
                  Olivia Scott
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.white,
                    fontSize: 10,
                    marginTop: 3,
                  }}
                >
                  UI/UX Designer
                </Text>
              </View>
            </View>

            <TouchableOpacity>
              <Image
                source={icons.edit}
                resizeMode="contain"
                style={{ width: 19, height: 18 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 50 }}>
            {settings.map((setting) => (
              <SettingCard key={setting.id} {...setting} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
