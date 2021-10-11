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
import ImagePicker from 'react-native-image-picker';

import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';

const deviceWidth = Dimensions.get("window").width;

export default class PendaftaranKapal extends Component {
  state = {
    isVisible: false,
    bkpSource : null,
    sukSource : null,
    fotoBKP : null,
    fotoSuratUkurKapal : null,
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'), 
    userName: localStorage.getItem('userName'),
    namaKapal:'',
    namaPanggilanKapal:'',  
    jenisKapal:'',
    namaPerusahaan:'',  
    tonnaseKotor:'',
    bendera:'',  
    tempatTandaSelar:'',
    nomorIdTransmitter:'',
    merkMesin:'',
    nomorSeriMesin:'',
    kekuatanMesin:'',
    createdBy:'',    
    nomorNPWP:'',
    bkp:'',
    suratUkurKapal:'',

  }

          // displayModal(show){
          //      this.setState({isVisible: show})
          // }

          selectBkpTapped=()=>{
               const options = {
                 storageOptions: {
                   skipBackup: true,
                   path: 'images',
                 }
               }
                 ImagePicker.showImagePicker(options, async(response) => {
                   // console.log('Response = ', response);
                   if (response.didCancel) {
                     console.log('User cancelled image picker');
                   } else if (response.error) {
                     console.log('ImagePicker Error: ', response.error);
                   } else if (response.customButton) {
                     console.log('User tapped custom button: ', response.customButton);
                   } else {
                     let source = response;
                     this.setState({
                       filebkpPath: source,
                       bkpSource: response.uri,
                     });
                   }
                 });
             };

             selectSuratUkurTapped=()=>{
               const options = {
                 storageOptions: {
                   skipBackup: true,
                   path: 'images',
                 }
               }
                 ImagePicker.showImagePicker(options, async(response) => {
                   // console.log('Response = ', response);
                   if (response.didCancel) {
                     console.log('User cancelled image picker');
                   } else if (response.error) {
                     console.log('ImagePicker Error: ', response.error);
                   } else if (response.customButton) {
                     console.log('User tapped custom button: ', response.customButton);
                   } else {
                     let source = response;
                     this.setState({
                       filesukPath: source,
                       sukSource: response.uri,
                     });
                   }
                 });
             };

             onRegisterKapal = () => {
               let url = 'http://marinir.herokuapp.com/kapal/create';
               const {filebkpPath} = this.state;
               const {filesukPath} = this.state;
               var formdata = new FormData();
               formdata.append("namaKapal", this.state.namaKapal);
               formdata.append("namaPanggilanKapal", this.state.namaPanggilanKapal);
               formdata.append("jenisKapal", this.state.jenisKapal);
               formdata.append("namaPerusahaan", this.state.namaPerusahaan);
               formdata.append("tonnaseKotor", this.state.tonnaseKotor);
               formdata.append("bendera", this.state.bendera);
               formdata.append("tempatTandaSelar", this.state.tempatTandaSelar);
               formdata.append("nomorIdTransmitter", this.state.nomorIdTransmitter);
               formdata.append("merkMesin", this.state.merkMesin);
               formdata.append("nomorSeriMesin", this.state.nomorSeriMesin);
               formdata.append("kekuatanMesin", this.state.kekuatanMesin);
               formdata.append("createdBy", this.state.userId);
               formdata.append("nomorNPWP", this.state.userName);

               formdata.append("bkp", {
                 uri: filebkpPath.uri,
                 name: filebkpPath.fileName,
                 type: filebkpPath.type
               });               
               formdata.append("suratUkurKapal", {
                    uri: filesukPath.uri,
                    name: filesukPath.fileName,
                    type: filesukPath.type
                  });                                  
               
             fetch(url, { 
               method: 'POST',
               body: formdata,
               headers: {
                 //Header Defination
                 'Accept': 'application/json',
                 'Content-Type': 'multipart/form-data' ,
               },
             })
             .then(response => {
               const statusCode = response.status;
               const data = response.json();
               return Promise.all([statusCode, data]);
             })
             .then(([statusCode, data]) => {
               console.log(statusCode);
               console.log(data);
                   ToastAndroid.show('Pendaftaran Kapal Berhasil', ToastAndroid.SHORT) ;
                   Actions.Home();})
             .catch((error) => {
               console.error(error);
               this.setState({ message: error.message });
             });                    
         
             };

//   onRegisterKapal = () => {
//     let url = 'http://marinir.herokuapp.com/kapal/create';
//     let dataToSend = {
//      namaKapal : this.state.namaKapal ,
//      namaPanggilanKapal : this.state.namaPanggilanKapal ,
//      jenisKapal : this.state.jenisKapal ,
//      namaPerusahaan : this.state.namaPerusahaan ,
//      tonnaseKotor : this.state.tonnaseKotor ,
//      bendera : this.state.bendera ,
//      tempatTandaSelar : this.state.tempatTandaSelar ,
//      nomorIdTransmitter : this.state.nomorIdTransmitter ,
//      merkMesin : this.state.merkMesin ,
//      nomorSeriMesin : this.state.nomorSeriMesin ,
//      kekuatanMesin : this.state.kekuatanMesin ,
//      createdBy : this.state.userId ,
//      nomorNPWP : this.state.userName ,
//      bkp : this.state.bkp ,
//      suratUkurKapal : this.state.suratUkurKapal ,
//      };

//     let formBody = [];
//     for (let key in dataToSend) {
//       let encodedKey = encodeURIComponent(key);
//       let encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//      //    console.log(formBody);

//      fetch(url, { 
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded' ,
//         'Authorization' : 'Bearer '+ this.state.token
//       },
//     })
//     .then(response => {
//       const statusCode = response.status;
//       const data = response.json();
//       return Promise.all([statusCode, data]);
//     })
//      .then(([statusCode, data]) => {
//      //     console.log(statusCode);
//      //     console.log(data);
//           ToastAndroid.show('PENDAFTARAN KAPAL Sukses', ToastAndroid.SHORT);
//           //     setTimeout(() =>
//           //                 {
//           //                     this.displayModal(true);
//           //                 },200)
//           Actions.Home();
//      })
//      .catch((error) => {
//      console.error(error);
//      this.setState({ message: error.message });
//      });                                            
     
//      };
 
