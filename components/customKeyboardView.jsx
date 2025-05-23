import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

const ios = Platform.OS === 'ios';

const CustomKeyboardView = ({children}) => {
    return (
        <KeyboardAvoidingView
            behavior={ios? 'padding' : 'height'}
            style={{
                flex: 1,
            }}
        >
            <ScrollView
                style={{ flex: 1}}
                bounces={false}
                showsHorizontalScrollIndicator={false}
            >
                {
                    children
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default CustomKeyboardView;