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

export default class ListSlo1 extends Component {
          constructor(props) {  
            //constructor to set default state  
            super(props);  
            this.state = {
                isLoading: false,
                data: [],
                total : 0,
                userId: localStorage.getItem('userId'),
                colors : ['#123456', '#654321', '#fdecba', '#abcdef'],

            };
      }

 
     componentDidMount() {
          let url = 'http://marinir.herokuapp.com/permohonan/get/slo/'+ this.state.userId;
          fetch(url).then(results=>results.json())
          .then(results=>this.setState({data :results.data, total : results.count
          }))
      }
      // renderItem={({item, index}) => {
        

        // historyDownload() {
        //   //Function to check the platform
        //   //If iOS the start downloading
        //   //If Android then ask for runtime permission
        //   if (Platform.OS === 'ios') {
        //     this.downloadHistory();
        //   } else {
        //     try {
        //       PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        //         {
        //           title:'storage title',
        //           message:'storage_permission',
        //         },
        //       ).then(granted => {
        //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //           //Once user grant the permission start downloading
        //           console.log('Storage Permission Granted.');
        //           this.downloadHistory();
        //         } else {
        //           //If permission denied then show alert 'Storage Permission 
        //          Alert.alert('storage_permission');
        //         }
        //       });
        //     } catch (err) {
        //       //To handle permission related issue
        //       console.log('error', err);
        //     }
        //   }
        // }

        async downloadHistory() {
          var pdf_url = 'http://103.52.145.149:7000/permohonan/slo/607be43ceaf03ca541b17a97';
              let PictureDir = fs.dirs.PictureDir;
                      let options = {
                        fileCache: true,
                        addAndroidDownloads: {
                          //Related to the Android only
                          useDownloadManager: true,
                          notification: true,
                          path:
                            PictureDir +
                            '/history_' +
                            Math.floor(date.getTime() + date.getSeconds() / 2) 
                           +'.pdf',
                          description: 'History File',
                        },
                      };
                      config(options)
                        .fetch('GET', pdf_url)
                        .then(res => {
                          //Showing alert after successful downloading
                          console.log('res -> ', JSON.stringify(res));
                          Alert.alert('pdf_download');
                        });
                    }

    renderItemComponent = (data,index) =>
        <TouchableOpacity style={styles.container} 
        onPress={()=>Actions.DetailSlo1({
          namaKapal: data.item.kapal.namaKapal,
          pemilikPerusahaan: data.item.kapal.pemilikPerusahaan,
          typePermohonan: data.item.typePermohonan,
          nomorSPI: data.item.nomorSPI,
          masaBerlakuSPI: data.item.masaBerlakuSPI,
          status: data.item.status,
          pelabuhanTransmitter: data.item.pelabuhanTransmitter,
          daerahPenangkapan: data.item.daerahPenangkapan,
        })}
        >
              <View 
              style={[styles.card, {backgroundColor:this.state.colors[index % this.state.colors.length]}]} 
              >
                <View style={styles.headerContentStyle}>
                          <Text style={styles.title}>Nama Kapal : {data.item.kapal.namaKapal.toUpperCase()}</Text>
                          <Text style={styles.title}>Nomor SPI : {data.item.nomorSPI}</Text>
                          <Text style={styles.count}>Masa Berlaku : {data.item.masaBerlakuSPI}</Text>
                          <Text style={styles.status}>Status : {data.item.status}</Text>
                </View>
                </View>
        </TouchableOpacity>



  render() {
    const { navigate } = this.props.navigation;  
    const goToPageTwo = () => Actions.DataKapal({text: 'Hello World!'}); 
      return (
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
              <View>
              <Header
                    Title ={"Daftar SLO - Keberangkatan"}
                    back= {true}
                />
              </View>

              <View style={styles.body}>

              <View style={styles.content}>
              <Text style={styles.txtWelcome}>Total Data : {this.state.total}</Text>

              <TouchableOpacity
                            style={styles.sendData}
                            onPress={this.downloadHistory}
                            >
                              <Text style={styles.txtSendData}>Download SLO</Text>
                         </TouchableOpacity>

                  <FlatList
                    data={this.state.data}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item._id.toString()}

                  />

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
      marginLeft : 35,
      marginRight : 35,
   },
 
   img : {
       alignItems :"center",
       height : 200
   },
 
   txtInput : {
     padding :8,
     borderWidth:2,
     borderColor :"#a0bee8",
     borderRadius:10
   },
   txtLblNpwp : {
     fontWeight:"bold",
   },
 
   scanNpwp : {
     marginTop:10,
     marginBottom:10
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
   noFIle : {
    color:"grey",
    fontSize:12,
    marginTop:5, marginLeft:10
   },
 
   contentTnc : {
     marginTop : 20
   },
 
   checkTnc : {
     flexDirection : "row",
     alignItems: "center",
     marginLeft:-9,
   },
   txtCheckTnc : {
     fontSize :10.6,
     fontWeight :"bold"
   },
 
   ket : {
     marginTop:10,
   },
 
   txtKet : {
     color : "grey",
     fontSize :12,
     fontStyle:"italic"
   },
 
   send : {
     alignItems :"flex-end",
     marginTop:15,     
   },
   sendData : {
     backgroundColor : "orange",
     padding : 10,
     borderRadius:7,
   },
   txtSendData : {
     color : "#ffff"
   },
   txtWelcome : {
     fontSize : 20,
     color : COLOR_THEME,
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
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#0091EA',
    borderRadius:9,
  },

  buttonText: {
    color: '#fff',
    fontSize: 21,
    padding: 10,
    textAlign: 'center'
  },

  text: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/

  card:{
    // flexBasis: '45%',
    // padding :6,
    // borderWidth:2,
    // borderColor :"#a0bee8",
    // borderRadius:10,
    // paddingLeft:20
    height:null,
    padding:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:10,
    marginBottom:10,
    borderWidth:2,
    borderColor :"#a0bee8",
    borderRadius:10,
  },
  cardContent: {
    padding: 10,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 50,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title:{
    fontSize:16,
    flex:1,
    color:"#778899",
    fontWeight:"bold",

  },
  count:{
    fontSize:16,
    flex:1,
    color:"#ffff"
  },
});