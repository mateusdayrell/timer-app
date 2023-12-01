import React from 'react';
import { ActivityIndicator, View } from "react-native";

export function Loading () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#1FD761" />
    </View>
  );
}