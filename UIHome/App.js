import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './bottomnavigation'; // Import BottomTabNavigator từ file bạn đã tạo

export default function App() {

    return (
      <NavigationContainer>
        <View style={{ marginTop: 20, flex: 1 }}>
          {/* Nội dung màn hình hiện tại */}
          <View style={{ height: 80, flexDirection: 'row', backgroundColor: 'orange' }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'orange', marginLeft: 20 }}>
              <Image style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 40 }}
                source={require('../UIHome/assets/de.png')}
              />
              <Text style={{ alignSelf: 'center', marginLeft: 10 }}>Hi, </Text>
              <Text style={{ alignSelf: 'center' }}>Xuân anh chim to</Text>
            </View>
            <View style={{ flex:1 }}>
            </View>
            <View style={{ alignSelf: 'center',marginRight:20 }}>
              <Image source={require('../UIHome/assets/shopping-cart.png')} />
            </View>
          </View>
          
          {/* Bottom Tab Navigator */}
          <BottomTabNavigator />
          
          {/* StatusBar */}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    );
}

