import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const win = Dimensions.get('window');

export default class ForgotPasswordScreen extends Component {
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
  
  GoToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  
  
  render() {
    return (
      <View>
        <ImageBackground
      source={{uri:'https://cdn.dribbble.com/users/916023/screenshots/15769021/media/b489b85998bbe348a138f70e69fe7751.png?compress=1&resize=1600x1200'}}
      style={{width:win.width,height:win.height/1,marginTop:0,alignSelf:'center',borderRadius:2}}>

<TouchableOpacity style={{marginLeft:'2%',marginTop:'10%'}}
       onPress={this.GoToLoginScreen}>
        <Ionicons name="arrow-back-circle-outline" size={win.width/8} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize:win.width/13,marginTop:'50%',marginLeft:'10%',color:'#00796B',shadowOpacity:10,shadowColor:'#B2DFDB',shadowRadius:10}}>
          FORGOT PASSWORD?
          
        </Text>
        <View style={{flexDirection:'row',marginTop:win.height/50}}> 

       <TextInput 
         onChangeText={(text) => {
          this.setState({ email: text });
        }}
        value={this.state.email}
        placeholder="EMAIL "
        placeholderTextColor="#80CBC4"
        
        style={{backgroundColor:'#00796B',width:win.width/1.3,alignSelf:'center',padding:10,borderRadius:10,shadowColor:'#E040FB',shadowOpacity:50,shadowRadius:20,marginLeft:'10%'}}/>
        <Entypo name="mail" size={24} color="#80CBC4" 
        style={{marginLeft:-30,marginTop:4}}/>
        </View>
        <TouchableOpacity style={{width:200,padding:10,borderRadius:5,marginTop:'8%',backgroundColor:'#00796B',alignSelf:'center'}}
          >
              <Text  style={{textAlign:'center',fontSize:win.width/20,color:'#80CBC4'}}>
                  SUBMIT
              </Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>
    );
  }
}