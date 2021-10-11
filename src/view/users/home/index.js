/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
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
 } from 'react-native';
 
 import IconFontisto from 'react-native-vector-icons/Fontisto';
 import IconFeather from 'react-native-vector-icons/Feather';
 import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
 import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
 import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
 
 
 import { Checkbox } from "react-native-paper"
 
 import Header  from "./../../../components/header"
 import {COLOR_SELECT_MENU, COLOR_BTN_DBS_USER , COLOR_CEK_DATA, COLOR_FREQUENTLY, COLOR_MENU_AVAILABLE, COLOR_THEME } from './../../../libraries/colors';
import { Actions } from 'react-native-router-flux';
import 'localstorage-polyfill';

class Home extends Component {
  state = {
    userName: localStorage.getItem('userName')
}

render() {
  const userName = this.state.userName
  return (
   <>
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
             <Header
                 menu= {true}
                 notification={true}
                 user={true}
             />
             <View style={styles.body}>
               <View style={styles.content}>
                   <View style={styles.welcome}>
                       <Text style={styles.txtWelcome}>Selamat Datang User, {userName}!</Text>
                   </View>
                   <View style={styles.menuSearch}>
                       <TextInput
                           placeholder={"Search..."}
                           style={styles.txtInput}
                       />
                      <TouchableOpacity style={styles.search}>
                         <IconFontisto 
                               name={"search"}
                               size={20}
                               color={"#ffff"}
                           />
                      </TouchableOpacity>
                   </View>
                   <View>
                       <View style={styles.regisCekData}>
                          <TouchableOpacity 
                              style={styles.regisSlo}
                              onPress={()=>Actions.PendaftaranKapal()}
                          >
                             <IconFeather 
                                   name={"upload"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtTlo}>
                                 <Text style={styles.txtRegis}>PENDAFTARAN</Text>
                                 <Text style={styles.txtRegis}>KAPAL</Text>
                              </View>
                          </TouchableOpacity>
 
                          <TouchableOpacity 
                          style={styles.cekData}
                          onPress={()=>Actions.RegistrasiSLOPemohonSatu()}
                          >
                             <IconFontAwesome5 
                                   name={"check-double"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtCekData}>
                                 <Text style={styles.txtRegis}>ISI DATA</Text>
                                 <Text style={styles.txtRegis}>PERMOHONAN</Text>
                              </View>
                          </TouchableOpacity>
                       </View>
 
                       <View style={styles.frequentlyNewMenu}>
                          <TouchableOpacity style={styles.frequently}
                            onPress={()=>Actions.FormHPK1()}
                          >
                             <IconMaterialCommunityIcons 
                                   name={"puzzle"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtTlo}>
                                 <Text style={styles.txtRegis}>FORM HPK</Text>
                                 <Text style={styles.txtRegis}>KEBERANGKATAN</Text>

                              </View>
                          </TouchableOpacity>
 
                          <TouchableOpacity style={styles.newMenu}
                            onPress={()=>Actions.FormHPK2()}
                          >
                             <IconMaterialIcons 
                                   name={"settings-applications"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtCekData}>
                              <Text style={styles.txtRegis}>FORM HPK</Text>
                              <Text style={styles.txtRegis}>KEDATANGAN</Text>
                              </View>
                          </TouchableOpacity>
                       </View>

                       <View style={styles.frequentlyNewMenu}> 
                          <TouchableOpacity style={styles.cekMenu}
                            onPress={()=>Actions.ListSlo1()}
                          >
                             <IconMaterialIcons 
                                   name={"verified-user"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtCekData}>
                              <Text style={styles.txtRegis}>STATUS</Text>
                              <Text style={styles.txtRegis}>SLO</Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.updateMenu}
                            onPress={()=>Actions.ListSlo2()}
                          >
                             <IconMaterialCommunityIcons 
                                   name={"view-agenda"}
                                   size={40}
                                   color={"#ffff"}
                               />
                              <View style={styles.txtTlo}>
                                 <Text style={styles.txtRegis}>STATUS</Text>
                                 <Text style={styles.txtRegis}>LVHPI</Text>

                              </View>
                          </TouchableOpacity>
                       </View>
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
 };
 
};

export default Home

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
 
   txtWelcome : {
     fontSize : 20,
     color : COLOR_THEME,
     fontWeight:"bold"
   },
   txtGoodDay : {
     fontSize : 25,
     color : COLOR_THEME,
     fontWeight:"bold",
     marginBottom :15
   },
 
   menuSearch :{
     flexDirection:"row",
     justifyContent:"space-between"
   },
   txtInput : {
     padding :5,
     borderWidth:2,
     borderColor :"#a0bee8",
     borderTopLeftRadius:10,
     borderBottomLeftRadius:10,
     width : "80%",
     paddingLeft:10
   },
   search : {
     backgroundColor : COLOR_THEME,
     width:"20%",
     alignItems:"center",
     justifyContent:"center",
     borderTopRightRadius:10,
     borderBottomRightRadius:10,
   },
 
   regisSlo :{
     backgroundColor : COLOR_THEME,
     height : 125,
     width:"48%",
     justifyContent:"center",
     alignItems:"center",
     borderRadius:20
   },
   txtTlo : {
     marginTop:10,
     alignItems :"center"
   },
   txtRegis :{
     color:"#ffff",
     fontSize : 14,
   },
   regisCekData :{
     flexDirection :"row",
     justifyContent:"space-between",
     marginTop:25
   },
   cekData :{
     backgroundColor : COLOR_CEK_DATA,
     height : 125,
     width:"48%",
     justifyContent:"center",
     alignItems:"center",
     borderRadius:20
   },
   txtCekData : {
     marginTop:10,
     alignItems :"center"
   },
 
 
   frequentlyNewMenu : {
     flexDirection :"row",
     justifyContent:"space-between",
     marginTop:10
   },
   frequently : {
     backgroundColor : COLOR_FREQUENTLY,
     height : 125,
     width:"48%",
     justifyContent:"center",
     alignItems:"center",
     borderRadius:20
   },
   newMenu :{
     backgroundColor : COLOR_MENU_AVAILABLE,
     height : 125,
     width:"48%",
     justifyContent:"center",
     alignItems:"center",
     borderRadius:20
   },
   
   updateMenu :{
    backgroundColor : COLOR_SELECT_MENU,
    height : 125,
    width:"48%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
  },

  cekMenu :{
    backgroundColor : COLOR_BTN_DBS_USER,

    height : 125,
    width:"48%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
  },

   footer : {
     position : "relative",
     justifyContent :"center",
     alignItems:"center", 
     paddingTop : 25,
     marginBottom:5
   },
   txtFooter : {
     color :COLOR_THEME,
     fontSize:12,
     fontWeight:"bold"
   }
 });
 
 