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
 
     export default class DetailKapal extends Component {
          constructor(props) {  
               //constructor to set default state  
               super(props);  
               this.state = {
                   isLoading: false,
                   data: [],
                   total : 0,
                   userId: localStorage.getItem('userId'),
   
               };
         }
       render() {
           return (
             <>
       <StatusBar barStyle="light-content" />
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
             <Header
                 Title ={"Detail Kapal"}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>

                   <View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Nama Kapal Pengangkut : </Text>
                            <Text style={styles.vesselName}>{this.props.namaKapal}</Text>
                       </View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Pemilik Perusahaan : </Text>
                            <Text style={styles.vesselName}>{this.props.pemilikPerusahaan}</Text>
                       </View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Tempat Tanda Selar : </Text>
                            <Text style={styles.vesselName}>{this.props.tempatTandaSelar}</Text>
                       </View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Nama Panggilan Kapal : </Text>
                            <Text style={styles.vesselName}>{this.props.namaPanggilanKapal}</Text>
                       </View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Nama Nahkoda : </Text>
                            <Text style={styles.vesselName}>{this.props.namaNahkoda}</Text>
                       </View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Bendera Kapal : </Text>
                            <Text style={styles.vesselName}>{this.props.benderaKapal}</Text>
                       </View>
                   </View>


          
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
        marginLeft : 35,
        marginRight : 35,
   },


   formPengangkut : {
        flexDirection :"row",
        marginBottom:3
   },
   namaKapal : {
        fontWeight:"bold"
   },
   vesselName : {
        fontStyle :"italic",
        fontWeight:"bold"
   },

   form :{
        marginTop:20
   },

   perusahaan : {
        fontWeight:"bold",
        marginBottom:3
   },

   formTempat:{
        flexDirection :"row"
   },
   txtPlaceAnd : {
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },
   numberOf : {
        fontStyle :"italic",
        fontWeight:"bold",
        marginTop:-5,
        marginBottom:5
   },

   formCallSign : {
        flexDirection:"row",
        marginBottom :5
   },
   namaPanggilanKapal : {
        fontWeight:"bold",
   },
   callSign : {
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },

   formCaptain : {
       flexDirection:"row",
       marginBottom :5
   },
   namaNakhoda : {
       fontWeight:"bold",
   },
   captain : {
       marginLeft:5,
       fontStyle :"italic",
       fontWeight:"bold"
   },

   formNomorID : {
        flexDirection:"row",        
   },
   nomorID : {
        fontWeight:"bold",
   },
   VHS : {
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },
   transmitter : {
        fontStyle :"italic",
        fontWeight:"bold",
        marginBottom :5
   },

   formBendera : {
        flexDirection:"row",
        marginBottom :5
   },
   benderaKapal : {
        fontWeight:"bold",
   },
   bendera : {
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },

   formSuratIzin :{
        flexDirection : "row"
   },
   txtSPI : {
        fontWeight:"bold",
   },
   txtFishing :{
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },
   nomorSPI :{
        marginLeft:25,
        flexDirection:"row",
        marginTop:5,
        marginBottom:3
   },
   txtnomorSPI : {
        fontWeight:"bold",
   },
   txtnumberSPI:{
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },
   expired :{
        marginLeft:25,
        flexDirection:"row",
        marginTop:5,
        marginBottom:3
   },
   txtmasaBerlaku : {
        fontWeight:"bold",
   },
   txtExpired:{
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },

   formSuratKeterangan : {
        flexDirection : "row"
   },
   txtSuratKeteranagn : {
       fontWeight:"bold"
   },
   txtActivation : {
          fontStyle :"italic",
          fontWeight:"bold"
   },
   ActivationNumber :{
          flexDirection:"row",
   },
   txtPelabuhan : {
          fontWeight:"bold",
          marginLeft:20,
          marginBottom:3
   },
   txtPort : {
          fontStyle :"italic",
          fontWeight:"bold"
   },
   txtNomor : {
        fontWeight:"bold"
   },
   txtNumber : {
        marginLeft:5,
        fontStyle :"italic",
        fontWeight:"bold"
   },

   formDaerahPenangkapan : {
       flexDirection:"row",
       marginBottom:3
   },
   txtPenangkapan :{
       fontWeight:"bold"
   },
   txtFishingGround : {
        marginLeft:5,
       fontStyle :"italic",
       fontWeight:"bold"
   },

   formTerbitSLO : {
        marginBottom : 3,
   },
   txtTerbitSLO:{
       fontWeight:"bold"
   },
   txtPreviousNumberSLO:{
       fontStyle : "italic",
       fontWeight :"bold"
   },

   formTerbitSPB:{
        flexDirection :"row"
   },
   txtTerbitSPB:{
        fontWeight:"bold"
   },
   txtPreviousSPB:{
       fontWeight :"bold",
       marginLeft:5,
       fontStyle:"italic"
   },
   txtPreviousNumberSPB:{
        fontWeight:"bold",
        fontStyle:"italic",
        marginBottom:3
   },
   
   formTangkapanIkan:{
        flexDirection:"row"
   },
   txtJumlahTangkapan: {
        fontWeight:"bold"
   },
   txtcatch :{
        fontWeight:"bold",
        fontStyle:"italic",
        marginLeft:3
   },
   jenisIkan:{
        flexDirection: "row",
        marginLeft:20,
        marginTop:10,
        marginBottom:3
   },
   txtJenisIkan:{
        fontWeight:"bold",
   },
   txtSpecies:{
        fontWeight :"bold",
        fontStyle:"italic",
        marginLeft:5
   },
   jumlah :{
        flexDirection:"row",
        marginLeft:20,
        marginTop:10,
        marginBottom:3
   },
   txtJumlah :{
        fontWeight:"bold"
   },
   txtAmount:{
        fontWeight:"bold",
        fontStyle:"italic",
        marginLeft:5
   },
   keadaanIkan:{
        marginLeft:20,
        marginTop:10,
        marginBottom:3
   },
   txtKeadaanIkan:{
        fontWeight:"bold"
   },
   txtOlahan:{
       marginLeft:15,
       fontWeight:"bold" 
   },

   note :{
      justifyContent :"center",
      alignItems:"center",
      marginTop:20
   },
   txtWajibCetak:{
        fontSize:9,
   },
   txtScan:{
        fontSize:9
   },

   send : {
     alignItems :"center",
     marginTop:20,     
   },
   sendData : {
     backgroundColor : "orange",
     padding : 10,
     borderRadius:7,
   },
   txtSendData : {
     color : "#ffff",
     fontWeight:"bold"
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
   }
 
 
 });
 
