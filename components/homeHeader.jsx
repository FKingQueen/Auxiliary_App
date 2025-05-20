import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Platform, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger,
} from 'react-native-popup-menu';


const ios = Platform.OS == 'ios';
const HomeHeader = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{
            paddingTop: ios ? top : top + 10
        }} className="flex-row justify-between p-5 bg-gray-500 rounded-b-xl">
            <View>
                <MaterialIcons name="qr-code-scanner" size={hp(2.7)} color="white" />
            </View>
            <View>
                <Text style={{ fontSize: hp(3) }} className="font-medium text-white">Kiosk</Text>
            </View>

            <View>
                <Menu>
                    <MenuTrigger>
                        <FontAwesome5 name="store" size={hp(2.7)} color="white" />
                    </MenuTrigger>
                    <MenuOptions customStyles={{
                        optionsContainer: {
                            width: '70%',
                            marginTop: 30,
                            padding: 10,
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        },
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}>
                            <MenuOption style={{
                                width: '33%', // Will create 3 items per row
                                padding: 5,
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <FontAwesome5 name="store" size={hp(2.7)} color="green" />
                                    <Text>COE</Text>
                                </View>
                            </MenuOption>

                            <MenuOption style={{
                                width: '33%',
                                padding: 5,
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <FontAwesome5 name="store" size={hp(2.7)} color="green" />
                                    <Text>CAFSD</Text>
                                </View>
                            </MenuOption>

                            <MenuOption style={{
                                width: '33%',
                                padding: 5,
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <FontAwesome5 name="store" size={hp(2.7)} color="green" />
                                    <Text>CAS</Text>
                                </View>
                            </MenuOption>

                            <MenuOption style={{
                                width: '33%',
                                padding: 5,
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <FontAwesome5 name="store" size={hp(2.7)} color="green" />
                                    <Text>ADMIN</Text>
                                </View>
                            </MenuOption>

                            <MenuOption style={{
                                width: '33%',
                                padding: 5,
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <FontAwesome5 name="store" size={hp(2.7)} color="green" />
                                    <Text>CHS</Text>
                                </View>
                            </MenuOption>
                        </View>
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    );
};

export default HomeHeader;