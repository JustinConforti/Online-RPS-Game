var firebaseConfig = {
    apiKey: "AIzaSyCL07E-rnDgMPZ_ibzMXDyGOZ8i951KwEY",
    authDomain: "bootcamp-4f413.firebaseapp.com",
    databaseURL: "https://bootcamp-4f413.firebaseio.com",
    projectId: "bootcamp-4f413",
    storageBucket: "bootcamp-4f413.appspot.com",
    messagingSenderId: "734683964740",
    appId: "1:734683964740:web:da3d3aaa748be1b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();
  var connections = database.ref('connections');
  var namesPicked = false;
  var player = {
    number: '0',
    name: '',
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
};
var opponent = {
    number: '0',
    name: '',
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
};

  $('#submit').click(function (event) {

    if (player.name.length === 0) {
player.name = $("#input-box").val().toUpperCase()

} else {
     opponent.name = $("#input-box").val().toUpperCase()
}
database.ref().set({
    player: player,
    opponent: opponent
})
console.log(player.name)
console.log(opponent.name)
namesPicked = true;
 updateHTML()
})

function updateHTML() {
     //set name hooks from firebase to display in HTML
 }


 database.ref().on("value", function (snapshot) {

    
     snapshot = snapshot.val()
     console.log(snapshot)

     if (namesPicked === true && (snapshot.player.name.length > 0) && (snapshot.opponent.name.length > 0)) {
        //  gameStart()
         console.log("players are here")
     }

 })

 connections.once('value', function (snapshot) {
    console.log(snapshot.val())
    // if (Object.keys(snapshot.val()).indexOf('1') === -1) {
    //     player.number = '1';
    //     opponent.number = '2';
    // } else if (Object.keys(snapshot.val()).indexOf('2') === -1) {
    //     player.number = '2';
    //     opponent.number = '1';
    // }
})




// Firebase Auth(?) You can use emails here, possible?



            // Chat Features ---------------
//function sendChatMessage() {
//     ref = firebase.database().ref("/chat")
//     messageField = document.querySelector("#chat-message")

//     ref.push().set({
//         name: firebase.auth().currentUser.displayName,
//         message: messageField.value
//     })
// }

// ref = firebase.database().ref("/chat")

// ref.on("child_added", function(snapshot) {

//     var message = snapshot.val()
//     addChatMessage(message.name, message.message)
// }  

// DOM MANIPULATION TO GET THIS TO DISPLAY TO HTML