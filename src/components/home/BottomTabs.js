import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../global/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../../screens/Home";
import SearchScreen from "../../screens/SearchScreen";
import OrderCompleted from "../../screens/OrderCompleted";
import RestaurantDetail from "../../screens/RestaurantDetail";
// import { createStackNavigator } from "@react-navigation/stack";

// import ClientStack from "../../screens/clientStack";

// const BottomTabs = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
//           </View>
//         ),
//       },
//     },
//     SearchScreen: {
//       screen: SearchScreen,
//       navigationOptions: {
//         tabBarLabel: "SearchScreen",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon
//               style={[{ color: tintColor }]}
//               size={25}
//               name={"ios-person"}
//             />
//           </View>
//         ),
//         activeColor: "#f60c0d",
//         inactiveColor: "#f65a22",
//         barStyle: { backgroundColor: "#f69b31" },
//       },
//     },
//     OrderCompleted: {
//       screen: OrderCompleted,
//       navigationOptions: {
//         tabBarLabel: "OrderCompleted",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon
//               style={[{ color: tintColor }]}
//               size={25}
//               name={"ios-images"}
//             />
//           </View>
//         ),
//         activeColor: "#615af6",
//         inactiveColor: "#46f6d7",
//         barStyle: { backgroundColor: "#67baf6" },
//       },
//     },
//     RestaurantDetail: {
//       screen: RestaurantDetail,
//       navigationOptions: {
//         tabBarLabel: "RestaurantDetail",
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} size={25} name={"ios-cart"} />
//           </View>
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     activeColor: "#f0edf6",
//     inactiveColor: "#226557",
//     barStyle: { backgroundColor: "#3BAD87" },
//   }
// );

// export default createAppContainer(TabNavigator);

// const BottomTabs = createNativeStackNavigator();

// function BottomStack() {
//   return (
//     <Tab.Navigator
//     // tabBarOptions={{
//     //   activeTintColor: colors.buttons,
//     // }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         // options={{
//         //   tabBarLabel: "Home",
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon name="home" type="material" color={color} size={size} />
//         //   ),
//         // }}
//       />

//       <Tab.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         // options={{
//         //   tabBarLabel: "Search",
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon name="search" type="material" color={color} size={size} />
//         //   ),
//         // }}
//       />

//       <Tab.Screen
//         name="OrderCompleted"
//         component={OrderCompleted}
//         // options={{
//         //   tabBarLabel: "My Orders",
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon
//         //       name="view-list"
//         //       type="material"
//         //       color={color}
//         //       size={size}
//         //     />
//         //   ),
//         // }}
//       />

//       <Tab.Screen
//         name="RestaurantDetail"
//         component={RestaurantDetail}
//         // options={{
//         //   tabBarLabel: "Restaurant",
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon name="person" type="material" color={color} size={size} />
//         //   ),
//         // }}
//       />
//     </Tab.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

const BottomTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="OrderCompleted" component={OrderCompleted} />
        <Tab.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const BottomTabs = () => {
  return (
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
      {/* <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={props.name} component={props.component} />
      </Tab.Navigator> */}
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default BottomTabs;
