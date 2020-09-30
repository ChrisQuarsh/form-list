import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ContactsScreen from "./ContactsScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactsScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
