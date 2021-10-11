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
  Alert,
  ActivityIndicator,
  Button,
  ToastAndroid
} from 'react-native';

import { TextInput } from "react-native-paper"
import { COLOR_THEME } from './../../../libraries/colors';

import {Actions} from "react-native-router-flux"
import 'localstorage-polyfill';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: ''
}

_userLogin = () => {

    let dataToSend = {username : this.state.username , password : this.state.password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://marinir.herokuapp.com/auth/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
      .then(([statusCode, data]) => {
        //Hide Loader
        // console.log(statusCode);
        // console.log(data);

        if ( statusCode === 201) {
          // console.log(data.userData.nomorNPWP);
          localStorage.setItem('userName', data.userData.nomorNPWP);
          localStorage.setItem('userId', data.userData._id);
          localStorage.setItem('token', data.access_token);
          this.setState({isLoggingIn : true});
          // ToastAndroid.show('Selamat Datang: '+data.userData.nomorNPWP, ToastAndroid.SHORT); 
          Actions.Home();
        } else {
          // console.log('Data tidak sesuai');
          ToastAndroid.show('Please check your email id or password. ', ToastAndroid.SHORT); 
          // this.setState({ message: data.message });

        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ message: error.message });
      });
}

clearUsername = () => {
    this._username.setNativeProps({ text: '' });
    this.setState({ message: '' });
}

clearPassword = () => {
    this._password.setNativeProps({ text: '' });
    this.setState({ message: '' });
}

 
 render() {
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
                   style={{width:80, height:100}}    
                   resizeMode="cover"                
                 />
                 <Image 
                   source ={require("./../../../assets/image/logo_2.png")}
                   style={{width:80, height:100}}                    
                 /> 
              </View>
              <View style={styles.title}>
                  <Text style={styles.txtTitle}>Pangkalan PSDKP Benoa</Text>
              </View>
              <TextInput
                  label="No KTP"
                  mode="outlined"
                  placeholder={"Masukkan No KTP"}
                  ref={component => this._username = component}
                  onChangeText={(username) => this.setState({username})}
                  autoFocus={true}
                  onFocus={this.clearUsername}
                  style={{height:50,fontSize:13}}
              />

              <TextInput
                  label="Password"
                  mode="outlined"
                  placeholder={"Masukkan password"}
                  ref={component => this._password = component}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  onFocus={this.clearPassword}
                  onSubmitEditing={this._userLogin}
                  style={{height:50, marginTop:10, fontSize:13}}
              />

          {!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}

				<View style={{margin:7}} />
          {/* <Button 
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
              style={styles.txtBtnLogin}
		      	/> */}

              <TouchableOpacity
                 style={styles.btnLogin}
                 onPress={this._userLogin}
                >
               <Text style={styles.txtBtnLogin}> Submit </Text>
            </TouchableOpacity>

              <View style={styles.resetPwd}>
                  <Text style={styles.txtProblemLogin}>Tidak bisa login ?</Text>
                  <TouchableOpacity>
                      <Text style={styles.txtReselPwd}>Reset password</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.lineCenterMode}>
                  <View style={styles.lineCenter}/>
              </View>

              <View style={styles.account}> 
                  <Text>Belum punya akun ?</Text>
                  <TouchableOpacity 
                     style={styles.btnRegis} 
                     onPress={()=>Actions.PendaftaranPemohon()}
                   >
                      <Text style={styles.txtBtnRegis}>Pendaftaran</Text>
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
};

export default Login

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  body: {
    // backgroundColor: Colors.white,
    justifyContent:"center",
    fontSize :13
  },

  img : {
     marginTop:30,
     flexDirection :"row",
     justifyContent:"space-around"
  },

  title : {
    alignItems :"center",
    marginTop:10,
    marginBottom :20
  },

  txtTitle : {
    color : "#1049a3",
    fontSize :25
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

  account : {
    alignItems :"center",
    marginTop:20
  },
  btnRegis : {

  },
  txtBtnRegis : {
    fontSize : 30,
    fontWeight:"900",
    color : "#1049a3",
    marginTop:-6
  },


  footer : {
   position : "relative",
   justifyContent :"center",
   alignItems:"center", 
   paddingTop : 50
 },
 txtFooter : {
   color :COLOR_THEME,
   fontSize:12,
   fontWeight:"bold"
 }


});

