import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image,ScrollView,TouchableOpacity,FlatList,Button } from 'react-native';
import { Dimensions } from 'react-native';
import db from '../config';
import { FontAwesome } from '@expo/vector-icons';
const win = Dimensions.get('window');

export default class ReadScreen extends Component {
  constructor(props){
    super(props)
    this.state={  
       search: '',
      stories:[]
    }
     }
     
      updateSearch = (search) => {
       this.setState({ search });
     };
     
   componentDidMount=async()=>{
     const query = await db.collection('stories').get()
     console.log(db)
     query.docs.map(doc=>{
       this.setState({
         stories:[...this.state.stories,doc.data()]
       })
     })
   }
   GoToWriteScreen = () => {
    this.props.navigation.navigate('WriteScreen');
  };
  render() {
    const { search } = this.state;
    return (
      <ScrollView style={{backgroundColor:'#FFCCBC'}}>
      <View style={{flex:1,backgroundColor:'#FFCCBC'}}>
      <Text style={{textAlign:'center',marginTop:'10%',fontSize:win.width/8,fontFamily:'Courier-Bold',color:'#FF3D00'}}>READ</Text>
    
     <TouchableOpacity style={{marginLeft:'65%',backgroundColor:'#FBE9E7',width:100,padding:10,borderRadius:5,marginTop:'5%',flexDirection:'row'}}
     onPress={this.GoToWriteScreen}>
     <FontAwesome name="pencil-square-o" size={24} color="black" />
     <Text style={{textAlign:'center',marginLeft:5,marginTop:2}}>Write</Text>
    </TouchableOpacity>

       <FlatList
       data={this.state.stories}
       renderItem={({item})=>(
         <View style={{borderWidth:5,borderRadius:10,margin:10,borderColor:'#FF5722'}}>
           <View>
             <Text style={{marginLeft:'1%',marginTop:'1%',color:'#FF8A65'}}>{'Title:'+item.title}</Text>
             </View>
           <View>
             <Text style={{marginLeft:'1%',marginTop:'1%',color:'#FF6E40'}}>{'Author:'+item.author}</Text>
             </View>
           <View> 
             <Text style={{marginLeft:'1%',marginTop:'1%',color:'#FF3D00'}}>{'Story: '+item.storyText}</Text>
             </View>
       </View>)}
       keyExtractor={(item,index)=>index.toString()}
       onEndReached={this.fetchMoreStories}
       onEndReachedThreshold={0.2}/>

      </View>
      </ScrollView>
    );
  }
}