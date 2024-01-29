import { View, Text, SafeAreaView,Image,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants/index'
export default function HomeScreen() {
  const [messages , setMessages] = useState(dummyMessages);
  const [recording,setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

const clear =()=>{
  setMessages([]);
}

const stopSpeaking = ()=>{
  setSpeaking(false);
}


  return (
 <SafeAreaView style={ {flex:1, backgroundColor:'white',top:30 }}>
  <SafeAreaView style={{flex:1, flexDirection:'column',marginHorizontal:5,}}>
    {/* bot icon */}
    <View style={{flexDirection:'row',justifyContent:'center' }} >
      <Image source={require('../../assets/images/bot.png')} style={{height:hp(15),width:hp(15)}}/>
    </View>
{/* features or messages */}
{
  messages.length>0?(
    <View style={{flex:1,marginVertical:8}}>
  <Text  style={{fontSize: wp(5),color:'#4B5563',fontWeight:'600',marginLeft:4}}>Assistant</Text>
        
        <View 
          style={{height: hp(58),backgroundColor:'#E2E8F0',borderRadius:12,padding:16}} 
          >
            <ScrollView  
              // ref={scrollViewRef} 
              bounces={false} 
              style={{marginVertical:10}}
              showsVerticalScrollIndicator={false}
            >
              {
                messages.map((message, index)=>{
                  if(message.role=='assistant'){
                    if(message.content.includes('https')){
                      // result is an ai image
                      return (
                        <View key={index} style={{flexDirection:'row',justifyContent:'flex-start'}}>
                          <View 
                          style={{padding:8,flex:1,borderRadius:20,backgroundColor:'#D1FAE5', borderTopLeftRadius: 0,}} >
                              <Image  
                                source={{uri: message.content}} 
                                 
                                resizeMode="contain" 
                                style={{height: wp(60), width: wp(60),borderRadius:20}} 
                              />
                          </View>
                        </View>
                        
                        
                      )
                    }else{
                      // chat gpt response
                      return (
                        <View 
                          key={index} style={{width: wp(70),backgroundColor:'#D1FAE5', padding: 8, borderRadius: 20, borderTopLeftRadius: 0,}} 
                         >
                          <Text  style={{fontSize: wp(4), color: '#4B5563'}}  >
                            {message.content}
                          </Text>
                        </View>
                      )
                    }
                  }else{
                    // user input text
                    return (
                      <View key={index} style={{flexDirection:'row',justifyContent:'flex-end', marginVertical:7}}>
                        <View 
                          style={{width: wp(70),backgroundColor:'white',padding:'8',borderRadius:8,borderTopRightRadius:0}} 
                          >
                          <Text style={{fontSize: wp(4)}}  >
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                  
                  
                })
              }
            </ScrollView>
        </View>
    </View >
  ):(
    <Features/>
  )
}


{/* recording, clear and stop buttons */}
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
  {
    recording?(
<TouchableOpacity style={{marginVertical:36}}>
  <Image
  source={require('../../assets/images/voiceLoading.gif')}
  style={{borderRadius:999,overflow:'hidden',width:hp(10),height:hp(10)}}
  />
</TouchableOpacity>
    ):(
<TouchableOpacity style={{marginVertical:36}}>
  <Image
  source={require('../../assets/images/recordingIcon.png')}
  style={{borderRadius:999,overflow:'hidden',width:hp(10),height:hp(10)}}
  />
</TouchableOpacity>
    )
  }

  {
    messages.length>0 && (
      <TouchableOpacity onPress={clear} style={{backgroundColor:'#A0AEC0',borderRadius:16,padding:8,position:'absolute',right:30,}}>
<Text style={{color:'white',fontWeight:'bold'}}>Clear</Text>
      </TouchableOpacity>
    )
  }

  
{
speaking && (
      <TouchableOpacity onPress={stopSpeaking} style={{backgroundColor:'#EF4444',borderRadius:16,padding:8,position:'absolute',left:30,}}>
<Text style={{color:'white',fontWeight:'bold'}}>Stop</Text>
      </TouchableOpacity>
    )
  }

</View>


  </SafeAreaView>
 </SafeAreaView>
  )
}