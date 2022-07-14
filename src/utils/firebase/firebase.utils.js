import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwC0UnSRZxtSo00yJMRQ7tV6n19X_lWRw",
  authDomain: "crwn-db-3de2d.firebaseapp.com",
  projectId: "crwn-db-3de2d",
  storageBucket: "crwn-db-3de2d.appspot.com",
  messagingSenderId: "696122776054",
  appId: "1:696122776054:web:0b53e4407e25d5f68d0fd7",
  measurementId: "G-0KBW0TRFFV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
      const {displayName,email} = userAuth;
      const creatAt = new Date()

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          creatAt
        })
      }catch(error){
        console.log('error creating the user',error.message)
      }
    }
    return userDocRef
}
