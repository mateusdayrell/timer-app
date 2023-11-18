import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Input from "../../../components/Form/Input";
import InputPassword from "../../../components/Form/InputPassword";
import { database } from "../../../database";
import UserModel from "../../../database/models/userModel";
import { toastError, toastSuccess } from "../../../helpers/ToastHelper";
import { CustomHeader } from "../../../components/CustomHeader";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if(checkFormErrors()) return
    try {
      await database.write(async(writer) => {
        return await database.get<UserModel>('users').create(user  => {
          user.name = name
          user.email = email
          user.password = password
        })
      })

      toastSuccess('Usuário cadastrado com sucesso')
    } catch (error) {
      toastError('Erro ao cadastrar usuário', error as string)
      throw new Error(error as string)
    }
  };

  const loadUsers = async () => {
    try {
      const response = await database.get<UserModel>('users').query().fetch();
      console.log('response', response)
      toastSuccess('Usuário cadastrado com sucesso')
    } catch (error) {
      throw new Error(error as string)
    }
  };

  const checkFormErrors = () => {
    let errors = false

    if(!name) { 
      toastError('O campo Nome é obrigatório')
      errors = true
    }
    else if(!email) { 
      toastError('O campo E-mail é obrigatório')
      errors = true
    }
    else if(!password) { 
      toastError('O campo Senha é obrigatório')
      errors = true
    }
    else if(!confirmPassword) { 
      toastError('O campo Confirmar senha é obrigatório')
      errors = true
    }
    else if(password.length < 8) { 
      toastError('O campo Senha deve ter no mínimo 8 caracteres')
      errors = true
    }
    else if(password !== confirmPassword) { 
      toastError('As senhas não coincidem')
      errors = true
    }

    return errors
  }

  return (
    <View className="w-full h-full bg-cinza-500">
      <CustomHeader />
      <View className="flex items-center justify-center bg-cinza-500">
        <View className="h-4/5 w-4/5">
          <Text className="text-3xl text-center mb-4 text-verde-100">Crie a sua conta</Text>
          <Input 
            label="Nome" 
            type="name" 
            value={name} 
            onChange={setName} 
            placeholder="Digite o seu nome" 
            required
            styles="pb-2"
          />
          <Input 
            label="Email" 
            type="emailAddress" 
            value={email} 
            onChange={setEmail} 
            placeholder="Digite o seu email" 
            required
            styles="pb-2"
          />
          <InputPassword
            label="Senha" 
            value={password} 
            onChange={setPassword} 
            placeholder="Digite uma senha"
            disabled={false}
            required
            styles="pb-2"
          />
          <InputPassword
            label="Confirmar senha" 
            value={confirmPassword} 
            onChange={setConfirmPassword} 
            placeholder="Digite a mesma senha"
            disabled={false}
            required
            styles="pb-2"
          />

        <Text className="text-1xl text-gray-900">Os campos marcados com * são obrigatórios</Text>

          <TouchableOpacity 
            className="flex items-center p-2 mt-4 bg-azul-200 border border-transparent rounded-lg bg-verde-100"
            onPress={handleSubmit}
          >
            <Text className="font-medium text-xl text-white">Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex items-center p-2 mt-4 border border-transparent rounded-lg bg-verde-100"
            onPress={loadUsers}
          >
            <Text className="text-1xl text-white">Voltar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
