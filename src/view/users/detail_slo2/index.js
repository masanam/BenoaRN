/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component, useState} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   Image,
   TextInput
 } from 'react-native';
 
 
 import { Checkbox } from "react-native-paper"
import { Actions } from 'react-native-router-flux';
 
 import Header  from "./../../../components/header"
 import { COLOR_THEME } from './../../../libraries/colors';
 import DropDownPicker from 'react-native-dropdown-picker';
 
     export default class DetailSlo2 extends Component {
          constructor(props) {  
               //constructor to set default state  
               super(props);  
               this.state = {
                   isLoading: false,
                   data: [],
                   total : 0,
                   userId: localStorage.getItem('userId'),
                   colors : '#123456',
               //     colors : ['#123456', '#654321', '#fdecba', '#abcdef'],
                   icon : ['https://via.placeholder.com/100x100/008080/000000','https://via.placeholder.com/100x100/FF6347/000000','https://via.placeholder.com/100x100/FFB6C1/000000','https://via.placeholder.com/100x100/4682B4/000000']
          
               };
         }
       render() {
           return (
             <>
       <StatusBar barStyle="light-content" />
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
             <Header
                 Title ={"Detail SLO Kedatangan"}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>

               <TouchableOpacity 
              style={[styles.card]} 
              >
                <View style={styles.cardTitle}>
                  <Text style={styles.name}>{this.props.namaKapal.toUpperCase()}</Text>
                  <Text style={styles.nameP}>({this.props.pemilikPerusahaan})</Text>

                  <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Type Permohonan </Text>
                            <Text style={styles.nameC}>: {this.props.typePermohonan}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor SPI </Text>
                            <Text style={styles.nameC}>: {this.props.nomorSPI}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Masa Berlaku SPI </Text>
                            <Text style={styles.nameC}>: {this.props.masaBerlakuSPI}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Pelabuhan  Transmitter  </Text>
                            <Text style={styles.nameC}>: {this.props.pelabuhanTransmitter}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jenis Ikan </Text>
                            <Text style={styles.nameC}>: {this.props.jenisIkan}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jumlah (Kg) </Text>
                            <Text style={styles.nameC}>: {this.props.jumlah}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Keadaan Ikan  </Text>
                            <Text style={styles.nameC}>: {this.props.keadaan}</Text>
                       </View>
                </View>
                <Text style={styles.btnColor} >{this.props.status}</Text>

                <View style={[styles.cardContent, styles.tagsContent]}>
                  {/* {this.renderTags(item)} */}
                </View>
              </TouchableOpacity>

                    {/* </View> */}
                    

 
                   <View style={styles.footer}>
                       <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
                   </View>
               </View>
             </View>
         </ScrollView>
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
  cardTitle:{
    marginLeft:10, 
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
    padding:10,
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
    fontSize:16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  nameP:{
    fontSize:14,
    alignSelf: 'center'
  },
  nameC:{
     fontSize:16,
     fontWeight: 'bold',
     marginLeft:10,
   },
   namaK:{
     fontWeight: '600',
     color: '#222',
     fontSize: 16,
     width:150,

   },
  btnColor: {
    padding:10,
    borderRadius:10,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
    alignSelf: 'center',
     color:'#ff0000',
  },

   txtInput : {
        padding :6,
        borderWidth:2,
        borderColor :"#a0bee8",
        borderRadius:10,
        paddingLeft:20
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
 
