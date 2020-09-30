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
      <ScrollsView style={styles.container}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log in</Text>
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
            secureTextEntry={true}
            placeholder="Password"
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signUpText}>Sign up</Text>
        </View>
      </ScrollsView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    marginHorizontal: 50,
  },

  loginText: {
    fontSize: 50,
    color: "#6313bf",
  },

  loginTextContainer: {
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
    marginRight: 10,
    fontSize: 16,
  },
  signUpText: {
    fontSize: 16,
    color: "#6313bf",
  },
});
