// import React, { useLayoutEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";
// import SearchScreen from "./SearchScreen";
// import OrderCompleted from "./OrderCompleted";
// import RestaurantDetail from "./RestaurantDetail";
// import SignInScreen from "./authScreens/SignInScreen";
// // import SearchResultScreen from '../screens/SearchResultScreen';
// // import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// // import MenuProductScreen from '../screens/MenuProductScreen';
// // import PreferenceScreen from '../screens/PreferenceScreen';

// const ClientSearch = createStackNavigator();

// export function ClientStack({ navigation, route }) {
//   // useLayoutEffect(() => {
//   //   const routeName = getFocusedRouteNameFromRoute(route);
//   //   if (routeName === "RestaurantHomeScreen" || "MenuProductScreen") {
//   //     navigation.setOptions({ tabBarVisible: false });
//   //   } else {
//   //     navigation.setOptions({ tabBarVisible: true });
//   //   }
//   // }, [navigation, route]);

//   return (
//     <ClientSearch.Navigator>
//       <ClientSearch.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={() => ({
//           headerShown: false,
//         })}
//       />

//       <ClientSearch.Screen
//         name="RestaurantDetail"
//         component={RestaurantDetail}
//         options={() => ({
//           headerShown: false,
//         })}
//       />

//       <ClientSearch.Screen
//         name="OrderCompleted"
//         component={OrderCompleted}
//         options={() => ({
//           headerShown: false,
//         })}
//       />

//       <ClientSearch.Screen
//         name="SignInScreen"
//         component={SignInScreen}
//         options={() => ({
//           headerShown: false,
//         })}
//       />
//     </ClientSearch.Navigator>
//   );
// }
