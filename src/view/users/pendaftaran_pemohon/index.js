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
  Alert,
  ToastAndroid,
  PermissionsAndroid,
  Platform
} from 'react-native';

import { Checkbox } from "react-native-paper"
import Header  from "./../../../components/header"
import { COLOR_THEME } from './../../../libraries/colors';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

export default class PendaftaranPemohon extends Component {
  constructor() {
    super()
    this.state = {
      avatarSource : null,
      data : null,
      photoname :'',    
      nomorNPWP:'',
      password:'',    
    };
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
      // console.log(statusCode);
      // console.log(data);
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
                    Title ={"Pendaftaran Pemohon"}
                    back= {true}
                />
                <View style={styles.body}>
                  <View style={styles.content}>
                      <View style={styles.img}>
                          <Image 
                              source = {require("./../../../assets/image/img_pendaftaran_pemohonon.png")} 
                              style={{width:200, height:120}} 

                          />
                      </View>
                      <View>
                        <Text style={styles.txtLblNpwp}>Nomor KTP(*)</Text>
                          <TextInput
                              placeholder={"Enter your KTP"}
                              onChangeText={ TextInputValue=>this.setState({nomorNPWP:TextInputValue}) }
                              style={styles.txtInput}
                          />
                      </View>
                      <View>
                        <Text style={styles.txtLblNpwp}>Password</Text>
                          <TextInput
                              placeholder={"Password"}
                              onChangeText={ TextInputValue=>this.setState({password:TextInputValue}) }
                              style={styles.txtInput}
                          />
                      </View>
                      <View style={styles.scanNpwp}>
                          <Text style={styles.txtLblNpwp}>Pilih atau Capture KTP(Max.size 2mb)</Text>
                         <View style={styles.btnChooseFile}>
                             <TouchableOpacity 
                              onPress={this.selectPhotoTapped.bind(this,1)} 
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
                      <View style={styles.contentTnc}>
                          <View style={styles.checkTnc}>
                              <Checkbox
                                status="checked"
                                color={COLOR_THEME}
                              />
                              <Text style={styles.txtCheckTnc}>Saya Menyetujui Syarat dan Ketentuan yang Berlaku</Text>
                          </View>
    
                          <View style={styles.checkTnc}>
                              <Checkbox
                                status="checked"
                                color={COLOR_THEME}
                              />
                              <Text style={styles.txtCheckTnc}>Saya tidak setuju dan tidak akan terlibat dalam Gratifikasi, Suap dan Pungli</Text>
                          </View>
                          <View style={styles.ket}>
                              <Text style={styles.txtKet}>Keterangan:(*) Form Wajib Diisi!</Text>
                          </View>
                          <View style={styles.send}>
                              <TouchableOpacity
                                style={styles.sendData}
                                onPress={this.onRegister}
                              >
                                  <Text style={styles.txtSendData}>Daftar Pemohon</Text>
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
       height : 120
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
});
 
 