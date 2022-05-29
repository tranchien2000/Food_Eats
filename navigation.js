import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import configureStore from "./src/redux/store";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./src/screens/Home";
import RestaurantDetail from "./src/screens/RestaurantDetail";
import OrderCompleted from "./src/screens/OrderCompleted";
import SignInScreen from "./src/screens/authScreens/SignInScreen";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignInScreen"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
