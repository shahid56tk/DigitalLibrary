import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import app from '../../../api/firebase';
import {getStorage, ref} from 'firebase/storage';
import * as DocumentPicker from 'expo-document-picker';


const storage = getStorage()



const CreateBook = (props) =>{
    const [bookName, setBookName] = useState(null)

    const getFile = async () => {
        const res = await DocumentPicker.getDocumentAsync();
        if (res.type === "success") {
          console.log(res);
          setBookName(res.name)
        } else {
          console.log(res.type);
        }
      };
    return(
        <View style = {styles.container}>
            

            <View style= {styles.filePicker}>
                <Button
                    title = {'Choose File'}
                    onPress= {() => getFile()}
                />
                <Text style={styles.filetxt}>{ bookName }</Text>
           </View>
        </View>
    );
};

styles = new StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    filePicker:{
        flexDirection:'row',
        borderColor:'black',
        borderWidth:1,
        width:'95%',
        alignItems:'center',
        padding:5,
    },
    filetxt:{
        marginLeft:10,
        fontSize:18,
    }


});

export default CreateBook;