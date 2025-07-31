import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';


const LoggedInLayout = () => {
  const router = useRouter();
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="cart"
          options={{
            title: 'KIOSK',
            headerShown: true,
            tabBarLabel: 'Cart',
            headerTitleAlign: 'center', // Centers the title
            tabBarIcon: () => (
              <FontAwesome6 name="cart-shopping" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: 'KIOSK',
            headerShown: true,
            tabBarLabel: 'Home',
            headerTitleAlign: 'center', // Centers the title
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
            headerLeft: () => (
              <Pressable
                onPress={() => {
                  console.log('barcode scan pressed');
                }}
                style={{ padding: 8 }}
              >
                <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
              </Pressable>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <Pressable
                  onPress={() => {
                    console.log('stores pressed');
                  }}
                  style={{ padding: 8 }}
                >
                  <FontAwesome5 name="store" size={22} color="black" />
                </Pressable>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: 'KIOSK',
            headerShown: true,
            tabBarLabel: 'Account',
            headerTitleAlign: 'center', // Centers the title
            tabBarIcon: () => (
              <FontAwesome5 name="user-circle" size={24} color="black" />
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <Pressable
                  onPress={() => {
                    console.log('settings pressed');
                  }}
                  style={{ padding: 8 }}
                >
                  <Ionicons name="settings-sharp" size={26} color="black" />
                </Pressable>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  )
}


export default function RootLayout() {
  return (
    <LoggedInLayout />
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 4,
  },
  storeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  storeDetails: {
    marginLeft: 12,
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  storeAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  storePhone: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 52, // Align with text, not icon
  },
});