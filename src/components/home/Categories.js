import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { itemsCategories } from "../../global/data";

export default function Categories({ navigation, ...props }) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {itemsCategories.map((categories, index) => (
          <View key={index}>
            <CategoriesInfo categories={categories} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const CategoriesInfo = ({ ...props }) => (
  <View style={{ alignItems: "center", marginRight: 30 }}>
    <Image
      source={props.categories.image}
      style={{
        width: 50,
        height: 40,
        resizeMode: "contain",
      }}
    />
    <Text style={{ fontSize: 13, fontWeight: "900" }}>
      {props.categories.title}
    </Text>
  </View>
);
