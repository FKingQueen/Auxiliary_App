import { Stack } from 'expo-router'
import HomeHeader from '../../components/homeHeader.jsx'

export default function _layout() {
  return (
      <Stack>
        <Stack.Screen 
        name="home" 
        options={{ 
          header: () => <HomeHeader/>, // Custom header component
         }} 
        />
      </Stack>
  )
}