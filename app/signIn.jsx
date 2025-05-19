import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import CustomKeyboardView from '../components/customKeyboardView';
import Loading from '../components/loading';
import { useAuth } from '../context/authContext.jsx';


export default function SignIn() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Sign In", "Please fill in all fields");
            return;
        }
        setLoading(true);

        const response = await login(emailRef.current, passwordRef.current);

        setLoading(false);

        console.log('got result: ', response);

        if(!response.success){
            Alert.alert("Sign In", response.msg);
        }
        //login process
    }

    return (
        <CustomKeyboardView>
            <View className="flex-1 items-center justify-center" style={{ width: wp(100) }}>
                <StatusBar style="dark" />
                <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5), width: wp(100) }} className="flex-1 gap-12 items-center">
                    {/* Sign In Image */}
                    <View className="justify-center">
                        <Image style={{ width: wp(50), height: hp(20) }} resizeMode='contain' source={require('../assets/images/MMSU.png')} />
                    </View>

                    <View className="gap-10 items-center justify-center " style={{ width: wp(100) }}>
                        <View className="gap-1 justify-center w-full">
                            <Text style={{ fontSize: hp(4) }} className="w-full text-center">
                                Auxiliary Login
                            </Text>
                            <Text style={{ fontSize: hp(1.5) }} className="w-full text-center">
                                Use MMSU Credentials
                            </Text>
                        </View>


                        <View className="gap-4">
                            {/* Input */}
                            <View style={{ height: hp(7) }} className="w-5/6 flex-row items-center gap-4 px-4 bg-neutral-100 rounded-2xl">
                                <Octicons name="mail" size={hp(2.7)} color="gray" />
                                <TextInput
                                    onChangeText={value => emailRef.current = value}
                                    className="flex-1 h-full text-neutral-800"
                                    placeholder='Email Address'
                                    placeholderTextColor={"gray"}
                                />
                            </View>
                            {/* Input */}
                            <View className="gap-3 w-5/6">
                                <View style={{ height: hp(7) }} className="w-full flex-row items-center gap-4 px-4 bg-neutral-100 rounded-2xl">
                                    <Octicons name="lock" size={hp(2.7)} color="gray" />
                                    <TextInput
                                        onChangeText={value => passwordRef.current = value}
                                        secureTextEntry
                                        className="flex-1 h-full text-neutral-800"
                                        placeholder='Password'
                                        placeholderTextColor={"gray"}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: hp(1.8) }} className="w-full text-right font-semibold text-nuetral-100">Forgot Password?</Text>
                                </View>
                            </View>

                            {/* Submit Button */}



                            <View>
                                {
                                    loading ? (
                                        <View className="flex-row items-center justify-center">
                                            <Loading size={hp(10)}></Loading>
                                        </View>
                                    ) : (
                                        <TouchableOpacity onPress={handleLogin} style={{ height: hp(7) }} className="bg-[#0d4b04] rounded-xl h-12 items-center justify-center">
                                            <View>
                                                <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                                                    Sign In
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>

                            <View className="flex-row gap-2 justify-center">
                                <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-neutral-400">
                                    Dont have an account?
                                </Text>
                                <Pressable onPress={() => router.push('signUp')}>
                                    <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-[#0d4b04]">
                                        Sign Up
                                    </Text>
                                </Pressable>
                            </View>

                        </View>

                    </View>

                </View>
            </View>
        </CustomKeyboardView>
    )
}