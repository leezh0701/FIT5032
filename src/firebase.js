// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkNVnm2DqhSPvyBBadHTyqDzx4pfZVMJ0',
  authDomain: 'week7-zhehao.firebaseapp.com',
  projectId: 'week7-zhehao',
  storageBucket: 'week7-zhehao.appspot.com',
  messagingSenderId: '767616431045',
  appId: '1:767616431045:web:8684729c983b25f45551ac'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
