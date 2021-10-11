import React, { Component } from 'react';
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
  FlatList   
} from 'react-native';

import Header  from "./../../../components/header"
import { COLOR_THEME } from './../../../libraries/colors';
import ImagePicker from 'react-native-image-picker';

export default class DaftarSlo extends Component {
     constructor() {
          super()
          this.state = {
              isLoading: false,
              surats: [],
          };
      }

 
     componentDidMount() {
          fetch('http://marinir.herokuapp.com/permohonan/get/slo')
          .then(results=>results.json())
          .then(results=>this.setState({surats :results.data
          }))
      }


      renderAlbums() {
        return this.state.surats.map(surat => 
            <AlbumSlo key={surat._id} surat={surat} />
        );
    }

  render() {
      return (
        <>
          <StatusBar barStyle="light-content" />
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <Header
                    Title ={"Daftar SLO"}
                    back= {true}
                />
                <View style={styles.body}>

                  <View style={styles.content}>

                    {this.renderAlbums() }

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