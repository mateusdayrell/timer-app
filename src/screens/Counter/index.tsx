import React from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/reducers/CounterSlice";
import { Text, TouchableOpacity, View } from "react-native";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View className="w-full h-full flex items-center justify-center">
      <View>
        <TouchableOpacity
          className="border"
          onPress={() => dispatch(increment())}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text>{count ?? "teste"}</Text>
        <TouchableOpacity
          className="border"
          onPress={() => dispatch(decrement())}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
