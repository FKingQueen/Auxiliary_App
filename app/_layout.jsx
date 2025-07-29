import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { AuthContextProvider, useAuth, } from '../context/authContext.jsx';

import { MenuProvider } from 'react-native-popup-menu';

import "../global.css";

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
        <MenuProvider>
            <AuthContextProvider>
                <MainLayout />
            </AuthContextProvider>
        </MenuProvider>
    )
}