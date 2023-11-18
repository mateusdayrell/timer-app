import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { authenticateUser } from "../../../store/reducers/authSlice";
import { CustomHeader } from "../../../components/CustomHeader";
import Input from "../../../components/Form/Input";
import InputPassword from "../../../components/Form/InputPassword";
import { useAppDispatch } from "../../../hooks";

export function SignIn() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => dispatch(authenticateUser({
      email, password, loggedIn: true
    }));

  return (
    <View className="w-full h-full bg-cinza-500">
      <CustomHeader />
      <View className="flex items-center justify-center bg-cinza-500">
        <View className="h-4/5 w-4/5">
          <Text className="text-3xl text-center mb-4 text-verde-100">Sign in</Text>
          <Input 
            label="E-mail" 
            type="emailAddress" 
            value={email} 
            onChange={setEmail} 
            placeholder="E-mail" 
            required
            styles="pb-2"
          />
          <InputPassword
            label="Senha" 
            value={password} 
            onChange={setPassword} 
            placeholder="Senha"
            disabled={false}
            required
            styles="pb-2"
          />

        <Text className="text-1xl text-gray-900">Os campos marcados com * são obrigatórios</Text>

          <TouchableOpacity 
            className="flex items-center p-2 mt-4 bg-azul-200 border border-transparent rounded-lg bg-verde-100"
            onPress={() => handleSignIn()}
          >
            <Text className="font-medium text-xl text-white">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
