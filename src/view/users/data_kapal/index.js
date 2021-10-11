
import React, { Component, useState } from 'react';
import NetInfo from '@react-native-community/netinfo'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ToastAndroid,
  FlatList,
  LogBox   
} from 'react-native';

import Header  from "./../../../components/header"
import { COLOR_THEME } from './../../../libraries/colors';
import { Actions } from 'react-native-router-flux';

export default class DataKapal extends Component {

  constructor(props) {
    super(props);
    this.state = {
         data:[],
         colors : ['#123456', '#654321', '#fdecba', '#abcdef'],
         icon : ['https://via.placeholder.com/100x100/008080/000000','https://via.placeholder.com/100x100/FF6347/000000','https://via.placeholder.com/100x100/FFB6C1/000000','https://via.placeholder.com/100x100/4682B4/000000']
    };
  }

  componentDidMount() {
     let url = 'http://marinir.herokuapp.com/permohonan/get/slo';
     fetch(url).then(results=>results.json())
     .then(results=>this.setState({data :results.data, total : results.count
     }))
 }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
       return (
         <TouchableOpacity key={item.kapal._id} style={styles.btnColor} onPress={() => {this.tagClickEventListener(item.kapal.namaKapal)}}>
           <Text>{item.kapal.namaKapal}</Text>
         </TouchableOpacity> 
       );
   }
 

  render() {
    return (
     <>
     <StatusBar barStyle="light-content" />
          <SafeAreaView style={{ flex: 1 }}>
           <View>
           <Header
                 Title ={"Daftar SLO - Kedatangan"}
                 back= {true}
             />
           </View>

           <View style={styles.body}>

           <View style={styles.content}>
           <Text style={styles.txtWelcome}>Total Data : {this.state.total}</Text>

        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item, index) => {
            return item._id;
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity 
              style={[styles.card, {borderColor:this.state.colors[index % this.state.colors.length]}]} 
              onPress={() => {this.cardClickEventListener(item)}}
              >
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: this.state.icon[index % this.state.icon.length]}}/>
                  <Text style={styles.name}>{item.kapal.namaKapal.toUpperCase()}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>

      <View style={styles.footer}>
                <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
            </View>
            </View>
            </View>
          </SafeAreaView>
          </>
      );


  }
}

const styles = StyleSheet.create({
     scrollView: {
 
     },
     body: {
       backgroundColor :"#ffff",
       flex:1,
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
       marginTop:-25
     },
   
     content : {
        marginTop : 35,
        marginLeft : 15,
        marginRight : 15,
     },

     txtWelcome : {
          fontSize : 16,
          color : COLOR_THEME,
          fontWeight:"bold"
        },
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:10,

  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth:2,
    borderColor :"#a0bee8",
    borderRadius:10,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
    borderWidth:2,
    borderColor :"#a0bee8",
    borderRadius:10,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:10,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
});  
                                            