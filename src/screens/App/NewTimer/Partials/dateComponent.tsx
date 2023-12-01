import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SwitchInput from '../../../../components/Form/SwitchInput'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateComponentProps } from './types';
  
const DateComponent: React.FC<DateComponentProps> = ({ isActive, handleShow, label, date, showCalendar, setShowCalendar, handleChangeDate }) => {
  return (
    <View>
        <SwitchInput
            label={label}
            isActive={isActive}
            setIsActive={handleShow}
            iconType="FontAwesome5"
            iconName='calendar-week'
        />

        {isActive &&
            <>
                <TouchableOpacity 
                    className="flex items-center p-1 bg-azul-200 rounded-lg border border-verde-100"
                    onPress={() => setShowCalendar(prev => !prev)}
                >
                    <Text className="font-medium text-verde-100">
                        {date ? `${date}` : 'Selecionar data'}
                    </Text>
                </TouchableOpacity>
                {showCalendar &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date ?? new Date()}
                        mode='date'
                        is24Hour={true}
                        onChange={handleChangeDate}
                    />
                }
            </>
        }
    </View>
  )
}

export default DateComponent;
