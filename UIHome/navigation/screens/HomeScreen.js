import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: 20 }}>
      {/* Nội dung màn hình hiện tại */}
      <View style={{ height: 80, flexDirection: "row" }}>
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <Image
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              borderRadius: 40,
            }}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
          />
          <Text style={{ alignSelf: "center", marginLeft: 10 }}>Hi, </Text>
          <Text style={{ alignSelf: "center" }}>Xuân anh</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "flex-end",
            marginRight: 20,
          }}
        >
        
        <FontAwesomeIcon icon="shopping-cart" size={20} />
        
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          Find the best fit for{" "}
        </Text>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          all your needs!
        </Text>
        <View
          style={{
            flexDirection:'row',
            borderWidth: 1,
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "25%",
            marginTop: 10,
            borderRadius: 15,
          }}
        >  
        <Icon name="search" size={20} color="rgba(0, 0, 0, 0.4)" style={{ position: 'absolute', left: 10, top: 10 }} />
<TextInput style={{width:'80%',marginLeft:'10%',height:'85%',color:'#000',fontSize:20}} placeholder="Search"/>
<Icon name="ellipsis-h" size={20} style={{ marginRight:15}} />
        </View>
      </View>
    </View>
  );
}
