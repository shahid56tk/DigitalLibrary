import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE, USER_DATABASE } from "../../../res/strings/string";
import app from "../../../api/firebase";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { async } from "@firebase/util";
import {getFirestore, setDoc, doc } from "firebase/firestore"

import {Styles} from "../loginPage/style";


const CreateAccount = (props) => {

    const [email, setEmail] = useState(null)
    const [name, setName] = useState (null)
    const [ passowrd, setPassword] = useState(null)
    const [ confirmPassword, setConfirmPassword] = useState(null)
    const [loading, setLoading] = useState(false)

    const setFieldsNull = () =>{
        setEmail(null)
        setName(null)
        setPassword(null)
        setConfirmPassword(null)
    }

    const onSignUpPressed = async () => {
        setLoading(true)
        const auth = getAuth(app)
        const db = getFirestore(app)
        if(email && passowrd && name && confirmPassword){
           
            if(email.includes('@')){
                if(passowrd === confirmPassword){
                    try{
                        let res = await createUserWithEmailAndPassword(auth,email,passowrd)
                        const docRef = await setDoc(doc(db, USER_DATABASE, name),{
                            email: email,
                            userName: name,
                            userType: 'user',
                            passowrd: confirmPassword
                        })
                        console.log('Account Created Successfully')
                        props.navigation.navigate('login')
                        setFieldsNull()
                    } catch(e) {alert(e.message)}
                } else {alert('Password does not match')}
            } else{alert('Please Enter a Valid Email Address')}
        }
        else{ alert("All Fields are rquired")}
        setLoading(false)
    }
    return(
        <View style = {Styles.container}>
            {loading? 
                <ActivityIndicator
                    size={'large'}
                    style={Styles.act}
                />:null
            }
            <LogoImg
                source = { LOGO_IMAGE_SOURCE}
                style= {Styles.logo}
            />

            <View style= {Styles.txtInputContainer}>
                <TextInput
                    style = {Styles. txtInput}
                    placeholder={"Email"}
                    value={email}
                    onChangeText = {(t) => setEmail(t.toLowerCase())}
                />
                <TextInput
                    style = {Styles. txtInput}
                    placeholder={"Full Name "}
                    value={name}
                    onChangeText = {(t) => setName(t)}
                />
                <TextInput
                    style= {Styles.txtInput}
                    placeholder = {'Password'}
                    value= {passowrd}
                    secureTextEntry = {true}
                    onChangeText = {(t)=> setPassword(t)}
                />
                <TextInput
                    style= {Styles.txtInput}
                    placeholder = {'Confirm Password'}
                    value= {confirmPassword}
                    secureTextEntry = {true}
                    onChangeText = {(t)=> setConfirmPassword(t)}
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


