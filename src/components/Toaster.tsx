import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { AntDesign } from '@expo/vector-icons';

const Toaster = () => {
    const toastConfig = {
        success: (props) => (
          <BaseToast
            {...props}
            style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderStartColor: '#65E344',
                paddingStart: 12,
                width: '94%',
            }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 15,
              fontWeight: '400'
            }}
            text2Style={{
                fontSize: 14
              }}
            renderLeadingIcon={() => (
                <AntDesign
                    name="checkcircle"
                    size={32}
                    color="#65E344"
                />)}
            text2NumberOfLines={2}
          />
        ),
        error: (props) => (
          <ErrorToast
            {...props}
            text1Style={{
              fontSize: 15,
              fontWeight: '400',
            }}
            text2Style={{
              fontSize: 14,
            }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderStartColor: '#F87171',
                paddingStart: 12,
                width: '94%',
            }}
            renderLeadingIcon={() => (
                <AntDesign
                  name="closecircle"
                  size={32}
                  color="#F87171"
                />)}
            text2NumberOfLines={3}  
            text2={props.text2 && props.text2.split('(e')[0]}              
           />
        ),
      };

      const handlePress = () => {
        Toast.hide();
      };
  return (
    <Toast 
        config={toastConfig}
        position='top'
        bottomOffset={20}
        autoHide={true}
        onPress={handlePress}
        visibilityTime={5500}
    />
  );
};

export default Toaster;