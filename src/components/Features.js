import { View, Text,ScrollView,Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Features() {
  return (
 <ScrollView style={{ height: hp(60),marginVertical:16 }} showsVerticalScrollIndicator={false} bounces={false}>
<Text style={{fontSize:wp(6.5),fontWeight:'600',color:'#4A5568',marginBottom:8}}>Features</Text>

<View style={{backgroundColor:'#10B981',padding: 16,borderRadius: 16,marginBottom: 8,}}>
  <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:2}}>
    <Image style={{height:hp(4),width:hp(4),borderRadius: 999,overflow:'hidden',marginRight:5}} source={require('../../assets/images/chatgptIcon.png')}/>
    <Text style={{fontSize:wp(4.8),color:'#4a5568',fontWeight:'500'}}>ChatGPT</Text>
  </View>
  <Text style={{fontSize:wp(3.8) ,fontWeight:500}}>
  ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
  </Text>
</View>

<View style={{backgroundColor:'#C7D2FE',padding: 16,borderRadius: 16,marginBottom: 8,}}>
  <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:2}}>
    <Image style={{height:hp(4),width:hp(4),borderRadius: 999,overflow:'hidden',marginRight:5}} source={require('../../assets/images/dalleIcon.png')}/>
    <Text style={{fontSize:wp(4.8),color:'#4a5568',fontWeight:'500'}}>DALL-E</Text>
  </View>
  <Text style={{fontSize:wp(3.8) ,fontWeight:500}}>
  DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
  </Text>
</View>

<View style={{backgroundColor:'#A2F5EA',padding: 16,borderRadius: 16,marginBottom: 8,}}>
  <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:2}}>
    <Image style={{height:hp(4),width:hp(4),borderRadius: 999,overflow:'hidden',marginRight:5}} source={require('../../assets/images/smartaiIcon.png')}/>
    <Text style={{fontSize:wp(4.8),color:'#4a5568',fontWeight:'500'}}>Smart AI</Text>
  </View>
  <Text style={{fontSize:wp(3.8) ,fontWeight:500}}>
  A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
           </Text>
</View>

 </ScrollView>
  )
}