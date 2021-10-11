/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react'
 import {
     View,
     Text,
     StyleSheet,
     BackHandler,
     Platform,
     NetInfo,
     ToastAndroid
 } from 'react-native'
 
 import {
     Scene,
     Router,
     Actions,
     Reducer,
     ActionConst,
     Overlay,
     Tabs,
     Modal,
     Drawer,
     Stack,
     Lightbox,
 } from "react-native-router-flux"
 import Ionicons from 'react-native-vector-icons/Ionicons'
 
 import Icon from 'react-native-vector-icons/Ionicons';
 import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
 import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
 import Login from './view/users/login'
 import PendaftaranPemohon from './view/users/pendaftaran_pemohon'
 import PendaftaranKapal from './view/users/pendaftaran_kapal'
 import ListKapal from './view/users/daftar_kapal'
 import DetailKapal from './view/users/detail_kapal'

 import ListSlo1 from './view/users/daftar_slo_1'
 import DetailSlo1 from './view/users/detail_slo1'

 import ListSlo2 from './view/users/daftar_slo_2'
 import DetailSlo2 from './view/users/detail_slo2'

 import ListLvhpi from './view/users/daftar_lvhpi'
 import DetailLvhpi from './view/users/detail_lvhpi'

 import RegistrasiSLOPemohonSatu from './view/users/registrasi_slo_pemohon/step_1'
 import RegistrasiSLOPemohonDua from './view/users/registrasi_slo_pemohon/step_2'
 import Home from './view/users/home'

 import LoginAdmin from './view/admin/login'

 import LoginPengawas from './view/pengawas/login'
 import HomePengawas from './view/pengawas/home'
 import DaftarKapal from './view/pengawas/daftar_kapal'
 import DaftarSlo from './view/pengawas/daftar_slo'
 import DaftarLvhpi from './view/pengawas/daftar_lvhpi'
 import UpdateSlo from './view/pengawas/update_slo'

 import DataKapal from './view/users/data_kapal'
 import FormHPK1 from './view/users/form_hpk1'
 import DetailHPK1 from './view/users/detail_hpk1'
 import FormHPK2 from './view/users/form_hpk2'
 import DetailHPK2 from './view/users/detail_hpk2'




 const getSceneStyle = () => ({
   backgroundColor: "#EEEEEE",
   shadowOpacity: 100,
   shadowRadius: 3
 });
 
 let exitCount = 0;
 
 const onBackPress = () => {
   let route = Actions.state.routes;
   let topSection = route[route.length - 1]
   let section = topSection.routes;
   switch (route[route.length - 1].routeName) {
       case "_main":
 
           let tab = route[route.length - 1].routes[0].index;
           if(tab == 0) {
               exitCount++;
               ToastAndroid.showWithGravityAndOffset(
                   'Tekan lagi untuk keluar',
                   ToastAndroid.SHORT,
                   ToastAndroid.BOTTOM,
                   25,
                   100
               );
                   if(exitCount == 2) {
                       exitCount = 0
                       BackHandler.exitApp()
                   }
           }
           else {
               exitCount = 0;
               Actions.pop();     
           }
 
           return true;
           break;
   }
   
 }
 
 export default function App(){
       return (
           <Router
            //    getSceneStyle={getSceneStyle}
            //    backAndroidHandler={onBackPress}
               >
               <Stack
                   hideNavBar
                   key="root"
                   titleStyle={{ alignSelf: 'center' }}                  
                 >
                   {/* <Scene key="_splash" component={SplashScreen} hideNavBar hideTabBar initial /> */}
                   {/* <Scene key="_main" hideNavBar type={ActionConst.REPLACE} panHandlers={null} >
                        <Scene key="Home" component={Home} initial={false} />
                   </Scene> */}
                   <Scene key="Login" component={Login} initial={true}/>
                   <Scene key="PendaftaranPemohon" component={PendaftaranPemohon} initial={false}/>
                   <Scene key="PendaftaranKapal" component={PendaftaranKapal} initial={false}/>
                   <Scene key="Home" component={Home} initial={false} />
                   <Scene key="RegistrasiSLOPemohonSatu" component={RegistrasiSLOPemohonSatu} initial={false} />
                   <Scene key="RegistrasiSLOPemohonDua" component={RegistrasiSLOPemohonDua} initial={false} />
                   <Scene key="ListKapal" component={ListKapal} initial={false} />
                   <Scene key="ListSlo1" component={ListSlo1} initial={false} />
                   <Scene key="ListSlo2" component={ListSlo2} initial={false} />
                   <Scene key="ListLvhpi" component={ListLvhpi} initial={false} />
                   <Scene key="DetailKapal" component={DetailKapal} initial={false} />
                   <Scene key="DetailSlo1" component={DetailSlo1} initial={false} />
                   <Scene key="DetailSlo2" component={DetailSlo2} initial={false} />
                   <Scene key="DetailLvhpi" component={DetailLvhpi} initial={false} />

                   <Scene key="LoginAdmin" component={LoginAdmin} initial={false} />

                   <Scene key="LoginPengawas" component={LoginPengawas} initial={false} />
                   <Scene key="HomePengawas" component={HomePengawas} initial={false} />

                   <Scene key="DaftarKapal" component={DaftarKapal} initial={false} />
                   <Scene key="DaftarSlo" component={DaftarSlo} initial={false} />
                   <Scene key="UpdateSlo" component={UpdateSlo} initial={false} />
                   <Scene key="DaftarLvhpi" component={DaftarLvhpi} initial={false} />

                   <Scene key="DataKapal" component={DataKapal} initial={false} />
                   <Scene key="FormHPK1" component={FormHPK1} initial={false} />
                   <Scene key="DetailHPK1" component={DetailHPK1} initial={false} />

                   <Scene key="FormHPK2" component={FormHPK2} initial={false} />
                   <Scene key="DetailHPK2" component={DetailHPK2} initial={false} />



 
               </Stack>
           </Router>
       );
   }
 