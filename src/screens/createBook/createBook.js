import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import app from '../../../api/firebase';
import {getStorage, ref} from 'firebase/storage';
import * as DocumentPicker from 'expo-document-picker';


const storage = getStorage()



const CreateBook = (props) =>{
    const [file, setFile] = useState(null)

    const getFile = async () => {
        const res = await DocumentPicker.getDocumentAsync();
        if (res.type === "success") {
          console.log(res);
          setFile(res.name)
        } else {
          console.log(res.type);
        }
      };
    return(
        <View style = {styles.container}>
            <Button
                title = {'Choose File'}
                onPress= {() => getFile()}
            />
            <Text>{ file }</Text>
        </View>
    );
};

styles = new StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CreateBook;