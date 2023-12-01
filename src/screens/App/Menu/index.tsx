import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { useAppDispatch } from "../../../hooks";
import { CustomHeader } from "../../../components/CustomHeader";
import { signOutUser } from "../../../store/reducers/authSlice";

export function Menu() {
  const dispatch = useAppDispatch();
  
  const handleLogOut = () => dispatch(signOutUser());

  return (
    <View className="w-full h-full bg-cinza-500">
      <CustomHeader />
      <View className="h-full">
        <TouchableOpacity className="mt-auto mb-40" onPress={() => handleLogOut()}>
          <Text className="text-verde-100 text-center underline text-xl">Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}