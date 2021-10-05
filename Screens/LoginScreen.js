import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity ,ImageBackground,TextInput,KeyboardAvoidingView} from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
const win = Dimensions.get('window');

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      word:'',
      email: '',
      password: '',
      username:'',
      passwordSecurity:true,
    };
  }
  GoToSignUpScreen = () => {
    this.props.navigation.navigate('SignUpScreen');
  };
  GoToForgotPasswordScreen = () => {
    this.props.navigation.navigate('ForgotPasswordScreen');
  };

  Signin=(email, password)=>{
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    alert('Signed in Successfully')
    //var username=this.props.navigation.getParam('username')
    this.props.navigation.navigate('ReadScreen')
    
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('password or email id is incorrect')
    
  });

}

  render() {
    return (
       <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <View style={{flex:1,width:win.width,height:win.height,backgroundColor:'black'}} >
      
      <ImageBackground
      source={{uri:'https://cdn.dribbble.com/users/916023/screenshots/15826116/media/b627336c13051402e6ed38ebbdd51c03.png?compress=1&resize=1600x1200'}}
      style={{width:win.width,height:win.height/1,marginTop:0,alignSelf:'center',borderRadius:2}}>

        <Text style={{fontSize:win.width/7,alignSelf:'center',marginTop:'9%',color:'#90CAF9',textShadowRadius:10,textShadowColor:'#EA80FC',fontFamily:'Courier-Bold'}}>
          LOGIN
        </Text>
        
        
   
        <TextInput 
         onChangeText={(text) => {
          this.setState({ email: text });
        }}
        value={this.state.email}
        placeholder="EMAIl "
        placeholderTextColor="#4527A0"
        
        style={{marginTop:win.height/3,backgroundColor:'#EA80FC',width:win.width/1.3,alignSelf:'center',padding:10,borderRadius:10,shadowColor:'#E040FB',shadowOpacity:50,shadowRadius:20}}/>
        
     
       <View style={{flexDirection:'row',marginTop:win.height/20}}>
       <TextInput 
        onChangeText={(text) => {
          this.setState({ password: text });
        }}
        secureTextEntry={this.state.passwordSecurity}
        placeholder="PASSWORD"
        placeholderTextColor="#4527A0"
        
        style={{backgroundColor:'#EA80FC',width:win.width/1.3,marginLeft:win.width/9,padding:10,borderRadius:10,shadowColor:'#E040FB',shadowOpacity:50,shadowRadius:20}}/>
<TouchableOpacity style={{marginLeft:-30,marginTop:4}}
        onPress={()=>{
          this.setState({
           passwordSecurity:false
          })
          }}> 
        <Ionicons name="eye-off" size={24} color="darkblue" />
        </TouchableOpacity>
       </View>
       <TouchableOpacity style={{marginLeft:win.width/2.4,width:win.width/2,padding:10,borderRadius:10,marginTop:-5}}
       onPress={this.GoToForgotPasswordScreen}>
          <Text style={{textAlign:'center',color:'#FF0266',fontSize:win.width/20,}}>
            Forgot Password?

          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#EA80FC',width:win.width/2,marginTop:'5%',padding:10,borderRadius:10,shadowColor:'#E040FB',shadowOpacity:10,shadowRadius:20}}
        onPress={()=>{this.Signin(this.state.email,this.state.password)}}>
          <Text style={{textAlign:'center',color:'#4527A0',fontSize:win.width/20}}>
            LOGIN

          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#EA80FC',width:win.width/2,marginTop:'3%',padding:10,borderRadius:10,shadowColor:'#E040FB',shadowOpacity:10,shadowRadius:20}}
        onPress={this.GoToSignUpScreen}>
          <Text style={{textAlign:'center',color:'#4527A0',fontSize:win.width/20}}>
            SIGN-UP

          </Text>
        </TouchableOpacity>




        </ImageBackground>
    
      </View>
      </KeyboardAvoidingView>
    );
  }
}
