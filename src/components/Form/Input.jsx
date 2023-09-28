import React from "react";
import { TextInput } from "react-native";

export default function Input(type, value, onChangeText) {
  return (
    <TextInput
      value={value}
      onChangeText={(e) => onChangeText(e.target.value)}
      secureTextEntry={type === "password"}
    />
  );
}
