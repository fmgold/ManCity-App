import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyA6vykbsruyF4EGqExUZWuoKzcdLZmmcuo",
    authDomain: "m-city-f2676.firebaseapp.com",
    databaseURL: "https://m-city-f2676.firebaseio.com",
    projectId: "m-city-f2676",
    storageBucket: "m-city-f2676.appspot.com",
    messagingSenderId: "914046478906",
    appId: "1:914046478906:web:4969587b03a87195006303",
    measurementId: "G-05DXJP3G67"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');

  export{
      firebase,
      firebaseMatches,
      firebasePromotions
  }