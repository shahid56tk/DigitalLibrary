import React from "react";
import app from "../../../api/firebase";
import {setDoc, collection, getFirestore, addDoc} from 'firebase/firestore'
import { BOOKS_DATABASE_NAME } from "../../../res/strings/string";
const db = getFirestore(app)

export const AddCategory = async (payload) =>{
    try{
        await addDoc(collection(dbx))
    }
    catch(e){alert(e.message)}
}