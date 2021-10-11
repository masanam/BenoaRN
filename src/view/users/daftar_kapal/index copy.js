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

export default class ListKapal extends Component {
          constructor(props) {  
            //constructor to set default state  
            super(props);  
            this.state = {
                isLoading: false,
                data: [],
                total : 0,
                userId: localStorage.getItem('userId'),

            };
      }

 
     componentDidMount() {
          let url = 'http://marinir.herokuapp.com/kapal/getbyuser/'+ this.state.userId
          fetch(url).then(results=>results.json())
          .then(results=>this.setState({data :results.data, total : results.count
          }))
      }

    
    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container} 
        onPress={()=>Actions.DetailKapal({
          namaKapal: data.item.namaKapal,
          pemilikPerusahaan: data.item.pemilikPerusahaan,
          tempatTandaSelar: data.item.tempatTandaSelar,
          namaPanggilanKapal: data.item.namaPanggilanKapal,
          namaNahkoda: data.item.namaNahkoda,
          benderaKapal: data.item.benderaKapal,
        })}
        >
                      <View style={styles.card}>
                        {/* {<View style={styles.imageContainer}>
                          <Image style={styles.cardImage} source={{uri:'https://via.placeholder.com/400x200/4682B4/000000'}}/>
                        </View> } */}
                        <View style={styles.cardContent}>
                          <Text style={styles.title}>{data.item.namaKapal.toUpperCase()}</Text>
                          <Text style={styles.count}>({data.item.pemilikPerusahaan})</Text>
                        </View>
                      </View>
        </TouchableOpacity>

      ItemSeparator = () => <View style={{
          height: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
          marginLeft: 10,
          marginRight: 10,
      }}
      />

  render() {
    const { navigate } = this.props.navigation;  
    const goToPageTwo = () => Actions.DataKapal({text: 'Hello World!'}); 
      return (
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
              <View>
              <Header
                    Title ={"Daftar Kapal"}
                    back= {true}
                />
              </View>

              <View style={styles.body}>

              <View style={styles.content}>
              <Text style={styles.txtWelcome}>Total Kapal : {this.state.total}</Text>

                  <FlatList
                    data={this.state.data}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item._id.toString()}
                    // ItemSeparatorComponent={this.ItemSeparator}

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
    backgroundColor:'#87CEEB',
    flexBasis: '45%',
    padding :6,
    borderWidth:2,
    borderColor :"#a0bee8",
    borderRadius:10,
    paddingLeft:20
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