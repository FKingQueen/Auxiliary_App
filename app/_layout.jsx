import { View } from 'react-native'
import { Slot, useSegments, useRouter } from 'expo-router'
import { useAuth, AuthContextProvider, } from '../context/authContext.jsx';
import { useEffect } from 'react';

import "../global.css"



const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {

        if (typeof isAuthenticated == "undefined") return;
        const inApp = segments[0] === '(app)';
        if (isAuthenticated && !inApp) {
            // Redirect to the home page if the user is authenticated
            router.replace('home');
        } else if (!isAuthenticated) {
            // Redirect to the signIn page if the user is not authenticated
            router.replace('signIn');
        }

    }, [isAuthenticated]);

    return (
        <Slot />
    )
}


export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}