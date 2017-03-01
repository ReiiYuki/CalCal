import firebase from 'firebase'
import config from './firebase.config.js'

firebase.initializeApp(config)

const provider = new firebase.auth.FacebookAuthProvider()

const db = firebase.database()

const auth = (cb)=>{
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user.displayName;
    cb(token,user)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code
    let errorMessage = error.message
    // The email of the user's account used.
    let email = error.email
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential
    // ...
  })
}

const addFood = (name,cal,writer,cb)=>{
  db.ref('food').push().set({
    name : name,
    cal : cal,
    writer : writer
  })
  getFood(cb)
}

const getFood = (cb)=>{
  db.ref('food').on('value',(snapshot)=>{
    let data = []
    snapshot.forEach((childSnapshot) => {
      let childData = childSnapshot.val();
      childData.key = childSnapshot.key
      data.push(childData)
    })
    cb(data)
  })
}

const removeFood = (id,cb)=>{
  db.ref('food/'+id).remove()
  getFood(cb)
}

export default {
  auth : auth,
  addFood : addFood,
  getFood : getFood,
  removeFood : removeFood
}
