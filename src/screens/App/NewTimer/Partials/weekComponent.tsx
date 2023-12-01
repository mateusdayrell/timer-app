import React from 'react'
import { View } from 'react-native'
import SwitchInput from '../../../../components/Form/SwitchInput'
import DaysOfWeek from './daysOfWeek';
import { WeekComponentProps } from './types';
  
const WeekComponent: React.FC<WeekComponentProps> = ({ isActive, handleShow, label, weekDate, handleChange }) => {
  return (
    <View>
        <SwitchInput
            label={label}
            isActive={isActive}
            setIsActive={handleShow}
            iconType="MaterialIcons"
            iconName='view-week'
        />

        {isActive &&
            <DaysOfWeek handleChange={handleChange} />
        }
    </View>
  )
}

export default WeekComponent;
