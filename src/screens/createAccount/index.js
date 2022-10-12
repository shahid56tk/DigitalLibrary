import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE } from "../../../res/strings/string";

const CreateAccount = (props) => {

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
                    title={'Sign Up'}
                    onPress = {()=> alert('SignUp')}
                />
            </View>

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
        width:'50%'

    }
});

export default CreateAccount;


