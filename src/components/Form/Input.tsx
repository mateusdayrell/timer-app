import React from "react";
import { TextInput, Text, View } from "react-native";

interface InputProps {
  value: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void | string;
  type?: "none" | "name" | "username" | "emailAddress" | "telephoneNumber" | "URL";
  required?: boolean
  styles?: string
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  placeholder,
  onChange,
  type,
  required = false,
  styles
}) => {
  return (
    <View className={styles}>
    <Text className="text-base font-medium pb-1 text-verde-100">{label}{required && ' *'}</Text>
    <TextInput
      className={`w-full border py-2 px-3 text-base rounded-lg bg-gray-200`}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      textContentType={type ?? "none"}
    />
    </View>
  );
};

export default Input;
