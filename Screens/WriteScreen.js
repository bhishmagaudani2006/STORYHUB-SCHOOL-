import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image,ImageBackground,KeyboardAvoidingView,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import db from '../config';
import firebase from 'firebase';
const win = Dimensions.get('window');

export default class WriteScreen extends Component {
    constructor() {
        super();
        this.state = {
          storytitle: '',
          author:'',
          yourstory: '',
    
        };
      }
      submitButtom=()=>{
       db.collection('stories').add({
          title: this.state.storytitle,
          author: this.state.author,
          storyText: this.state.yourstory,
        });
        alert(
          "story has been submitted"
        );
      }
      GoToReadScreen = () => {
        this.props.navigation.navigate('ReadScreen');
      };
  render() {
    return (
        
        <KeyboardAvoidingView style={{flex:1,backgroundColor:'#DCEDC8'}} behavior="padding">
            <ScrollView>
            <View style={{backgroundColor:'#DCEDC8'}}>

                <View style={{marginTop:'10%',flexDirection:'row'}}>


            <TouchableOpacity style={{marginLeft:'2%'}}
       onPress={this.GoToReadScreen}>
        <Ionicons name="arrow-back-circle-outline" size={win.width/8} color="#33691E" />
        </TouchableOpacity>

            <Text style={{textAlign:'center',fontSize:win.width/8,fontFamily:'Courier-Bold',color:'#33691E',marginLeft:'15%'}}>WRITE</Text>
            </View>


        <TextInput 
          style={styles.textinput}
          onChangeText={(text) => {
            this.setState({ storytitle: text });
          }}
          placeholder="STORY TITLE"
          placeholderTextColor="#33691E"
          value={this.state.storytitle}
          />

          <TextInput 
          style={styles.author}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
          placeholder="AUTHOR"
          placeholderTextColor="#33691E"
          value={this.state.author}
          />

           <TextInput 
          style={styles.yourstory}
          onChangeText={(text) => {
            this.setState({ yourstory: text });
          }}
          placeholder="WRITE YOUR STORY"
          placeholderTextColor="#33691E"
          multiline
          value={this.state.yourstory}
          />

          <TouchableOpacity style={{width:200,padding:10,borderRadius:5,marginTop:'8%',backgroundColor:'#33691E',alignSelf:'center'}}
           onPress={this.submitButtom}>
              <Text  style={{textAlign:'center',fontSize:win.width/20}}>
                  SUBMIT
              </Text>
          </TouchableOpacity>
 </View>
      </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
    textinput: {
      borderBottomWidth: 3,
      width: 300,
      alignSelf: 'center',
  
      marginTop:'9%',
      padding: 10,
      borderBottomColor:'#1B5E20',
    
    },
    author:{
   borderBottomWidth: 3,
      width: 300,
      alignSelf: 'center',
      marginTop: '15%',
      padding: 10,
      borderBottomColor:'#1B5E20',
    },
    yourstory:{
       borderWidth: 3,
      width: 300,
      alignSelf: 'center',
      marginTop:'15%',
      padding: 10,
      height:'50%',
      textAlign:'center',
      borderRadius:10,
      borderColor:'#1B5E20',
    
    }
  });
  