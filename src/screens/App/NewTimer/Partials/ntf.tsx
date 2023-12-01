;import React from 'react';
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import BackgroundTimer from 'react-native-background-timer';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function Ntf() {
  const [secondsLeft, setSecondsLeft] = useState(4)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    if(timerOn) startTimer()
    else BackgroundTimer.stopBackgroundTimer();

    return () => BackgroundTimer.stopBackgroundTimer()
  }, [timerOn])

  useEffect(() => {
    if(secondsLeft === 0) {
      BackgroundTimer.stopBackgroundTimer()
      console.log('PAROU')
    }
  }, [secondsLeft])

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => { 
      setSecondsLeft(secs => secs > 0
        ? secs - 1
        : 0
      )
    }, 
    1000);
  }

  const clockfy = () => {
    const hours = Math.floor((secondsLeft / 60) / 60)
    const mins = Math.floor((secondsLeft / 60) % 60)
    const secs = Math.floor(secondsLeft % 60)

    const displayHours = hours < 10 ? `0${hours}` : hours
    const displayMins = mins < 10 ? `0${mins}` : mins
    const displaySecs = secs < 10 ? `0${secs}` : secs

    return { displayHours, displayMins, displaySecs }
  }

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync()

    if(status !== 'granted') {
      Alert.alert('Você não ativou as notificações')
      return
    }

    await Notifications.scheduleNotificationAsync(
      {
        content: {
          title: 'Titulo da ntf',
          body: 'Corpo da ntf'
        },
        trigger: {
          seconds: 5,
          
        }
      }
    )
  }

  return (
    <View>
      <Text className="text-2xl font-bold mb-4">New Timer</Text>
      <View>
        <Text>
          {
            `${clockfy().displayHours}:${clockfy().displayMins}:${clockfy().displaySecs}`
          }
        </Text>
        <TouchableOpacity 
            className="flex items-center p-2 mt-4 bg-azul-200 border border-transparent rounded-lg bg-verde-100"
            onPress={() => setTimerOn(current => !current)}
          >
          <Text className="font-medium text-xl text-white">Iniciar/Parar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            className="flex items-center p-2 mt-4 bg-azul-200 border border-transparent rounded-lg bg-verde-100"
            onPress={() => handleCallNotifications()}
          >
          <Text className="font-medium text-xl text-white">Press to schedule a notification</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}