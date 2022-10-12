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
            />
            <View style= {styles.txtInputContainer}>
                <TextInput
                    style = {styles. txtInput}
                    placeholder={"Please Enter Email"}
                    value={email}
                    onChangeText = {(t) => setEmail(t.toLowerCase)}
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

    },
    txtInputContainer:{
        width:'98%',
        marginTop:20,
        backgroundColor:"green",
        alignItems:'center',
        justifyContent:'center'
    },
    txtInput:{
        width:'95%',
        height:40,
        borderWidth:1,
        textAlign:'center',
        marginTop:10,
        alignSelf:'center'

    },
    btn:{

    }
});

export default CreateAccount;


