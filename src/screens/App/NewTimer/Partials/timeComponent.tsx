import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SwitchInput from '../../../../components/Form/SwitchInput'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimeComponentProps } from './types';
  
const TimeComponent: React.FC<TimeComponentProps> = ({ isActive, handleShow, label, time, showClock, setShowClock, handleChange }) => {
  return (
    <View>
        <SwitchInput
            label={label}
            isActive={isActive}
            setIsActive={handleShow}
            iconType="MaterialIcons"
            iconName='access-time'
        />

        {isActive &&
            <>
                <TouchableOpacity 
                    className="flex items-center p-1 mt-2 bg-azul-200 rounded-lg border border-verde-100"
                    onPress={() => setShowClock(prev => !prev)}
                >
                    <Text className="font-medium text-verde-100">
                        {time ? `${time.getHours()}:${time.getMinutes()}` : 'Selecionar horário'}
                    </Text>
                </TouchableOpacity>
                {showClock &&
                    <DateTimePicker
                        testID="timePicker"
                        value={time ?? new Date()}
                        mode='time'
                        is24Hour={true}
                        onChange={handleChange}
                    />
                }
            </>
        }
    </View>
  )
}

export default TimeComponent;
