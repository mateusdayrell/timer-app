import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface InputPasswordProps {
    value: string;
    label: string;
    placeholder: string;
    onChange: (text: string) => void | string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    styles?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    value,
    label,
    placeholder,
    onChange,
    disabled=false,
    error,
    required=false,
    styles
  }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className={styles}>
    {label && <Text className="text-base font-medium pb-1 text-verde-100">{label}{required && ' *'}</Text>}
    <View style={{ flexDirection: 'row', alignItems: 'center' }} className="relative">
      <TextInput
        className={`border ${disabled && "border-gray-300"} w-full py-2 px-3 text-base rounded-lg bg-gray-200 ${error && "border-red-500"}`}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChange}
        textContentType="password"
      />
      <TouchableOpacity className="absolute right-2 top-3" onPress={togglePasswordVisibility}>
        <Ionicons name={showPassword ? "md-eye-outline" : "md-eye-off-outline"} size={20} color="green" />
      </TouchableOpacity>
    </View>
    {error && <Text className="text-red-500 text-xs">{error}</Text>}
    </View>
  )
}

export default InputPassword;
