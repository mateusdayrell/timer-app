import React, { useCallback, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, RefreshControl } from 'react-native';
import TimerModel from '../../../../database/models/timerModel';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Loading } from '../../../../components/Loading';

interface ListTimersProps {
    timers: TimerModel[]
    handleDelete: (id: string) => void
    onChildListTickets: () => void
    isLoading: boolean
}

const ListTimers: React.FC<ListTimersProps> = ({ timers, handleDelete, onChildListTickets, isLoading }) => {
    const [refreshing, setRefreshing] = useState(false);

    const handleKeyExtrator = useCallback((item: TimerModel) => item.id.toString(), []);

    // Renderizar item da lista
    const renderItem = ({ item }: { item: TimerModel }) => (
        <View className='bg-gray-300 my-2 mx-4 rounded-md border-l-8 border-l-verde-100 flex flex-row'>
            <View className='py-4 px-4 flex items-center justify-center'>
                <Text className='font-semibold text-2xl'>{item?.time && `${item.time}`}</Text>
            </View>
            <View className='border-l border-l-verde-100 pl-4 py-4 flex'>
                <Text className='font-bold text-lg'>{item.title}</Text>
                {item.description && <Text className='text-base'>{item.description}</Text>}
            </View>
            <View className='w-fit ml-auto items-center justify-center flex flex-row'>
                <Text className='font-medium'>
                    {item?.repeat &&
                        item?.time ? 'Diário' : ''
                    }
                </Text>
            </View>
            <View className='w-fit mr-3 items-center justify-center flex flex-row'>
                <View className='mx-3'>
                    {item?.is_done
                        ? <IconFontAwesome name="check-circle" size={24} color="#1FD761" />
                        : <IconFontAwesome name="check-circle-o" size={24} color="#000" />
                    }
                </View>
                <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                >
                    <IconFontAwesome name="trash-o" size={24} color="#F00" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const onRefresh = () => onChildListTickets();

    if (isLoading || refreshing) return <Loading />
    return (
        <FlatList
            data={timers}
            renderItem={renderItem}
            keyExtractor={handleKeyExtrator}
            contentContainerStyle={{ paddingBottom: 20 }}
            initialNumToRender={15}
            refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
        />
    );
};

export default ListTimers;