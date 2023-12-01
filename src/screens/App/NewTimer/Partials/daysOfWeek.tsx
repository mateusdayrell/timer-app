import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { DaysOfWeeksProps, WeekDayrops } from './types'

const WeekDay: React.FC<WeekDayrops> = ({ day, abbr, selected, handleChange }) => {
    return (
        <TouchableOpacity
            onPress={() => handleChange(abbr)}
            className={`${selected === abbr && 'bg-verde-100'} flex items-center justify-center h-7 w-7 rounded-full border border-verde-100`}
        >
            <Text className={`${selected === abbr ? 'text-white' : 'text-verde-100'}`}>{day}</Text>
        </TouchableOpacity>
    )
}

const DaysOfWeek: React.FC<DaysOfWeeksProps> = ({ handleChange }) => {
    const [selecdtedDay, setSelectedDay] = useState('')

    const handleSelectedDay = (day) => {
        if(day === selecdtedDay) {
            setSelectedDay('')
            handleChange(null, 'day_of_week')
        }
        else {
            setSelectedDay(day)
            handleChange(day, 'day_of_week')
        }
    }

    return (
        <View className='flex flex-row justify-between'>
            <WeekDay day='D' abbr='dom' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='S' abbr='seg' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='T' abbr='ter' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='Q' abbr='qua' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='Q' abbr='qui' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='S' abbr='sex' selected={selecdtedDay} handleChange={handleSelectedDay} />
            <WeekDay day='S' abbr='sab' selected={selecdtedDay} handleChange={handleSelectedDay} />
        </View>
    )
}

export default DaysOfWeek
