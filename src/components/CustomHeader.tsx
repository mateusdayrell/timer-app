import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
import Logo from '../../assets/logo-1.png'
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CustomHeader () {
//   const insets = useSafeAreaInsets();

  return (
    <View style={styles.header} className="flex items-center h-32 justify-center">
      <Image
        source={Logo}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#1FD761',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
    },
  });
