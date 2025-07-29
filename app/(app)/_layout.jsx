import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';



export default function _layout() {
  const router = useRouter();
  const [isStoreModalVisible, setIsStoreModalVisible] = useState(false);

  // Sample store data - replace with your actual store data
  const stores = [
    { id: 1, name: 'Downtown Store', address: '123 Main St', phone: '(555) 123-4567' },
    { id: 2, name: 'Mall Branch', address: '456 Shopping Blvd', phone: '(555) 234-5678' },
    { id: 3, name: 'Airport Location', address: '789 Terminal Dr', phone: '(555) 345-6789' },
    { id: 4, name: 'Westside Branch', address: '321 West Ave', phone: '(555) 456-7890' },
    { id: 5, name: 'North Plaza', address: '654 North St', phone: '(555) 567-8901' },
    { id: 6, name: 'South Center', address: '987 South Rd', phone: '(555) 678-9012' },
    { id: 7, name: 'Express Kiosk', address: '147 Quick Stop', phone: '(555) 789-0123' },
  ];

  const handleStoreSelect = (store) => {
    console.log('Selected store:', store.name);
    setIsStoreModalVisible(false);
    // You can add navigation or state update here
    // router.push(`/store/${store.id}`);
  };

  const StoreModal = () => (
    <Modal
      visible={isStoreModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setIsStoreModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Store</Text>
            <Pressable
              onPress={() => setIsStoreModalVisible(false)}
              style={styles.closeButton}
            >
              <MaterialCommunityIcons name="close" size={24} color="#666" />
            </Pressable>
          </View>

          <FlatList
            data={stores}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleStoreSelect(item)}
                style={styles.storeItem}
              >
                <View style={styles.storeInfo}>
                  <FontAwesome5 name="store" size={20} color="#007AFF" />
                  <View style={styles.storeDetails}>
                    <Text style={styles.storeName}>{item.name}</Text>
                    <Text style={styles.storeAddress}>{item.address}</Text>
                    <Text style={styles.storePhone}>{item.phone}</Text>
                  </View>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color="#ccc"
                />
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </Modal>
  );
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
                    setIsStoreModalVisible(true);
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
      <StoreModal />
    </>
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