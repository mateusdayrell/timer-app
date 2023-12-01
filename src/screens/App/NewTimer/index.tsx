; import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import Input from '../../../components/Form/Input';
import { CustomHeader } from '../../../components/CustomHeader';
import DateComponent from './Partials/dateComponent';
import WeekComponent from './Partials/weekComponent';
import TimeComponent from './Partials/timeComponent';
import { getFormattedTime } from '../../../helpers/DateHelper';
import { database } from '../../../database';
import TimerModel from '../../../database/models/timerModel';
import { useAppSelector } from '../../../hooks';
import { scheduleNotification } from '../../../helpers/schedueleNtf';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { toastSuccess } from '../../../helpers/ToastHelper';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { User } from '../../../store/reducers/authSlice';
import { AppNavigationProp } from '../../../routes/app.routes';

const defaultData = () => ({
  title: '',
  description: '',
  date: null,
  day_of_week: null,
  time: null,
  repeat: false
})

export function NewTimer() {
  const navigation = useNavigation<AppNavigationProp>();
  const isFocused = useIsFocused();

  const [data, setData] = useState(defaultData)
  const user = useAppSelector((state) => state.auth?.user as User | undefined);

  const [isDate, setIsDate] = useState(false);
  const [isWeek, setIsWeek] = useState(false)
  const [isTime, setIsTime] = useState(false)

  const [showDate, setShowDate] = useState(false)
  const [showClock, setShowClock] = useState(false)

  useEffect(() => {
    if(isFocused) {
      setData(defaultData)
      setIsTime(false)
    }
  }, [isFocused])

  const handleChange = (value, name) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDate(false);
    setData((prev) => ({
      ...prev,
      date: currentDate,
    }));
  };

  const handleChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    setShowClock(false);
    setData((prev) => ({
      ...prev,
      time: currentTime,
    }));
  };

  const handleSubmit = async () => {
    try {
      let ntf_id
      if(data.time) ntf_id = await scheduleNotification(data.title, getFormattedTime(data.time), data?.repeat)

      await database.write(async () => {
        return await database.get<TimerModel>('timers').create(newTimer => {
          newTimer.title = data.title
          data.description && (newTimer.description = data.description)
          data.date && (newTimer.date = data.date)
          data.day_of_week && (newTimer.day_of_week = data.day_of_week)
          data.time && (newTimer.time = getFormattedTime(data.time))
          newTimer.repeat = data.repeat ? true : false
          user?.id && (newTimer.user_id = user.id)
          ntf_id && (newTimer.ntf_id = ntf_id)
        })
      });

      toastSuccess('Timer cadastrado com sucesso')
      setData(defaultData)
      navigation.navigate('Timers');
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleShowDate = () => {
    if (!isDate) {
      setIsDate(true)
      setIsTime(false)
      setIsWeek(false)
    }
    else {
      setIsDate(false)
      handleChange(null, 'date')
    }
  }

  const handleShowWeek = () => {
    if (!isWeek) {
      setIsWeek(true)
      setIsTime(false)
      setIsDate(false)
    }
    else {
      setIsWeek(false)
      handleChange(null, 'day_of_week')
    }
  }

  const handleShowTime = () => {
    if (!isTime) {
      setIsTime(true)
      setIsDate(false)
      setIsWeek(false)
    }
    else {
      setIsTime(false)
      handleChange(null, 'time')
    }
  }

  return (
    <View className="w-full h-full bg-cinza-500">
      <CustomHeader />
      <View className="flex items-center h-full mt-12 justify-center bg-cinza-500">
        <View className="h-4/5 w-4/5">
          <Input
            label="Título"
            type="none"
            placeholder="Título"
            value={data.title}
            onChange={e => handleChange(e, 'title')}
            required
            styles="pb-2"
          />

          <Input
            label="Descrição"
            type="none"
            placeholder="Descrição"
            value={data.description}
            onChange={e => handleChange(e, 'description')}
            required
            styles="pb-2"
          />

          {/* <DateComponent
            date={data?.date}
            label='Data'
            isActive={isDate}
            handleShow={handleShowDate}
            showCalendar={showDate}
            setShowCalendar={setShowDate}
            handleChangeDate={handleChangeDate}
          />

          <WeekComponent
            weekDate={data?.day_of_week}
            label='Semana'
            isActive={isWeek}
            handleShow={handleShowWeek}
            handleChange={handleChange}
          /> */}

          <TimeComponent
            time={data?.time}
            label='Horário'
            isActive={isTime}
            handleShow={handleShowTime}
            showClock={showClock}
            setShowClock={setShowClock}
            handleChange={handleChangeTime}
          />

          {(isWeek || isTime || isDate) &&
            <View className='flex flex-row items-center mt-4'>
              <TouchableOpacity onPress={() => handleChange(!data?.repeat, 'repeat')}>
                {data?.repeat
                    ? <IconMaterial name="check-circle" size={24} color="#1FD761" />
                    : <IconMaterial name="radio-button-unchecked" size={24} color="#1FD761" />
                }
              </TouchableOpacity>
              <Text className='text-verde-100 ml-2'>
                Repetir {(isWeek && 'semanalmente') || (isTime && 'diariamente') || (isDate && 'mensalmente')}
              </Text>
            </View>
          }

          <TouchableOpacity
            className="flex items-center p-2 mt-4 bg-azul-200 border border-transparent rounded-lg bg-verde-100"
            onPress={() => handleSubmit()}
          >
            <Text className="font-medium text-xl text-white">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}