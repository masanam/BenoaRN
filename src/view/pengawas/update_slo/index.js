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
   TextInput,
   Dimensions
 } from 'react-native';
 
 import { Checkbox } from 'react-native-paper';
 import { Actions } from 'react-native-router-flux';
 
 import Header  from "./../../../components/header"
 import { COLOR_THEME } from './../../../libraries/colors';
 import DropDownPicker from 'react-native-dropdown-picker';
 import Modal from 'react-native-modal';
 import IconAntDesign from 'react-native-vector-icons/AntDesign'; 
import IconIonicons from 'react-native-vector-icons/Ionicons'; 
 const deviceWidth = Dimensions.get("window").width;

     export default class UpdateSlo extends Component {
          constructor(props) {  
               //constructor to set default state  
               super(props);  
               this.state = {
                isVisible: false,
                   isLoading: false,
                   data: [],
                   total : 0,
                   userId: localStorage.getItem('userId'),
                   colors : '#123456',
                   checked: false,
                   setChecked :false,
                   namaKapal :'',
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
                   keterangan:'',

               };
         }


         displayModal(show){
          this.setState({isVisible: show})
        }

       render() {
           return (
             <>
       <StatusBar barStyle="light-content" />
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
             <Header
                 Title ={"Update SLO"}
                 back= {true}
             />
             <View style={styles.body}>
               <View style={styles.content}>
                <View style={styles.cardTitle}>


                      <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Id Permohonan </Text>
                            <Text style={styles.nameC}>: {this.props.PermohonanId}</Text>
                       </View>

                      <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Type Permohonan </Text>
                            <Text style={styles.nameC}>: {this.props.typePermohonan}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.PermohonanId ? 'checked' : 'unchecked'}
                              checked={this.state.PermohonanId}
                              onPress={() => this.setState({PermohonanId: !this.state.PermohonanId})}
                              />
                            </View>
                       </View>
                      <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nama Kapal </Text>
                            <Text style={styles.nameC}>: {this.props.namaKapal}</Text>
                            <View style={styles.txtChecBox}>
                            <Checkbox
                            status={this.state.namaKapal ? 'checked' : 'unchecked'}
                            checked={this.state.namaKapal}
                            onPress={() => this.setState({namaKapal: !this.state.namaKapal})}
                            />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Pemilik Perusahaan </Text>
                            <Text style={styles.nameC}>: {this.props.pemilikPerusahaan}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.pemilikPerusahaan ? 'checked' : 'unchecked'}
                              checked={this.state.pemilikPerusahaan}
                              onPress={() => this.setState({pemilikPerusahaan: !this.state.pemilikPerusahaan})}
                              />
                            </View>
                       </View>

                      <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Tempat Tanda Selar </Text>
                            <Text style={styles.nameC}>: {this.props.tempatTandaSelar}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.tempatTandaSelar ? 'checked' : 'unchecked'}
                              checked={this.state.tempatTandaSelar}
                              onPress={() => this.setState({tempatTandaSelar: !this.state.tempatTandaSelar})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nama Panggilan Kapal </Text>
                            <Text style={styles.nameC}>: {this.props.namaPanggilanKapal}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.namaPanggilanKapal ? 'checked' : 'unchecked'}
                              checked={this.state.namaPanggilanKapal}
                              onPress={() => this.setState({namaPanggilanKapal: !this.state.namaPanggilanKapal})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nama Nahkoda </Text>
                            <Text style={styles.nameC}>: {this.props.namaNahkoda}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.namaNahkoda ? 'checked' : 'unchecked'}
                              checked={this.state.namaNahkoda}
                              onPress={() => this.setState({namaNahkoda: !this.state.namaNahkoda})}
                              />
                            </View>
                       </View>
                      <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Bendera Kapal </Text>
                            <Text style={styles.nameC}>: {this.props.benderaKapal}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.benderaKapal ? 'checked' : 'unchecked'}
                              checked={this.state.benderaKapal}
                              onPress={() => this.setState({benderaKapal: !this.state.benderaKapal})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor SPI </Text>
                            <Text style={styles.nameC}>: {this.props.nomorSPI}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.nomorSPI ? 'checked' : 'unchecked'}
                              checked={this.state.nomorSPI}
                              onPress={() => this.setState({nomorSPI: !this.state.nomorSPI})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Masa Berlaku SPI </Text>
                            <Text style={styles.nameC}>: {this.props.masaBerlakuSPI}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.masaBerlakuSPI ? 'checked' : 'unchecked'}
                              checked={this.state.masaBerlakuSPI}
                              onPress={() => this.setState({masaBerlakuSPI: !this.state.masaBerlakuSPI})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor Transmitter </Text>
                            <Text style={styles.nameC}>: {this.props.nomorTransmitter}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.nomorTransmitter ? 'checked' : 'unchecked'}
                              checked={this.state.nomorTransmitter}
                              onPress={() => this.setState({nomorTransmitter: !this.state.nomorTransmitter})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Masa Berlaku Transmitter </Text>
                            <Text style={styles.nameC}>: {this.props.masaBerlakuTransmitter}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.masaBerlakuTransmitter ? 'checked' : 'unchecked'}
                              checked={this.state.masaBerlakuTransmitter}
                              onPress={() => this.setState({masaBerlakuTransmitter: !this.state.masaBerlakuTransmitter})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Pelabuhan Transmitter </Text>
                            <Text style={styles.nameC}>: {this.props.pelabuhanTransmitter}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.pelabuhanTransmitter ? 'checked' : 'unchecked'}
                              checked={this.state.pelabuhanTransmitter}
                              onPress={() => this.setState({pelabuhanTransmitter: !this.state.pelabuhanTransmitter})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Daerah Penangkapan</Text>
                            <Text style={styles.nameC}>: {this.props.daerahPenangkapan}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.daerahPenangkapan ? 'checked' : 'unchecked'}
                              checked={this.state.daerahPenangkapan}
                              onPress={() => this.setState({daerahPenangkapan: !this.state.daerahPenangkapan})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jenis Alat Tangkap </Text>
                            <Text style={styles.nameC}>: {this.props.jenisAlatTangkap}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.jenisAlatTangkap ? 'checked' : 'unchecked'}
                              checked={this.state.jenisAlatTangkap}
                              onPress={() => this.setState({jenisAlatTangkap: !this.state.jenisAlatTangkap})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nama Tanggal SLO Asal </Text>
                            <Text style={styles.nameC}>: {this.props.namaTanggalSLOAsal}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.namaTanggalSLOAsal ? 'checked' : 'unchecked'}
                              checked={this.state.namaTanggalSLOAsal}
                              onPress={() => this.setState({namaTanggalSLOAsal: !this.state.namaTanggalSLOAsal})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Nomor Tanggal Terbit SPB</Text>
                            <Text style={styles.nameC}>: {this.props.nomorTanggalTerbitSPB}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.nomorTanggalTerbitSPB ? 'checked' : 'unchecked'}
                              checked={this.state.nomorTanggalTerbitSPB}
                              onPress={() => this.setState({nomorTanggalTerbitSPB: !this.state.nomorTanggalTerbitSPB})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jenis Ikan</Text>
                            <Text style={styles.nameC}>: {this.props.jenisIkan}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.jenisIkan ? 'checked' : 'unchecked'}
                              checked={this.state.jenisIkan}
                              onPress={() => this.setState({jenisIkan: !this.state.jenisIkan})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Jumlah </Text>
                            <Text style={styles.nameC}>: {this.props.jumlah}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.jumlah ? 'checked' : 'unchecked'}
                              checked={this.state.jumlah}
                              onPress={() => this.setState({jumlah: !this.state.jumlah})}
                              />
                            </View>
                       </View>
                       <View style={styles.cardContent}>
                            <Text style={styles.namaK}>Keadaan</Text>
                            <Text style={styles.nameC}>: {this.props.keadaan}</Text>
                            <View style={styles.txtChecBox}>
                              <Checkbox
                              status={this.state.keadaan ? 'checked' : 'unchecked'}
                              checked={this.state.keadaan}
                              onPress={() => this.setState({keadaan: !this.state.keadaan})}
                              />
                            </View>
                       </View>
                       <View style={styles.form}> 
                       <View style={styles.formBendera}>
                            <Text style={styles.benderaKapal}>Catatan</Text>
                       </View>
                       <TextInput
                          multiline={true}
                          numberOfLines={4}
                          onChangeText={(keterangan) => this.setState({keterangan})}
                          value={this.state.text}
                          style={styles.txtInput}
                          />
                   </View>
                </View>

                <View style={styles.send}>
                         <TouchableOpacity
                              style={styles.sendData}
                              onPress={() => {
                                   this.displayModal(true);
                                 }}>                              
                              <Text style={styles.txtSendData}>Update Permohonan SLO </Text>
                         </TouchableOpacity>
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
                            Actions.HomePengawas();
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
                                <Text style={styles.terkirim}>Data berhasil diupdate</Text>
                                <Text style={styles.cekPermohonan}>(Anda dapat periksa status SLO)</Text>

                            </View>

                        </View>

                    </ScrollView>
                    </View>

                    </Modal>

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
  formBendera:{
    padding:10,
  },
  txtChecBox:{
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
    margin: 10,
    zIndex: 100,
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
    marginLeft:5, 
    padding:10,
    borderBottomWidth:1,
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
     fontSize:14,
     fontWeight: 'bold',
     marginLeft:10,
   },
   namaK:{
     fontWeight: '600',
     color: '#222',
     fontSize: 14,
     width:170,
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
 
