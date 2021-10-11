/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   Image,
   Dimensions,
   TextInput
 } from 'react-native';
 
 import Header  from "./../../../components/header"
 import { COLOR_MENU_AVAILABLE, COLOR_REGISTER_NEW_SLO, COLOR_THEME } from './../../../libraries/colors';
 
 import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
 import IconAntDesign from 'react-native-vector-icons/AntDesign'; 
 import IconIonicons from 'react-native-vector-icons/Ionicons'; 

 import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
 
 const deviceWidth = Dimensions.get("window").width;

 export default function RegistrasiSLOPermohonStepDua(){

const [touchMenu, setTouchMenu] = useState(false)

 function toogleMenuModal(bool){
    setTouchMenu(bool);
  }

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

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>1.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Permohonan Keberangkatan</Text>
                            <View style={styles.downloadSurat}>
                                <TouchableOpacity
                                    style={styles.btnDownloadSurat}
                                >
                                    <IconMaterialCommunityIcons 
                                        name={"download"}
                                        color={"#ffff"}
                                        style={styles.iconDownload}
                                    />
                                    <Text style={styles.txtDownloadSurat}>Download Surat Permohonan</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>2.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Izin Usaha Perikanan (SIUP)</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>3.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Grosse Akta</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>4.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Buku Kapal Perikanan (BKP)</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>5.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Ukur Kapal</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>6.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Izin Penangkapan Ikan (SIPI)/</Text>
                            <Text style={styles.txtTitle}>Surat Izin Kapal Penangkap Ikan (SIKPI)</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>7.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>SLO Asal</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>8.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Keterangan Aktivasi Transmitter (SKAT)</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={styles.txtNumber}>9.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Crew List</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={[styles.txtNumber,{marginLeft:-5}]}>10.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Sertifikasi HAM</Text>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.number}>
                            <Text style={[styles.txtNumber,{marginLeft:-5}]}>11.</Text>
                        </View>
                        <View style={styles.formKet}>
                            <Text style={styles.txtTitle}>Surat Pernyataan</Text>
                            <View style={styles.downloadSurat}>
                                <TouchableOpacity
                                    style={styles.btnDownloadSurat}
                                >
                                    <IconMaterialCommunityIcons 
                                        name={"download"}
                                        color={"#ffff"}
                                        style={styles.iconDownload}
                                    />
                                    <Text style={styles.txtDownloadSurat}>Download Surat Pernyataan</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.chooseFile}>
                                <TouchableOpacity style={styles.btnChooseFile}>
                                    <Text style={styles.txtChooseFile}>Choose File</Text>
                                </TouchableOpacity>
                                <Text style={styles.txtNoFile}>No File Chosen</Text>
                            </View>
                        </View>
                    </View>
                   
                    <View style={styles.note}>
                        <Text style={styles.txtWajibCetak}>* Pastikan semua berkas sudah diunggah sesuai persyaratan</Text>
                    </View>

                    <View style={styles.send}>
                         <TouchableOpacity
                            style={styles.sendData}
                            onPress={()=> toogleMenuModal(true)}
                         >
                              <Text style={styles.txtSendData}>Kirim Permohonan</Text>
                         </TouchableOpacity>
                    </View>
                   <View style={styles.footer}>
                       <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
                   </View>
               </View>
             </View>


             <Modal 
                    isVisible={touchMenu}
                    animationIn={"slideInUp"}
                    animationOut={"bounceOut"}
                    animationInTiming={700}
                    animationOutTiming={1000}
                    hasBackdrop={true}
                    deviceWidth={deviceWidth}       
                    onRequestClose={() => {
                        toogleMenuModal(false);
                    }}
                    style={{borderRadius:20}}
                >
                <View style={{backgroundColor:COLOR_THEME, borderRadius:10}}>
                    <TouchableOpacity title="Hide modal" onPress={()=> {
                            toogleMenuModal(false);
                            // setTouchMenu(false)
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

                        <View style={styles.footer}>
                            <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

         </ScrollView>
       </SafeAreaView>
     </>
   );
 };
 
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

   form : {
      flexDirection :"row",
      marginBottom : 20
   },
   number :{
     marginRight:20
   },
   txtNumber : {
     fontWeight:"bold"
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
 
   footer : {
        position : "relative",
        justifyContent :"center",
        alignItems:"center", 
        marginTop : 45,
        marginBottom:5
   },
   txtFooter : {
        color :COLOR_THEME,
        fontSize:12,
        fontWeight :"bold"
   }
 
 
 });
 
 