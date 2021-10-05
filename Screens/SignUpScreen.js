import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image ,ImageBackground,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Ionicons } from '@expo/vector-icons';

const win = Dimensions.get('window');

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      word:'',
      email: '',
      password: '',
      lastname:'',
      username:'',
      passwordSecurity:true,
    };
  }
  

GoToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };

Signup=(email,password)=>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    db.collection('user').add({
      name:this.state.name,
      username:this.state.username,
      lastname:this.state.lastname,
      email:this.state.email,
    password:this.state.password,
    })
    alert('signed up successfully')
    this.props.navigation.navigate('LoginScreen')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Any 1 of your input is incorrect or password should be more than 6 letter')
    // ..
  });

}
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1,backgroundColor:'white'}} behavior="padding">
             <ScrollView>
      <View >
          <ImageBackground
      source={{uri:'https://cdn.dribbble.com/users/916023/screenshots/12627230/media/57dabf0e63ebaf2308c2c61f8ce92362.png?compress=1&resize=1600x1200'}}
      style={{width:win.width,height:win.height/1,marginTop:0,alignSelf:'center',borderRadius:2}}>
<View style={{flexDirection:'row',marginTop:'15%',}}>


         <TouchableOpacity style={{marginLeft:'2%'}}
       onPress={this.GoToLoginScreen}>
        <Ionicons name="arrow-back-circle-outline" size={win.width/8} color="white" />
        </TouchableOpacity>

         <Text style={{fontSize:win.width/7,alignSelf:'center',color:'#90CAF9',textShadowRadius:10,textShadowColor:'#90A4AE',fontFamily:'Courier-Bold',shadowOpacity:10,marginLeft:'10%'}}>
          SIGN UP
        </Text>

        </View>

        

<TextInput
  onChangeText={(text) => {
            this.setState({ username: text });
          }}
          placeholder="USERNAME"
          style={{marginTop:win.height/10,
            borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            padding: 10,
            backgroundColor:'#FFF9C4',
            borderColor:'#FBC02D',
            borderRadius:5}}
        />
         <TextInput 
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          placeholder="NAME"
         
          style={{borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            marginTop: '8%',
            padding: 10,
           backgroundColor:'#FFF9C4',
           borderRadius:5,
           borderColor:'#FBC02D'}}
        />
         <TextInput 
          onChangeText={(text) => {
            this.setState({ lastname: text });
          }}
          placeholder="LAST NAME"
          style={{borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            marginTop: '8%',
            padding: 10,
           backgroundColor:'#FFF9C4',
           borderRadius:5,
           borderColor:'#FBC02D'}}
          
        />


        <TextInput
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          value={this.state.email}
          placeholder="EMAIL"
          keyboardType={'email-address'}
          style={{borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            marginTop: '8%',
            padding: 10,
           backgroundColor:'#FFF9C4',
           borderRadius:5,
           borderColor:'#FBC02D'}}
        />
        <View style={{flexDirection:'row',marginTop: '8%',}}>
        <TextInput
    onChangeText={(text) => {
            this.setState({ password: text });
          }}
          placeholder="PASSWORD"
          secureTextEntry={this.state.passwordSecurity}
          style={{borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            padding: 10,
           backgroundColor:'#FFF9C4',
           borderRadius:5,
           borderColor:'#FBC02D',
          marginLeft:win.width/10}}
        />
         <TouchableOpacity style={{marginLeft:-30,marginTop:5}}
         onPress={()=>{
          this.setState({
           passwordSecurity:false
          })
          }}>
        <Ionicons name="eye-off" size={24} color="#E65100" />
         
        </TouchableOpacity>
          </View>
        <TouchableOpacity  style={{justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
         width: '40%',
         textAlign:'center', 
         marginLeft:'30%', 
         marginTop: win.height/20,
         backgroundColor:'#FFFF8D'}}
         onPress={()=>{this.Signup(this.state.email,this.state.password)}}>
          <Text 
          style={{textAlign:'center',fontSize:win.width/20,color:'#E65100'}}>
            SIGN UP
          </Text>
        </TouchableOpacity>


          </ImageBackground>

      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}