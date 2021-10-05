import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default class HomeScreen extends Component {
  GoToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  render() {
    return (
      <View style={{flex:1,width:win.width,height:win.height,backgroundColor:'white'}}>
        <Text style={{marginTop:'20%',fontSize:win.width/10,alignSelf:'center',fontFamily:'PingFangSC-Regular'}}>
          STORYHUB
        </Text>
      
      <Image
      source={{uri:'https://cdn.dribbble.com/users/916023/screenshots/6479599/superhands3.png?compress=1&resize=800x600'}}
      style={{width:win.width/1.2,height:win.height/3,marginTop:'10%',alignSelf:'center'}}/>
      <Text style={{width:300,alignSelf:'center',marginTop:'10%',fontFamily:'GillSans-UltraBold',color:'black'}}>
      EXCHANGE YOUR STORY WITH OTHER USER AND IMPROVE YOUR VOCABULARY
      </Text>

      <TouchableOpacity style={{backgroundColor:'#71b5ff',width:win.width/2,padding:10,marginTop:'20%',alignSelf:'center',borderRadius:10}}
      onPress={this.GoToLoginScreen}>
       <Text style={{textAlign:'center'}}>
       NEXT
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
