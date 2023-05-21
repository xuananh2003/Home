import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home'; // Thay thế HomeScreen bằng tên màn hình chính của bạn

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} /> {/* Thay thế HomeScreen bằng tên màn hình chính của bạn */}
        {/* Thêm các Tab.Screen khác tại đây */}
      </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;