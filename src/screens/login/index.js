import React, {useState} from "react";
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE, } from "../../../res/strings/string";
// import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

const Login = (props) =>{
  const [email, setEmail] = useState(null)
    const [ passowrd, setPassword] = useState(null)
    return(
        <View style = {styles.container}>
            <LogoImg
                source = { LOGO_IMAGE_SOURCE}
                style= {styles.logoimg}
            />
            <View style= {styles.txtInputContainer}>
                <TextInput
                    style = {styles. txtInput}
                    placeholder={"Please Enter Email"}
                    value={email}
                    onChangeText = {(t) => setEmail(t.toLowerCase())}
                />
                <TextInput
                    style= {styles.txtInput}
                    placeholder = {'Pleas enter Password'}
                    value= {passowrd}
                    secureTextEntry = {true}
                    onChangeText = {(t)=> setPassword(t)}
                />
            </View>
            <View style = {styles.btn}>
                <Button
                    title={'Log In'}
                    onPress = {()=> props.navigation.navigate('mainPage')}
                />
            </View>
            <TouchableOpacity 
              onPress={()=> props.navigation.navigate('createAccount')}
            >
              <Text
                style= {styles.touchableTxt}
              > Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> alert('forgot Password')}
            >
              <Text
                style = {styles.touchableTxt}
              > Forgot Password </Text>
            </TouchableOpacity>

        </View>
    );
};

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'

    },
    logoimg:{
      backgroundColor:'#ffffff'
    },
    txtInputContainer:{
        width:'95%',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:30,
        paddingTop:20,
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