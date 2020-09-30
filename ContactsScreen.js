import React from "react";
import { View, FlatList, Text } from "react-native";
import Contact from "./components/Contact";

export default function ContactsScreen() {
  const contacts = [
    { name: "Peter Parker", number: "024444441" },
    { name: "Ko Rie", number: "024444442" },
    { name: "jo Rice", number: "024444443" },
    { name: "SonOfOden", number: "024444444" },
    { name: "Ko Re", number: "024444445" },
    { name: "Koo Ri", number: "024444446" },
  ];
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}
