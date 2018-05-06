
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqxbTGcnPG7diw04kjAmcCBdr8P5WBeGw",
    authDomain: "mur-webcup2018.firebaseapp.com",
    databaseURL: "https://mur-webcup2018.firebaseio.com",
    projectId: "mur-webcup2018",
    storageBucket: "mur-webcup2018.appspot.com",
    messagingSenderId: "781715435469"
  };
  firebase.initializeApp(config);

  //Get DOM Elements
  const txtEmail = document.querySelector("#form-username");
  const txtPassword = document.querySelector("#form-password");
  const btnSignin = document.querySelector("#sign-in");

  //Add login  event listener
  if(btnSignin !== null){
    btnSignin.addEventListener('click', e => {
      //Get Email and password values
      const email = txtEmail.value;
      const password = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
    });
  }

  //Add Signup event listener

  // firebase ui
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
});

// Initialize the FirebaseUI Widget using Firebase.
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'http://maurice5.webcup.symars.re/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.firebase.auth.FacebookAuthProvider.PROVIDER_ID
  tosUrl: 'http://maurice5.webcup.symars.re/'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
