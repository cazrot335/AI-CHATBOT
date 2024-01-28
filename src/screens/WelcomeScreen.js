import { StyleSheet,View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Page } >
      {/* title */}
      <View style={styles.top } >
<Text style={styles.topTextO}>
Cazrot
</Text>
<Text style={styles.topTxtS}>
It's CAZ ,Your One Click bot
</Text>

      </View>
      {/* assistant Image */}
      <View style={styles.middle }>
<Image
 source={require('../../assets/images/welcome.png')}
 style={{height: wp(75), width: wp(75)}}
/>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.bottom }>
<Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
Page:{
  flex:1,
  backgroundColor:'white',
  justifyContent:'space-around',
  
},
top:{
marginBottom:8,

},
flex: 1,
justifyContent: 'center',
alignItems: 'center',
middle:{
  flexDirection: 'row', 
  justifyContent: 'center', 
  
},
bottom:{
  backgroundColor: '#059669', 
  marginHorizontal: 15,
  padding: 16, 
  borderRadius: 16,
  
},
btnText:{
color:'white',
fontWeight:'bold',
textAlign: 'center',
fontSize:wp(6),

},
topTextO:{
  fontSize: wp(10), 
  fontWeight: 'bold',
  color: '#707070', 
  textAlign: 'center',
 
},
topTxtS:{
  fontSize: wp(4), 
  fontWeight: '600', 
  letterSpacing: wp(0.5),
  color: '#606060', 
  textAlign: 'center',
 
}

})