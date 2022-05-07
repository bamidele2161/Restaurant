import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAb5RpKEo2Mf3cdyaqwEFtOHfH0RIFLfAM",
    authDomain: "restaurantapp-8022c.firebaseapp.com",
    databaseURL: "https://restaurantapp-8022c-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-8022c",
    storageBucket: "restaurantapp-8022c.appspot.com",
    messagingSenderId: "310942321270",
    appId: "1:310942321270:web:c0af1487a05dbea47f2d57"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};