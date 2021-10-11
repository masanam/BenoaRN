/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   Image
 } from 'react-native';
 
 import { TextInput } from "react-native-paper"
import { COLOR_REGISTER_NEW_SLO, COLOR_THEME, COLOR_BTN_DBS_USER } from './../../../libraries/colors';
 
 const Login = () => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <ScrollView
           // contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>
           <View style={styles.body}>
 
             <View style={styles.content}>
               <View style={styles.img}>
                  <Image 
                    source ={require("./../../../assets/image/logo_1.png")}
                    style={{width:100, height:115}}    
                    resizeMode="cover"                
                  />
                  <Image 
                    source ={require("./../../../assets/image/logo_2.png")}
                    style={{width:100, height:115}}                    
                  />
               </View>
               <View style={styles.title}>
                   <Text style={styles.txtTitle}>Pangkalan PSDKP Benoa</Text>
               </View>
               <View style={styles.administrator}>
                   <Text style={styles.txtadministrator}>ADMINISTRATOR</Text>
               </View>
               <TextInput
                   label="Email"
                   value={""}
                   mode="outlined"
                   placeholder={"Enter your email"}
                   underlineColor ="red"
                  //  onChangeText={text => setText(text)}
                   style={{height:50}}
               />
 
               <TextInput
                   label="Password"
                   value={""}
                   mode="outlined"
                   placeholder={"Enter your password"}
                  //  onChangeText={text => setText(text)}
                   style={{height:50, marginTop:10}}
               />
 
               <TouchableOpacity style={styles.btnLogin}>
                   <Text style={styles.txtBtnLogin}>Log In</Text>
               </TouchableOpacity>
 
               <View style={styles.resetPwd}>
                   <Text style={styles.txtProblemLogin}>Problem with logging in ?</Text>
                   <TouchableOpacity>
                       <Text style={styles.txtReselPwd}>Reset password here</Text>
                   </TouchableOpacity>
               </View>

               <View style={styles.send}>
                    <TouchableOpacity
                        style={styles.sendData}
                    >
                        <Text style={styles.txtSendData}>Ke Dashboard User</Text>
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
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     // backgroundColor: Colors.lighter,
   },
   body: {
     // backgroundColor: Colors.white,
     justifyContent:"center",
   
 
   },

   img : {
      marginTop:20,
      flexDirection :"row",
      justifyContent:"space-around"
   },
 
   title : {
     alignItems :"center",
     marginTop:10,
     marginBottom :10
   }, 
   txtTitle : {
     color : "#1049a3",
     fontSize :25,
     fontWeight:"bold"
   },

   administrator : {
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10       
   },
   txtadministrator : {
        backgroundColor : COLOR_BTN_DBS_USER,
        alignItems:"center",
        justifyContent:"center",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:3,
        paddingBottom:3,
        color :"#ffff",
        fontWeight:"bold",
        fontSize:21
   },
 
   content : {
    marginTop : 35,
    marginLeft : 35,
    marginRight : 35,
   },
 
   btnLogin :{
     padding : 10,
     backgroundColor : "#1049a3",
     alignItems: "center",
     borderRadius:5,
     marginTop:15
   },
   txtBtnLogin : {
     color :"#ffff",
     fontSize :20
   },
 
   resetPwd : {
     justifyContent:"center",
     alignItems:"center",
     flexDirection : "row",
     marginTop:15
 
   },
   txtProblemLogin : {
     fontSize:12,
     fontStyle:"italic"
   },
   txtReselPwd : {
     color :"blue",
     fontSize:12,    
     fontStyle:"italic",
     marginLeft:5
   },
 
   lineCenterMode : {
     justifyContent:"center",
     alignItems:"center",
     marginTop :20
   },
   lineCenter : {
     borderWidth:1,
     borderColor:"#cad1db",
     height: 40,
     width:1
   },

   send : {
    alignItems :"flex-end",
    marginTop:110,
    marginRight:-34
    
  },
  sendData : {
    backgroundColor :COLOR_BTN_DBS_USER,
    padding : 10,
  },
  txtSendData : {
    color : "#ffff",
    fontWeight:"bold"
  },

   footer : {
    position : "relative",
    justifyContent :"center",
    alignItems:"center", 
    paddingTop : 20
  },
  txtFooter : {
    color :COLOR_THEME,
    fontSize:12,
    fontWeight:"bold"
  }
 
 
 });
 
 export default Login;
 