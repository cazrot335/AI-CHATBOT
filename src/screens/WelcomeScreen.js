import { StyleSheet,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.Page } >
      {/* title */}
      <View style={styles.top } >
<Text style={styles.topTextO}>
Cazrot
</Text>
<Text style={styles.topTxtS}>
HI, Caz Here For Your Service Click Below To Proceed
</Text>

      </View>
      {/* assistant Image */}
      <View style={styles.middle }>

      </View>
      <TouchableOpacity style={styles.bottom }>
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
},
topTextO:{
  fontSize: wp(10), // Set font size to 10% of screen width
  fontWeight: 'bold',
  color: '#707070', // Adjust the color to your preference
  textAlign: 'center',
  // Other text styles..
},
topTxtS:{
  fontSize: wp(4), // Set font size to 4% of screen width
  fontWeight: '600', // Equivalent to font-semibold
  letterSpacing: wp(0.5), // Set letter spacing to 0.5% of screen width
  color: '#606060', // Adjust the color to your preference
  textAlign: 'center',
  // Other text styles...
}

})