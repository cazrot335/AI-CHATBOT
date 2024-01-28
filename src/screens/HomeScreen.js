import { View, Text, SafeAreaView,Image } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';

export default function HomeScreen() {
  const [messages , setMessages] = useState([]);
  return (
 <View style={ {flex:1, backgroundColor:'white', }}>
  <SafeAreaView style={{flex:1, flexDirection:'column',marginHorizontal:5,}}>
    {/* bot icon */}
    <View style={{flexDirection:'row',justifyContent:'center',}} >
      <Image source={require('../../assets/images/bot.png')} style={{height:hp(15),width:hp(15)}}/>
    </View>
{/* features or messages */}
{
  messages.length>0?(
    <View>

    </View>
  ):(
    <Features/>
  )
}
  </SafeAreaView>
 </View>
  )
}