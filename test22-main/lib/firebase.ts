// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXX_YOUR_REAL_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxx"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
