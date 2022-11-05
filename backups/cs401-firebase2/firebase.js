const prompt = require('prompt-sync')();
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yedaiah-8835d-default-rtdb.firebaseio.com/"
});
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
const usersRef = ref.child('user');
console.log("[1]CREATE [2]READ [3]UPDATE [4]DELETE [Any Key]Terminate");
const num = prompt('Enter a number: ');
switch(num) {
    case '1':   
        var id = prompt('Enter StudentID: ');
        var l_name = prompt('Enter Last Name: ');
        var f_name = prompt('Enter First Name: ');
        var section = prompt('Enter Section: ');
        usersRef.set({
            child : {
              StudentID: id,
              Student_lastname: l_name,
              Student_firstname: f_name,
              Student_section : section
            
          }
        }
        );
        break;
    case '2':
        ref.once("value", function(snapshot) {
            console.log(snapshot.val());
          });
        break;
    case '3':
        id = prompt('Enter StudentID: ');
        l_name = prompt('Enter Last Name: ');
        f_name = prompt('Enter First Name: ');
        section = prompt('Enter Section: ');
        usersRef.update({
             'child' : {
                'StudentID': id,
                'Student_lastname': l_name,
                'Student_firstname': f_name,
                'Student_section' : section
                }
                });
        break;
    case '4':
        ref.child("user").remove();
        break;
    default:
		
    }