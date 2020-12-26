import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCiub-7PEsSiafZ6CcaCC2MPwTAli0RbYg",
    authDomain: "real-mancity.firebaseapp.com",
    databaseURL: "https://real-mancity.firebaseio.com",
    projectId: "real-mancity",
    storageBucket: "real-mancity.appspot.com",
    messagingSenderId: "547662312907",
    appId: "1:547662312907:web:09b8330d490a1cdb0ef24e",
    measurementId: "G-3X2ZKE4CH9"
  };
/*

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
*/
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');
  

  export{
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebasePlayers,
      firebaseDB
  }