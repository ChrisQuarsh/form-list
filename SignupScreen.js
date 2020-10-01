import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Sign up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password again"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <Text style={styles.loginText}>Log in</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 50,
  },

  signupText: {
    fontSize: 50,
    color: "#6313bf",
  },

  signupTextContainer: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#6313bf",
    fontSize: 20,
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 5,
    color: "#0853a8",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#6313bf",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },

  buttonText: {
    color: "#fff",
    fontSize: 30,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    color: "#aaaaaa",
    marginRight: 10,
    fontSize: 17,
  },
  loginText: {
    fontSize: 17,
    color: "#6313bf",
  },
});
