//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBq3vSLNaQmRG91PIVan7kEOJq0U9FDmIo",
      authDomain: "kwitter-410ec.firebaseapp.com",
      databaseURL: "https://kwitter-410ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-410ec",
      storageBucket: "kwitter-410ec.appspot.com",
      messagingSenderId: "113660876849",
      appId: "1:113660876849:web:3225a75bc6b0aa6d9d9d10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
console.log(user_name)
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}