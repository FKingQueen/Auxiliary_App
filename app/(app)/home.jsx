import { Pressable, Text, View } from 'react-native';

import { useAuth } from '../../context/authContext.jsx';

export default function Home() {
  const { logout, user } = useAuth(); 

  const handleLogout = async () => {
    await logout();
  }

  // console.log('user data: ', user);
  return (
    <View className="flex-1 bgg-white">
      <Text>Home</Text>
      <Pressable onPress={handleLogout} className="bg-red-500 mt-4 py-2 rounded-md">
        <Text>
          Sign Out
        </Text>
      </Pressable>
    </View>
  )
}