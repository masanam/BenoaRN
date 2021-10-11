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
  TextInput,
  Alert,
  ToastAndroid,
  Dimensions
} from 'react-native';

import { Checkbox } from "react-native-paper"

import Header  from "./../../../components/header"
import { COLOR_MENU_AVAILABLE, COLOR_REGISTER_NEW_SLO, COLOR_THEME } from './../../../libraries/colors';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconAntDesign from 'react-native-vector-icons/AntDesign'; 
import IconIonicons from 'react-native-vector-icons/Ionicons'; 

import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';

const deviceWidth = Dimensions.get("window").width;

export default class DetailHPK1 extends Component {
  state = {
     isVisible: false,
    avatarSource : null,
    fotoNPWP : null,
    namaKapal:'',
    pemilikPerusahaan:'',  
    tempatTandaSelar:'',
    namaPanggilanKapal:'',  
    namaNahkoda:'',
    benderaKapal:'',  
    nomorIdTransmitter:'',
    createdBy:'',   
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId') 
  }

          displayModal(show){
               this.setState({isVisible: show})
          }

  onRegisterKapal = () => {
    let url = 'http://marinir.herokuapp.com/kapal/create';
    let dataToSend = {
     namaKapal : this.state.namaKapal ,
     pemilikPerusahaan : this.state.pemilikPerusahaan,
     tempatTandaSelar : this.state.tempatTandaSelar ,
     namaPanggilanKapal : this.state.namaPanggilanKapal,
     namaNahkoda : this.state.namaNahkoda ,
     benderaKapal : this.state.benderaKapal,
     nomorIdTransmitter : this.state.nomorIdTransmitter ,
     createdBy : this.state.userId ,
          };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

     //    console.log(formBody);

     fetch(url, { 
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded' ,
        'Authorization' : 'Bearer '+ this.state.token
      },
    })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
  .then(([statusCode, data]) => {
//     console.log(statusCode);
//     console.log(data);
    ToastAndroid.show('Update Keberangkatan Sukses', ToastAndroid.SHORT);
//     setTimeout(() =>
//                 {
//                     this.displayModal(true);
//                 },200)
    Actions.Home();
})
  .catch((error) => {
    console.error(error);
    this.setState({ message: error.message });
  });                                            
    
};
 
  render() {
      return (
        <>
          <StatusBar barStyle="light-content" />
          <SafeAreaView>
          <ScrollView style={styles.scrollView}>
             <Header
                 Title ={"FORM HPK KEBERANGKATAN"}
                 modeRegistrasi={true}
                 backRegistrasi={true}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>

                   <View>
                   <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jenis Kapal </Text>
                            <Text style={styles.nameC}>: {this.props.jenisKapal}</Text>
                       </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Pemilik Perusahaan </Text>
                            <Text style={styles.nameC}>: {this.props.namaPerusahaan}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Tempat Tanda Selar </Text>
                            <Text style={styles.nameC}>: {this.props.tempatTandaSelar}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nama Panggilan Kapal</Text>
                            <Text style={styles.nameC}>: {this.props.namaPanggilanKapal}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Bendera Kapal </Text>
                            <Text style={styles.nameC}>: {this.props.bendera}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor Id Transmitter </Text>
                            <Text style={styles.nameC}>: {this.props.nomorIdTransmitter}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Merk Mesin </Text>
                            <Text style={styles.nameC}>: {this.props.merkMesin}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor Seri Mesin </Text>
                            <Text style={styles.nameC}>: {this.props.nomorSeriMesin}</Text>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Kekuatan Mesin </Text>
                            <Text style={styles.nameC}>: {this.props.kekuatanMesin}</Text>
                       </View>

                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Komponen Alat Tangkap </Text>
                       </View>
                       <TextInput
                          multiline={true}
                          numberOfLines={4}
                          onChangeText={(keterangan) => this.setState({keterangan})}
                          value={this.state.text}
                          style={styles.txtInput}
                          />
                   </View>

                   
         

                   <View style={styles.send}>
                         <TouchableOpacity
                            style={styles.sendData}
                            onPress={this.onRegisterKapal}
                            >
                              <Text style={styles.txtSendData}>Simpan Data Kapal</Text>
                         </TouchableOpacity>
                    </View>
 
                   <View style={styles.footer}>
                       <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
                   </View>
               </View>
             </View>

             <Modal 
                         visible={this.state.isVisible}
                         animationIn={"slideInUp"}
                         animationOut={"bounceOut"}
                         animationInTiming={700}
                         animationOutTiming={1000}
                         hasBackdrop={true}
                         deviceWidth={deviceWidth}       
                         style={{borderRadius:20}}
                    >

                    <View style={{backgroundColor:COLOR_THEME, borderRadius:10, padding:8,}}>
                    <TouchableOpacity title="Hide modal" onPress={()=> {
                            this.displayModal(!this.state.isVisible);
                            Actions.Home();
                        }} 
                        style={{justifyContent:'flex-end', alignItems:'flex-end', padding:5}} >
                        <IconAntDesign                        
                            name={'close'}
                            size={25}
                            style={{padding:5}}
                            color={"#ffff"}
                        />
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.modalUser}>
                            <View style={styles.Checkbox}>
                                <IconIonicons 
                                    name={"checkbox"}
                                    size={130}
                                    color={"#ffff"}
                                />
                                <Text style={styles.terimkasih}>Terima Kasih</Text>
                                <Text style={styles.terkirim}>Permohonan Anda Berhasil terkirim</Text>
                                <Text style={styles.cekPermohonan}>(Anda dapat periksa status permohonan pada menu "cek permohonan")</Text>

                            </View>

                        </View>

                    </ScrollView>
                    </View>

                    </Modal>

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
     cardContent:{
          flexDirection:'row',
          marginLeft:3, 
          padding:10,
        },
        nameC:{
          fontSize:16,
          fontWeight: 'bold',
          marginLeft:10,
        },
        namaK:{
          marginLeft: 0,
          fontWeight: '600',
          color: '#222',
          fontSize: 16,
          width:180,
     
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
   
    Checkbox :{
      alignItems:"center"
  },
  terimkasih:{
      fontSize:25,
      color:"#ffff",
      fontWeight:"bold"
  },
  terkirim :{
      color :"#ffff"
  },
  cekPermohonan:{
      color: "orange",
      fontSize:9
  },
  
  txtTitle :{
    fontWeight:"bold"
  },
  downloadSurat :{
    alignItems:"flex-start"
  },
  btnDownloadSurat:{
   flexDirection:"row",
   paddingLeft:5,
   paddingRight:5,
   paddingTop:3,
   paddingBottom:3,
   backgroundColor:COLOR_THEME,
   borderRadius:6
  },
  iconDownload :{
    marginRight:3
  },
  txtDownloadSurat:{
    fontSize:9,
    color:"#ffff"
  },
  chooseFile:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:5
  },
  btnChooseFile:{
    padding:7,
    paddingLeft:25,
    paddingRight:25,
    borderRadius:5,
    marginRight:10,
    backgroundColor : "#d7dbe0"
  },
  txtChooseFile :{
    fontSize:12
  },
  txtNoFile :{
    color : "#d7dbe0"
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