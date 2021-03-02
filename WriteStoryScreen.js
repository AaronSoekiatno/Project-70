import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component {
constructor(){
    super();
    this.state={
        title:'',
        author:'',
        story:''
    }
}
  render(){
    return(
      <View>
          <KeyboardAvoidingView style = {styles.container}behavior="padding"enabled>
        <Header backgroundColor={'pink'} 
        centerComponent={{text:'Story Hub',style:{width:200,height:50}}}/>
        <TextInput 
        style={styles.title}
        placeholder="Story Title"
        onChangeText={(text)=>{
            this.setState({
                title:text
            })
        }}
        />

        <TextInput 
        style={styles.author}
        placeholder="Author"
        onChangeText={(text)=>{
            this.setState({
                author:text
            })
        }}
        />

        <TextInput 
        style={styles.story}
        placeholder="Write your Story"
        multiline={true}
        onChangeText={(text)=>{
            this.setState({
                story:text
            })
        }}
        />
        <TouchableOpacity style={styles.submit}>
        <Text>Submit</Text>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    borderWidth:2,
    marginTop:50,
    width:200
  },
  author:{
      borderWidth:2,
      margin:50,
      width:200
  },
  story:{
      borderWidth:2,
      margin:-15,
      height:200,
      width:200
  },
  submit:{
      backgroundColor:'pink',
      width:50,
      height:25,
      borderRadius:12,
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
  }
});