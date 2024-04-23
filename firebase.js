
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 
  getAuth, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'


const firebaseConfig = {
  apiKey: "AIzaSyBiM8n4j14I5SjP6AjfRnPLvMAMJkPXhSM",
  authDomain: "arcane-force-324515.firebaseapp.com",
  projectId: "arcane-force-324515",
  storageBucket: "arcane-force-324515.appspot.com",
  messagingSenderId: "672782904805",
  appId: "1:672782904805:web:c81b9d0e885e2b0fbf530c",
  measurementId: "G-GF5X58J8GE"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//metodo de autenticacion de usuario
export const loginauth=(email,password)=> {
    signInWithEmailAndPassword(auth, email, password);
}
//cerrar sesion del usuario
export const loginout=()=> {
  signOut(auth);
}
//estado del usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href='../login.html'
    }
  });
}
