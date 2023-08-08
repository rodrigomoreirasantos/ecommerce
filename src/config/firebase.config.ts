import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDy-73s7Vg0-X9c7vMe2eF_RKwl_6jKxjc',
  authDomain: 'ecommerce-4800e.firebaseapp.com',
  projectId: 'ecommerce-4800e',
  storageBucket: 'ecommerce-4800e.appspot.com',
  messagingSenderId: '899614804238',
  appId: '1:899614804238:web:9dc89222f3cc259009ef5f'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
