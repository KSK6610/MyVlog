var firebaseConfig = {
    apiKey: "AIzaSyAKdi9mAjnjGlsOXADnS-EIRr8mmt4jVhY",
    authDomain: "tweety12345-ab555.firebaseapp.com",
    databaseURL: "https://tweety12345-ab555-default-rtdb.firebaseio.com",
    projectId: "tweety12345-ab555",
    storageBucket: "tweety12345-ab555.appspot.com",
    messagingSenderId: "448877491519",
    appId: "1:448877491519:web:e517a6de1e14d8b3374f8a"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

