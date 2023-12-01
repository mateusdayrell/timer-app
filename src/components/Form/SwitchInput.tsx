import React from 'react'
import { View, Text, Switch } from "react-native";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';


interface SwitchProps {
    isActive: boolean;
    label: string;
    setIsActive: () => void;
    iconType: string;
    iconName: string
}

const SwitchInput: React.FC<SwitchProps> = ({
    isActive,
    label,
    setIsActive,
    iconType,
    iconName
}) => {
  return (
    <View className='flex flex-row py-2 items-center justify-between'>
        <View className='flex flex-row items-center gap-4'>
            {iconType === 'FontAwesome5' && <IconFontAwesome name={iconName} size={24} color="#1FD761" />}            
            {iconType === 'MaterialIcons' && <IconMaterialIcons name={iconName} size={24} color="#1FD761" />}            
            <Text className='text-verde-100 font-medium'>{label}</Text>
        </View>            
        <Switch
            trackColor={{false: '#767577', true: '#1FD761'}}
            thumbColor={isActive ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsActive}
            value={isActive}
        />
    </View>
  )
}

export default SwitchInput;