  render() {
      return (
        <>
          <StatusBar barStyle="light-content" />
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
             <Header
                 Title ={"PENDAFTARAN KAPAL"}
                 modeRegistrasi={true}
                 backRegistrasi={true}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>

                   <View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Nama Kapal </Text>
                       </View>
                       <TextInput
                           placeholder={"namaKapal"}
                           onChangeText={(namaKapal) => this.setState({namaKapal})}
                           style={styles.txtInput}
                       />
                   </View>

                   <View style={styles.form}> 
                       <Text style={styles.perusahaan}>Jenis Kapal</Text>
                       <DropDownPicker
                           items={[
                              {label: 'Kapal Pengangkut', value: 'Angkut'},
                              {label: 'Kapal Penangkap', value: 'Tangkap'},
                          ]}
                         style={{
                              alignItems: "center",
                              justifyContent: "center",
                              padding :6,
                              borderWidth:2,
                              borderColor :"#a0bee8",
                              borderRadius:10,
                         }}
                         //   defaultValue={this.state.country}
                         containerStyle={{ height: 50, width: 250 }}
                         dropDownStyle={{backgroundColor: '#fafafa'}}
                         onChangeItem={item => this.setState({
                              jenisKapal: item.value
                         })}
                    />
                   </View>
                   <View style={styles.form}> 
                       <Text style={styles.perusahaan}>Nama Pemilik/Perusahaan </Text>
                       <TextInput
                           placeholder={"namaPerusahaan"}
                           onChangeText={(namaPerusahaan) => this.setState({namaPerusahaan})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <Text style={styles.perusahaan}>Tonnase Kotor </Text>
                       <TextInput
                           placeholder={"tonnaseKotor"}
                           onChangeText={(tonnaseKotor) => this.setState({tonnaseKotor})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                            <Text style={styles.perusahaan}>Tempat dan Tanda Selar</Text>
                       <TextInput
                           placeholder={"tempatTandaSelar"}
                           onChangeText={(tempatTandaSelar) => this.setState({tempatTandaSelar})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Nama Panggilan Kapal</Text>
                       </View>
                       <TextInput
                            
                           placeholder={"namaPanggilanKapal"}
                           onChangeText={(namaPanggilanKapal) => this.setState({namaPanggilanKapal})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Bendera Kapal</Text>
                       </View>
                       <TextInput
                            
                           placeholder={"bendera"}
                           onChangeText={(bendera) => this.setState({bendera})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Merk Mesin</Text>
                       </View>
                       <TextInput
                            
                           placeholder={"merkMesin"}
                           onChangeText={(merkMesin) => this.setState({merkMesin})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Nomer Seri Mesin</Text>
                       </View>
                       <TextInput
                            
                           placeholder={"nomorSeriMesin"}
                           onChangeText={(nomorSeriMesin) => this.setState({nomorSeriMesin})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Kekuatan Mesin</Text>
                       </View>
                       <TextInput
                            
                           placeholder={"kekuatanMesin"}
                           onChangeText={(kekuatanMesin) => this.setState({kekuatanMesin})}
                           style={styles.txtInput}
                       />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Nomor ID Transmitter</Text>
                       </View>
                       <TextInput
                           placeholder={"nomorIdTransmitter"}
                           onChangeText={(nomorIdTransmitter) => this.setState({nomorIdTransmitter})}
                           style={styles.txtInput}
                       />
                   </View>
         
                   <View style={styles.form}>
                        <View style={styles.number}>
                        <Text style={styles.perusahaan}>BKP</Text>
                        </View>
                        <View style={styles.formKet}>
                            <View style={styles.chooseFile}>
                                    <Text style={styles.txtChooseFile}>Pilih atau Capture</Text>
                                <TouchableOpacity 
                              onPress={this.selectBkpTapped.bind(this,1)} 
                             >
                               {this.state.bkpSource == null ? 
                                <Image 
                                source ={require("./../../../assets/image/dummy.png")}
                                style={{width:100, height:80}} 
                                />
                                : <Image source={{uri:this.state.bkpSource}}
                                style={{width:150, height:100}} 
                                />
                                }
                             </TouchableOpacity>     
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                    <View style={styles.number}>
                    <Text style={styles.perusahaan}>Surat Ukur Kapal</Text>
                    </View>
                    <View style={styles.formKet}>
                    <View style={styles.chooseFile}>
                              <Text style={styles.txtChooseFile}>Pilih atau Capture</Text>
                         <TouchableOpacity 
                         onPress={this.selectSuratUkurTapped.bind(this,1)} 
                         >
                         {this.state.sukSource == null ? 
                         <Image 
                         source ={require("./../../../assets/image/dummy.png")}
                         style={{width:100, height:80}} 
                         />
                         : <Image source={{uri:this.state.sukSource}}
                         style={{width:150, height:100}} 
                         />
                         }
                         </TouchableOpacity>     
                    </View>
                    </View>
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
     btnChooseFile : {
          flexDirection:"row",
          alignItems : "center"
        },
        txtchooseFile : {
          padding:10, 
          backgroundColor:"#dedace", 
          width: 100, 
          top:5,
          borderRadius:5,
          fontWeight:"bold"
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