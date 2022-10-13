import React, {useState} from "react";
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE, } from "../../../res/strings/string";
// import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

const Login = (props) =>{
  const [email, setEmail] = useState(null)
    const [ passowrd, setPassword] = useState(null)
    return(
        <View style = {Styles.container}>
            <LogoImg
                source = { LOGO_IMAGE_SOURCE}
                style= {Styles.logoimg}
            />
            <View style= {Styles.txtInputContainer}>
                <TextInput
                    style = {Styles. txtInput}
                    placeholder={"Please Enter Email"}
                    value={email}
                    onChangeText = {(t) => setEmail(t.toLowerCase())}
                />
                <TextInput
                    style= {Styles.txtInput}
                    placeholder = {'Pleas enter Password'}
                    value= {passowrd}
                    secureTextEntry = {true}
                    onChangeText = {(t)=> setPassword(t)}
                />
            </View>
            <View style = {Styles.btn}>
                <Button
                    title={'Log In'}
                    onPress = {()=> props.navigation.navigate('mainPage')}
                />
            </View>
            <TouchableOpacity 
              onPress={()=> props.navigation.navigate('createAccount')}
            >
              <Text
                style= {Styles.touchableTxt}
              > Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> alert('forgot Password')}
            >
              <Text
                style = {Styles.touchableTxt}
              > Forgot Password </Text>
            </TouchableOpacity>

        </View>
    );
}

Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
    },
    logoimg:{
        backgroundColor:'#ffffff',
        width:250,
        height:250,
    },
  txtInputContainer:{
        width:'95%',
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
    },
    txtInput:{
        width:'95%',
        height:40,
        borderWidth:1,
        textAlign:'center',
        marginTop:10,
        alignSelf:'center',
        borderRadius:20,
        marginBottom:20

    },
    btn:{
        width:'40%'
    },
    touchableTxt:{
      marginTop:10,
      color:'blue',
      fontSize:17
    }
});

export default Login;