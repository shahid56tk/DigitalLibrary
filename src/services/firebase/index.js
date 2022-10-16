import React from "react";
import app from "../../../api/firebase";
import {setDoc, collection, getFirestore, addDoc, doc, query, onSnapshot} from 'firebase/firestore'
import { BOOKS_DATABASE_NAME, BOOK_CATEGORY_DATABASE } from "../../../res/strings/string";
const db = getFirestore(app)

export const AddBookCategory = async (payload) =>{
    try{
        const docRef = await setDoc(doc(db,BOOK_CATEGORY_DATABASE,payload.categoryName),{
            categoryName: payload.categoryName,
            categoryDisp: payload.categoryDisp
        });
        return true
    }
    catch(e){
        alert(e.message)
        return false
    }
}
export const getBookCategory = async () =>{
    let keys = []
    try{
        const qry = query(collection(db,BOOK_CATEGORY_DATABASE))
        onSnapshot(qry, (querySnapshot) =>{
            querySnapshot.forEach((doc)=> {
                keys.push(doc.data())
            })
            console.log(keys)
            return keys
        })
    }catch(e){console.log(e.message)}
}