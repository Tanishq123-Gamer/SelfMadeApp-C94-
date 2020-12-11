import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from "../config"

export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state ={
      value:0
    }
    
  }

getUnreadNotifs=()=>{
  db.collection('all_notifications')
  .where("notification_status","==","unread")
  .onSnapshot((snapshot)=>{
      var unreadNotifs = snapshot.docs.map((doc)=>{doc.data()}) 
      this.setState({value:unreadNotifs.length})  

  })
}
  componentDidMount(){
    this.getUnreadNotifs()
  }
  BellIconWithBadge=()=>{
    return(
      <View>
        <Icon   
        name='bell' 
        type='font-awesome' 
        color='#696969' size={25} 
        onPress={()=>{this.props.navigation.navigate("Notification")}}
        />


        <Badge 
        containerStyle={{ position: 
          'absolute', 
          top: -4, 
          right: -4 }}
        value={this.state.value}
        />
        </View>
    )
  }
  render(){
    return (
      <Header
        leftComponent={
          <Icon name="bars" type="font-awesome" color='#696969' 
          onPress={()=>{
            this.props.navigation.toggleDrawer()
          }}/>
        }
        centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}

        rightComponent={<this.BellIconWithBadge {...this.props}/>}
        backgroundColor = "#eaf8fe"
      />
    );
  }
}




