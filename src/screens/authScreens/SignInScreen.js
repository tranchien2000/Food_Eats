import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { colors, parameters, title } from "../../global/styles";

import { Icon, Button, SocialIcon } from "react-native-elements";

import * as Animatable from "react-native-animatable";
import { Formik } from "formik";

export default function SignInScreen({ navigation }) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInpput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <Text style={title}>ĐĂNG NHẬP</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInpput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{}}
            />
          </Animatable.View>
          <TextInput
            style={{ width: "80%" }}
            placeholder="Password"
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />
          <Animatable.View>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Button
          title="ĐĂNG NHẬP"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Quên mật khẩu ?
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 15, marginBottom: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Đăng nhập bằng</Text>
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Đăng nhập bằng Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Đăng nhập bằng Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginTop: 25, marginLeft: 20 }}>
        <Text style={{ ...styles.text1 }}>Đăng nhập lần đầu</Text>
      </View>

      <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
        <Button
          title="Tạo tài khoản mới"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    padding: 10,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    padding: 10,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
