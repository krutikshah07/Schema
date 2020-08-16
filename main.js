// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyCX8vZs1c8rwOLyFn9xxrRNIXl9Y6rTE74",
    authDomain: "jpmc-e6d7c.firebaseapp.com",
    databaseURL: "https://jpmc-e6d7c.firebaseio.com",
    projectId: "jpmc-e6d7c",
    storageBucket: "jpmc-e6d7c.appspot.com",
    messagingSenderId: "841228246628",
    appId: "1:841228246628:web:130a59c1ddd8c170248971",
    measurementId: "G-HMXYWHQV0D"
  };
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var schemesRef = firebase.database().ref('schemes');


  firebase.database().ref('schemes').on('value',(snap)=>{
    console.log(snap.val());
  });

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');

  var gender = getInputVal('gender');
  var fromage = getInputVal('ageto');
  var toage = getInputVal('agefrom');
  var fromincome = getInputVal('fromincome');
  var toincome = getInputVal('toincome');



  saveScheme(name, gender, fromage, toage,fromincome,toincome);

  document.querySelector('.alert').style.display = 'block';

 
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


  document.getElementById('contactForm').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save scheme to firebase
function saveScheme(name, gender, fromage, toage,fromincome,toform){
  var newSchemeRef = schemesRef.push();
  newSchemeRef.set({
    name: name,
  
    gender:gender,
    fromage:fromage,
    toage:toage,
    fromincome:fromincome,
    toform:toform
  
  });
}
