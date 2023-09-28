import { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <View>
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <TextInput value={password} onChangeText={setPassword} />
      <TouchableOpacity onPress={handleSubmit}></TouchableOpacity>
    </View>
  );
}
