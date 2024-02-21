import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyCyOGlcK1Gu6yRI8lBI8jpjx0k15HfiBCA',
    authDomain: 'crwn-db-a8796.firebaseapp.com',
    projectId: 'crwn-db-a8796',
    storageBucket: 'crwn-db-a8796.appspot.com',
    messagingSenderId: '901338385467',
    appId: '1:901338385467:web:a55117bb0aaa6e64d5e01e'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const redirectSignIn = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    
    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(err) {
            console.log('error creating the user');
        }
    }
}