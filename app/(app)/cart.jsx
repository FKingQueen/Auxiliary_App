import { Text, View } from 'react-native';

import { useAuth } from '../../context/authContext.jsx';

export default function Cart() {
  const { logout, user } = useAuth(); 

  const handleLogout = async () => {
    await logout();
  }

  // console.log('user data: ', user);
  return (
    <View className="flex-1 bg-white">
      <Text>Cart</Text>
    </View>
  )
}