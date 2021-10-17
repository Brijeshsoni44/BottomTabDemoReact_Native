import React from 'react'
import { AppRegistry ,ImageBackground,SafeAreaView, 
  View , Text, StyleSheet, Image, TextInput, TouchableOpacity,Button,
   ScrollView, StatusBar, KeyboardAwareScrollView, KeyboardAvoidingView} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
// var bg=require('./Components/login_bg.png');
export default class Login extends React.Component{


  constructor(props) {
    super();
    this.state = { 
    }
  }


    render(){
    return(
      <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex:1}} bounces={false}>
     
         

        <StatusBar backgroundColor='#07172a' barStyle="light-content"/>
        <View style={styles.header}>
          {/* <Image source={require('./Components/albot_logo_circle.png')} style={styles.logoImg}/>  */}
        </View>
        <View style={styles.footer}>
        <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
          </View>
          <Text style={styles.LoginText}>LOGIN</Text>
        
   <View style={styles.SectionStyle}>
       <TextInput
       style={{flex:1,paddingLeft:8}}
       placeholder="E-mail / Username"
       underlineColorAndroid="transparent"
       placeholderTextColor="#0a244c"/>
     </View>
     <View style={styles.SectionStyle}>
       <TextInput
       style={{flex:1,paddingLeft:8}}
       placeholder="Password"
       underlineColorAndroid="transparent"
       placeholderTextColor="#0a244c"/>
     </View>
     <TouchableOpacity activeOpacity={1.0}
                    style={styles.button} onPress={() => this.props.navigation.navigate('BottomDrawer')} >
                   
                    <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
                <View style={styles.footerforgotView}>
                    <Text style={styles.footerText} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot Password?
                    </Text>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? 
                    <Text onPress={() => this.props.navigation.navigate('SignUp')}  style={styles.footerLink}
                    > SignUp</Text></Text>
                </View>
        </View>
   </ScrollView>  
   </KeyboardAvoidingView>
   

    )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex:.3,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logoImg: {
    width: 180,
    height:180,
    marginTop:-240,
    zIndex:99,   
  },
  footer: {
      flex: .7,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      //paddingVertical: 10,
      paddingTop:120,
      paddingHorizontal: 5
  },
  LoginText: {
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#07172a',
    
  },

  containerFooter: {
    flex: 1,
    alignItems: 'center'
},
button: {
  backgroundColor: '#07172a',
  marginLeft: 16,
  marginRight: 16,
  marginTop: 20,
  height: 45,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: 'center'
},
buttonTitle: {
  color: 'white',
  fontSize: 16,
  fontWeight: "bold"
},
footerforgotView: {
  flex: 1,
  alignItems: "flex-end",
  marginTop: 20,
  paddingLeft:20,
  paddingRight:20,
},
footerView: {
  flex: 1,
  alignItems: "center",
  marginTop: 20
},
footerLink: {
  color: "#07172a",
  fontWeight: "bold",
  fontSize: 16,
  
},
footerText: {
  fontSize: 16,
  color: '#000'
},

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#07172a',
        borderRadius: 5 ,  
        marginTop: 20,
        margin:12,
        height: 45,
        borderWidth: 1.5,
        marginLeft:16,
        marginRight: 16
    },
    
});   


