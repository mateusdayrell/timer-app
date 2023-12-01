import React, { useEffect } from "react";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Toaster from "./src/components/Toaster";
import Routes from "./src/routes";
import * as Notifications from 'expo-notifications';
import listenNtf from "./src/helpers/listenNtf";
import { Alert, StatusBar } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  useEffect(() => {
    async () => {
      const { status } = await Notifications.getPermissionsAsync()

      if(status !== 'granted') {
          Alert.alert('Você não ativou as notificações')
          return
      }
    }
    
    Notifications.addNotificationReceivedListener(async (ntf) => {
      await listenNtf(ntf.request.identifier)
    })
  }, [])
  
  return (
    <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="#1FD761" />
        <Routes />
        <Toaster />
    </Provider>
  );
}
