import React, { useEffect, useState } from "react";
import { View} from "react-native";
import { CustomHeader } from "../../../components/CustomHeader";
import { useIsFocused } from "@react-navigation/native";
import { database } from "../../../database";
import TimerModel from "../../../database/models/timerModel";
import { toastError, toastSuccess } from "../../../helpers/ToastHelper";
import { Q } from "@nozbe/watermelondb";
import { useAppSelector } from "../../../hooks";
import ListTimers from "./Partials/ListTimers";
import * as Notifications from 'expo-notifications';
import { User } from "../../../store/reducers/authSlice";

export function Timer() {
  const isFocused = useIsFocused();
  const user = useAppSelector((state) => state.auth?.user as User);

  const [timers, setTimers] = useState<TimerModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if(isFocused) loadRegisters();
  }, [isFocused])

  const loadRegisters = async() => {
    setIsLoading(true)
    try {
      const data = await database.get<TimerModel>('timers').query(Q.where('user_id', user.id)).fetch();
      setTimers(data)
    } catch (error) {
      console.log(error)
      toastError('Erro ao carregar timers')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteTimer = async (timerId: string) => {
    try {
      setIsLoading(true)
      await database.write(async () => {
        const timer = (await database.get<TimerModel>('timers').find(timerId));
        if (timer) {
          if (timer?.ntf_id) await Notifications.cancelScheduledNotificationAsync(timer.ntf_id)
          await timer.destroyPermanently()
        }
        await loadRegisters()
      });
    } catch (error) {
      console.error('Erro ao excluir timer:', error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <View className="w-full h-full bg-cinza-500">
      <CustomHeader />
      <View className="h-full mt-10">
        {timers.length > 0 && 
          <ListTimers 
            timers={timers} 
            handleDelete={handleDeleteTimer}
            onChildListTickets={loadRegisters}
            isLoading={isLoading}
          />
        }
      </View>
    </View>
  );
}