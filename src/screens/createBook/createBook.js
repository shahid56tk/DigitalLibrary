import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import app from '../../../api/firebase';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import * as DocumentPicker from 'expo-document-picker';
import { BOOK_STORAGE_fOLDER } from '../../../res/strings/string';


const storage = getStorage()



const CreateBook = (props) =>{
    const [bookName, setBookName] = useState(null)
    const [file, setFile] = useState(null)

    const uploadBook = (b, file) =>{
        const storageRef = ref(storage,BOOK_STORAGE_fOLDER+'/'+b)
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',(snapshot) =>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log('Uplad is in Progress '+ progress +'% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('upload is paused');
                    break;
                case 'running':
                    console.log('upload is running')
                    break;
            }
        },
        (error)=> {
            alert(error)
            console.log(error)
        },
         ()=>{
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                console.log('The URL of Book is', downloadURL);
            });
        });


        // const bookRef = ref(storage, b)
        // const BookPdfRef = ref(storage, BOOK_STORAGE_FOLDER+'/'+b)
        // bookRef.name === BookPdfRef.name;
        // bookRef.fullPath == BookPdfRef.fullPath;
        // console.log(BookPdfRef.fullPath)
        // setBookName(null)
    }

    const getFile = async () => {
        const res = await DocumentPicker.getDocumentAsync();
        if (res.type === "success") {
          console.log(res.uri);
          setBookName(res.name)
          setFile(res.uri)
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
           <Button title=' Save'
                onPress={() => {uploadBook(bookName, file)}}
           />
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