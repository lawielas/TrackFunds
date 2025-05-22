import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: "#244268",
        headerStyle: {
            backgroundColor: '#25292e'
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: '#FEFEFE'
        }
         }}>
      <Tabs.Screen name="home" options={{ 
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : "home-outline"} color={color} size={24}/>
        )
     }} />
      <Tabs.Screen name="transactions" options={{ 
        headerShown: false,
        title: 'Transactions',
        tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'cash-sharp' : "cash-outline"} color={color} size={24}/>
        )
         }} />
         <Tabs.Screen name="reports" options={{ 
        headerShown: false,
        title: 'Reports',
        tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'document-text-sharp' : "document-text-outline"} color={color} size={24}/>
        )
         }} />
         <Tabs.Screen name="settings" options={{ 
        headerShown: false,
        title: 'Settings',
        tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'settings-sharp' : "settings-outline"} color={color} size={24}/>
        )
         }} />
    </Tabs>
  );
}
