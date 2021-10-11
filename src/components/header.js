import React, {Component} from 'react';
import {
    View,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    Easing,
    Animated,
    Dimensions,
    AppRegistry,
    StyleSheet,
    ScrollView,
    
} from 'react-native';

import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {Actions} from "react-native-router-flux"

import {COLOR_CEK_DATA, COLOR_STATUS_BAR, COLOR_THEME, COLOR_REGISTER_NEW_SLO, COLOR_SELECT_MENU} from "./../libraries/colors";

import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get("window").width;

const { width } = Dimensions.get('window')

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.animatedValue2 = new Animated.Value(0)
        this.state = {
            touchMenu:false
        }
    }

    componentDidMount () {
        
    }

    toogleMenuModal=(bool)=>{
        this.setState({touchMenu: bool});
    }
    
      animate () {
        this.animatedValue2.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 100) {
          return Animated.timing(
           value,
            {
              toValue: 1,
              duration,
              easing,
              delay,
              useNativeDriver : true
            }
          )
        }
        Animated.parallel([
          createAnimation(this.animatedValue2, 90, Easing.ease, 90)
        ]).start()
      }

    _touchMenu = () =>{
        // var a ='';
        this.animate();

        if(this.state.touchMenu == true ){
          this.setState({touchMenu:false})
        }else{
          this.setState({touchMenu:true})
        }
    }

    render() {

        const{menu, notification, titleCart, Title, step, back, user, modeRegistrasi, backRegistrasi} = this.props;

        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
          })

        return (
            <>
            <StatusBar backgroundColor={COLOR_STATUS_BAR}/>
            <View style={{ minHeight: modeRegistrasi ? 120 : 90, backgroundColor:COLOR_THEME, flexDirection:'row', justifyContent:'space-between', alignItems: 'center' }}>
               <View style={{ marginLeft:10 }}>
                    {(back) ? 
                            <TouchableOpacity
                                onPress={()=> Actions.pop() }
                                style={{ justifyContent:'center', marginTop: backRegistrasi ? -40 : -25 }}
                            >
                                <IconIonicons
                                    name={"chevron-back-sharp"}
                                    size={30}
                                    color={"#ffff"}
                                />
                                {/* <IconSimpleLine
                                    name={'arrow-left'}
                                    size={20}
                                    style={{ color:'#ffff', marginLeft:10 }}
                                /> */}
                            </TouchableOpacity>
                            :
                            <View/>
                        }
                    {menu ?  
                        <Animated.View
                            style={{ transform: [{rotate: spinText}], marginTop:-20, marginLeft:10 }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    this._touchMenu()
                                    this.toogleMenuModal(true);
                                    this.setState({
                                        touchMenu:!this.state.touchMenu
                                    })                                  
                                }}
                            >
                                

                                {this.state.touchMenu ? 
                                    <IconAntDesign name={"close"} style={{fontSize: 30 }} color={"#ffff"}/>
                                :
                                    // <IconSimpleLine name='magnifier' style={{ color: '#ffff', fontSize: 22 }} />
                                    <IconSimpleLine
                                        name={"menu"}
                                        size={25}
                                        color={"#ffff"}
                                    />
                                }
                            </TouchableOpacity>
                        </Animated.View>
                    :
                        <View/>
                    }
               </View>

               <View style={{marginTop:-25}}>
                   {Title ?
                    <Text style ={{color :"#ffff", fontSize : 23}}>{Title}</Text> 
                   :
                    <View/>
                   }

                   {
                       step ?
                            <Text style ={{color :"#ffff", fontSize : 23}}>{step}</Text> 
                        :
                            <View/>
                   }
               </View>

               <View style={{ marginRight:20, marginTop:-20, flexDirection : "row", alignItems:"center" }}>
                    {notification ? 
                        <View>
                            <View style={{ position:"absolute", backgroundColor:"red", borderRadius:20, paddingLeft:4, paddingRight:4, right:-9, top:-3 }}>
                                {titleCart ? 
                                    <Text style={{ fontSize:10, color:"#ffff", fontWeight:'bold' }}>{titleCart ? titleCart : ""}</Text>
                                :
                                    <View/>
                                }
                            </View>
                            <IconIonicons
                                name={"notifications-sharp"}
                                size={25}
                                color={"#ffff"}
                            />
                        </View>
                    :
                        <View/>
                    }

                {user ?
                        <View style={{ marginLeft:15 }}>
                            <IconFontAwesome
                                name={"user-circle-o"}
                                size={35}
                                color={"#ffff"}
                            />
                        </View>
                   :
                    <View/>
                   }
               </View>

               <Modal 
                    isVisible={this.state.touchMenu}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutLeft'}
                    animationInTiming={700}
                    animationOutTiming={600}
                    hasBackdrop={true}
                    deviceWidth={deviceWidth}       
                    onRequestClose={() => {
                        this.toogleMenuModal(!this.state.touchMenu);
                    }}
                >
                <View style={{flex: 1, backgroundColor:COLOR_THEME, marginLeft:-18, marginTop:-18, width:'80%', marginBottom:-17}}>
                    <TouchableOpacity title="Hide modal" onPress={()=> {
                            this.toogleMenuModal(this.state.touchMenu==false);
                            this.setState({
                                touchMenu:false
                            });                        
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
                            <View style={styles.welcome}>
                                <Text style={styles.txtWelcome}>PSDKP</Text>
                            </View>
                            <View>

                                {/* <TouchableOpacity style={styles.cekData}
                                onPress={()=> {
                                    this.toogleMenuModal(this.state.touchMenu==false);
                                    this.setState({
                                        touchMenu:false
                                    });                
                                    Actions.PendaftaranKapal()      
                                }} 
                                >
                                    <Text  style={styles.txtCekData}>PENDAFTARAN KAPAL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.regisSlo}
                                onPress={()=> {
                                    this.toogleMenuModal(this.state.touchMenu==false);
                                    this.setState({
                                        touchMenu:false
                                    });                
                                    Actions.RegistrasiSLOPemohonSatu()      
                                }} 
                                >
                                    <Text  style={styles.txtRegisSlo}>REGISTRASI SLO BARU</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.cekData}
                                >
                                    <Text  style={styles.txtCekData}>CEK DAFTAR KAPAL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.cekData}
                                >
                                    <Text  style={styles.txtCekData}>CEK STATUS SLO</Text>
                                </TouchableOpacity> */}

                                <TouchableOpacity style={styles.cekData}
                                onPress={()=> {
                                    this.toogleMenuModal(this.state.touchMenu==false);
                                    this.setState({
                                        touchMenu:false
                                    });                
                                    Actions.HomePengawas()      
                                }} 
                                >
                                    <Text  style={styles.txtCekData}>PENGAWAS</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.cekData}
                                onPress={()=> {
                                    this.toogleMenuModal(this.state.touchMenu==false);
                                    this.setState({
                                        touchMenu:false
                                    });                
                                    Actions.Home()      
                                }} 
                                >
                                    <Text  style={styles.txtCekData}>USER</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.regisSlo}
                                onPress={()=> {
                                    this.toogleMenuModal(this.state.touchMenu==false);
                                    this.setState({
                                        touchMenu:false
                                    });                
                                    Actions.Login()      
                                }} 
                                >
                                    <Text  style={styles.txtRegisSlo}>Logout</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.txtFooter}>Copyright @ PSDKP Benoa 2021</Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            </View>
            </>
        );
    }
}


const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:COLOR_CEK_DATA,
        flexDirection:'row'
        // position:'relative'
        // backgroundColor:'#16aac4'
        // alignContent:'center',
        // alignItems:'center'
    },
    modalUser:{        
        marginBottom:20,
        marginTop:10
    },

    welcome : {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    txtWelcome : {
        fontSize : 20,
        color : "#ffff",
        fontWeight:"bold"
    },
    txtGoodDay : {
        fontSize : 25,
        color : "#ffff",
        fontWeight:"bold",
    },

    regisSlo :{
        backgroundColor : COLOR_REGISTER_NEW_SLO,
        padding :8,
        marginTop :10,
    },
    txtRegisSlo : {
        marginLeft :20,
        fontSize:15,
        fontWeight:"bold",
        color:COLOR_THEME
    },

    cekData : {
        backgroundColor :  COLOR_SELECT_MENU,
        padding :8,
        marginTop :10,   
    },
    txtCekData : {
        marginLeft :20,
        fontSize:15,
        color : "#ffff",
        fontWeight:"bold"
    },

    footer : {
        position : "relative",
        justifyContent :"center",
        alignItems:"center", 
        paddingTop : 310
    },
    txtFooter : {
        color :"#ffff",
        fontSize:12
    }
});