import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SignupScreen from "./SignupScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
