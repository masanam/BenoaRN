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
 
     export default class RegistrasiSLOPermohonStepSatu extends Component {
          constructor() {
               super()
               this.state = {
                   isLoading: false,
                   albums: [],
                   userId: localStorage.getItem('userId'),
                    createdBy: localStorage.getItem('userId'),
                    kapal: '',
                    typePermohonan: '',
                    nomorSPI: '',
                    masaBerlakuSPI: '',
                    pelabuhanTransmitter: '',
                    nomorTransmitter: '',
                    masaBerlakuTransmitter: '',
                    daerahPenangkapan: '',
                    jenisAlatTangkap: '',
                    namaTanggalSLOAsal: '',
                    nomorTanggalTerbitSPB: '',
                    jenisIkan: '',
                    jumlah: '',
                    keadaan: '',
                    siup: '',
                    grosse: '',
                    bkp: '',
                    suratUkurKapal: '',
                    sipiSikpi: '',
                    sloAsal: '',
                    skat: '',
                    crewList: '',
                    sertifikasiHam: '',
                    suratPernyataan: '',

               }
           }
     
      
          componentDidMount() {
               let url = 'http://marinir.herokuapp.com/kapal/getbyuser/'+ this.state.userId
               fetch(url).then(results=>results.json())
               .then(results=>this.setState({albums :results.data
               }))
           }
     
           selectPhotoTapped=()=>{
               const options = {
                 // quality: 1.0,
                 // maxWidth: 500,
                 // maxHeight: 500,
                 // includeBase64: true,
                 storageOptions: {
                   skipBackup: true,
                   path: 'images',
                 }
               }
                 ImagePicker.showImagePicker(options, async(response) => {
                   console.log('Response = ', response);
                 
                   if (response.didCancel) {
                     console.log('User cancelled image picker');
                   } else if (response.error) {
                     console.log('ImagePicker Error: ', response.error);
                   } else if (response.customButton) {
                     console.log('User tapped custom button: ', response.customButton);
                   } else {
                     let source = response;
                     this.setState({
                       filePath: source,
                       avatarSource: response.uri,
                     });
                   }
                 });
             };
           
             onRegister = () => {
               let url = 'http://marinir.herokuapp.com/user/register'; 
           
               const {filePath} = this.state
           
               var formdata = new FormData();
               formdata.append("nomorNPWP", this.state.nomorNPWP);
               formdata.append("password", this.state.password);
               formdata.append("fotoNPWP", {
                 uri: filePath.uri,
                 name: filePath.fileName,
                 type: filePath.type
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
                 ToastAndroid.show('Pendaftaran Pemohon Berhasil', ToastAndroid.SHORT) ;
                 Actions.Login();})
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
                 Title ={"Registrasi SLO Permohonan"}
                 step={"(Step 2 of 2)"}
                 modeRegistrasi={true}
                 backRegistrasi={true}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>

                   <View>
                       <View style={styles.formPengangkut}>
                            <Text style={styles.namaKapal}>Nama Kapal Pengangkut </Text>
                            <Text style={styles.vesselName}>(Vessel Name)</Text>
                       </View>
                       <DropDownPicker
                         style={{
                              alignItems: "center",
                              justifyContent: "center",
                              padding :6,
                              borderWidth:2,
                              borderColor :"#a0bee8",
                              borderRadius:10,
                         }}
                         items={this.state.albums.map(item=> ({label:item.namaKapal,value:item._id}))}
                         //   defaultValue={this.state.country}
                         containerStyle={{ height: 50, width: 250 }}
                         onChangeItem={item => this.setState({
                              namaKapal: item.value
                         })}
                    />
                   </View>
                   <View style={styles.form}> 
                       <Text style={styles.perusahaan}>Type Permohonan</Text>
                       <DropDownPicker
                           items={[
                              {label: 'SLO', value: 'SLO'},
                              {label: 'LVHPI', value: 'LVHPI'},
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
                              typePermohonan: item.value
                         })}
                    />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Nomor Surat Izin Penangkapan Ikan</Text>
                       </View>
                       <TextInput
                              placeholder={"Nomor SPI"}
                              onChangeText={ TextInputValue=>this.setState({nomorSPI:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Masa Berlaku Surat Izin Penangkapan Ikan</Text>
                       </View>
                       <TextInput
                              placeholder={"Masa Berlaku "}
                              onChangeText={ TextInputValue=>this.setState({masaBerlakuSPI:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Pelabuhan Transmitter</Text>
                       </View>
                       <TextInput
                              placeholder={"Pelabuhan Transmitter "}
                              onChangeText={ TextInputValue=>this.setState({pelabuhanTransmitter:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Nomor Transmitter</Text>
                       </View>
                       <TextInput
                              placeholder={"Nomor Transmitter "}
                              onChangeText={ TextInputValue=>this.setState({nomorTransmitter:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Masa Berlaku Transmitter</Text>
                       </View>
                       <TextInput
                              placeholder={"Masa Berlaku "}
                              onChangeText={ TextInputValue=>this.setState({masaBerlakuTransmitter:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Daerah Penangkapan</Text>
                       </View>
                       <TextInput
                              placeholder={"Daerah Penangkapan "}
                              onChangeText={ TextInputValue=>this.setState({daerahPenangkapan:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Jenis AlatTangkap</Text>
                       </View>
                       <TextInput
                              placeholder={"Jenis AlatTangkap"}
                              onChangeText={ TextInputValue=>this.setState({jenisAlatTangkap:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Nama Tanggal SLO Asal</Text>
                       </View>
                       <TextInput
                              placeholder={"Nama Tanggal SLO Asal"}
                              onChangeText={ TextInputValue=>this.setState({namaTanggalSLOAsal:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Nomor Tanggal Terbit SPB</Text>
                       </View>
                       <TextInput
                              placeholder={"Nomor Tanggal Terbit SPB"}
                              onChangeText={ TextInputValue=>this.setState({nomorTanggalTerbitSPB:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Jenis Ikan</Text>
                       </View>
                       <TextInput
                              placeholder={"Jenis Ikan"}
                              onChangeText={ TextInputValue=>this.setState({jenisIkan:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <View style={styles.formCallSign}>
                            <Text style={styles.namaPanggilanKapal}>Jumlah Ikan</Text>
                       </View>
                       <TextInput
                              placeholder={"Jumlah Ikan"}
                              onChangeText={ TextInputValue=>this.setState({jumlah:TextInputValue}) }
                              style={styles.txtInput}
                          />
                   </View>
                   <View style={styles.form}> 
                       <Text style={styles.perusahaan}>Keadaan Ikan</Text>
                       <DropDownPicker
                           items={[
                              {label: 'Segar', value: 'segar'},
                              {label: 'Beku', value: 'beku'},
                              {label: 'Kemasan', value: 'kemasan'},
                              {label: 'Olahan', value: 'olahan'},
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
                              keadaan: item.value
                         })}
                    />
                   </View>
                   <View style={styles.form}>
                        <View style={styles.number}>
                        <Text style={styles.perusahaan}>SIUP</Text>
                        </View>
                        <View style={styles.formKet}>
                            <View style={styles.chooseFile}>
                                    <Text style={styles.txtChooseFile}>Pilih atau Capture</Text>
                                <TouchableOpacity 
                              // onPress={this.selectPhotoTapped.bind(this,1)} 
                             >
                               {this.state.avatarSource == null ? 
                                <Image 
                                source ={require("./../../../assets/image/dummy.png")}
                                style={{width:100, height:80}} 
                                />
                                : <Image source={{uri:this.state.avatarSource}}
                                style={{width:150, height:100}} 
                                />
                                }
                             </TouchableOpacity>     
                            </View>
                        </View>
                    </View>

          
                    {/* </View> */}
                    
                   <View style={styles.note}>
                        <Text style={styles.txtWajibCetak}>* Pemohon wajib cetak form permohonan kemudian tandatangani</Text>
                        <Text style={styles.txtScan}>dan scan lalu diunggah kembali kehalaman ini.</Text>
                   </View>

                   <View style={styles.send}>
                         <TouchableOpacity
                              style={styles.sendData}
                              onPress={()=>Actions.RegistrasiSLOPemohonDua()}
                         >
                              <Text style={styles.txtSendData}>Simpan Permohonan SLO </Text>
                         </TouchableOpacity>
                    </View>
 
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
 
