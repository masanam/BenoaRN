
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

export default class FormHPK1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      total : 0,
      userId: localStorage.getItem('userId'),
         colors : ['#123456', '#654321', '#eea900', '#008b82', '#abcdef'],
         icon : ['https://via.placeholder.com/100x100/008080/000000','https://via.placeholder.com/100x100/FF6347/000000','https://via.placeholder.com/100x100/FFB6C1/000000','https://via.placeholder.com/100x100/4682B4/000000']
    };
  }

//   componentDidMount() {
//     let url = 'http://marinir.herokuapp.com/kapal/getbyuser/'+ this.state.userId
//     fetch(url).then(results=>results.json())
//      .then(results=>this.setState({data :results.data, total : results.count
//      }))
//  }

 componentDidMount() {
  fetch('http://marinir.herokuapp.com/kapal/get').then(results=>results.json())
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
        <TouchableOpacity key={item._id} style={styles.btnColor} onPress={() => {this.tagClickEventListener(item.namaKapal)}}>
        <Text style={styles.txtColor}>{item.namaKapal}</Text>
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
                 Title ={"Pilih Kapal Berangkat"}
                 back= {true}
             />
           </View>

           <View style={styles.body}>

           <View style={styles.content}>
           <Text style={styles.txtWelcome}>Total Data : {this.state.total}</Text>

        {/* <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View> */}

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
              onPress={()=>Actions.DetailHPK1({
                namaKapal: item.namaKapal,
                jenisKapal: item.jenisKapal,
                namaPanggilanKapal: item.namaPanggilanKapal,
                bendera: item.bendera,
                tempatTandaSelar: item.tempatTandaSelar,
                nomorIdTransmitter: item.nomorIdTransmitter,
                merkMesin : item.merkMesin,
                nomorSeriMesin : item.nomorSeriMesin,
                kekuatanMesin : item.kekuatanMesin,
                namaPerusahaan: item.namaPerusahaan
              })}
              >
                <View style={styles.cardTitle}>
                  <Text style={styles.name}>{item.namaKapal.toUpperCase()}</Text>
                  <Text style={styles.name}>{item.namaPerusahaan}</Text>
                  <Text style={styles.nameP}>({item.jenisKapal})</Text>
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
    padding:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderLeftWidth:20,
    marginBottom:10,
    borderWidth:2,
    borderColor :"#a0bee8",
    borderRadius:10,
  },
  cardTitle:{
    marginLeft:10, 
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:5, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:5,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  nameP:{
    fontSize:14,
    alignSelf: 'center'
  },
  txtColor: {
    color:"#ffffff",
  },
  btnColor: {
    padding:10,
    borderRadius:10,
    marginHorizontal:3,
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BFFF",
  },
  footer : {
    position : "relative",
    justifyContent :"center",
    alignItems:"center", 
    marginTop : 45,
    marginBottom:2
  },
  txtFooter : {
    color :COLOR_THEME,
    fontSize:12,
    fontWeight :"bold"
  },
});  
                                            