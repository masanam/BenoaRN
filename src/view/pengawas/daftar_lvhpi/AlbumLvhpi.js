import React from 'react';
import { Alert, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import Card from "../../../components/Card";
import CardSection from '../../../components/CardSection';
import Button from '../../../components/Button';
import { Actions } from 'react-native-router-flux';

const AlbumLvhpi = ({ surat }) => {
    const { 
        _id,
        siup,
        fotoNpwp,
        nomorSPI,
        image,
        namaKapal,
        url
    } = surat;

    const { 
        headerImageStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <TouchableOpacity 
        style={styles.regisSlo}
        onPress={()=>Alert.alert(_id.toString())}
    >
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={headerImageStyle}
                        source={{ uri: fotoNpwp }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{namaKapal}</Text>
                    <Text>{nomorSPI}</Text>
                </View>
            </CardSection>

            
        </Card>
        </TouchableOpacity>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    headerImageStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderWidth:5,
        borderColor :"#ddd"
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
    
export default AlbumLvhpi;
