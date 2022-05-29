import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../global/styles";
import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../../screens/Home";
import SearchScreen from "../../screens/SearchScreen";
import OrderCompleted from "../../screens/OrderCompleted";
import RestaurantDetail from "../../screens/RestaurantDetail";

// import ClientStack from "../../screens/clientStack";

// function Home1() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Home />
//     </View>
//   );
// }

// function SearchScreen1() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <SearchScreen />
//     </View>
//   );
// }

// function OrderCompleted1() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <OrderCompleted />
//     </View>
//   );
// }

// function RestaurantDetail1() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <RestaurantDetail />
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    // <Tab.Navigator
    //   tabBarOptions={{
    //     activeTintColor: colors.buttons,
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="home" type="material" color={color} size={size} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="SearchScreen"
    //     component={SearchScreen}
    //     options={{
    //       tabBarLabel: "Search",
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="search" type="material" color={color} size={size} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="OrderCompleted"
    //     component={OrderCompleted}
    //     options={{
    //       tabBarLabel: "My Orders",
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="view-list" type="material" color={color} size={size} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="RestaurantDetail"
    //     component={RestaurantDetail}
    //     options={{
    //       tabBarLabel: "Restaurant",
    //       tabBarIcon: ({ color, size }) => (
    //         <Icon name="person" type="material" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>

    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
