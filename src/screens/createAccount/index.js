import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE } from "../../../res/strings/string";
import app from "../../../api/firebase";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { async } from "@firebase/util";

import {Styles} from "../loginPage/style";


const CreateAccount = (props) => {

    const [email, setEmail] = useState(null)
    const [ passowrd, setPassword] = useState(null)

    const onSignUpPressed = async () => {
        const auth = getAuth(app)
        if(email && passowrd){
           try{
                if(email.includes('@')){
                    let res = await createUserWithEmailAndPassword(auth,email,passowrd)
                    console.log('Account Created Successfully')
                    props.navigation.navigate('login')
                } else{alert('Please Enter a Valid Email Address')}

           }
           catch(e) {alert(e.message)}
        }
        else{ alert("Email and Password rquired")}
    }
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
                    title={'Sign Up'}
                    onPress = {()=> onSignUpPressed()}
                />
            </View>
            <TouchableOpacity 
              onPress={()=> props.navigation.navigate('login')}
            >
              <Text
                style= {Styles.touchableTxt}
              > Already Have an Account</Text>
            </TouchableOpacity>

        </View>
    );
};

export default CreateAccount;


