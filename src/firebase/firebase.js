import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


//changing object to array on everytime data changes

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//  })
//   console.log(expenses);
// })


//Changing object to array

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

//Pushing new object with auto created id

// database.ref('expenses').push({
//   description: 'Car',
//   amount: 5000,
//   notes: 'Scarpio',
//   createdAt: 100
// });

//Removing
// database.ref('notes/-MCgdVRB0U8v7o177Mao').remove();

// database.ref('notes').push({
//   title: 'Do to the same',
//   body: 'Go for walk'
// })


//Subscribe that any changes happend it will run again and again adn fetch data

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 6000)


//Fetching data for one time

// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val)
// }).catch((e) => {
//   console.log('error', e)
// })


//Setting object to firebase

// database.ref().set({
//   name: 'Veilu Muthu',
//   age: 26,
//   stresslevel: 6,
//   job: {
//   title: 'Software developer',
//   company: 'Google'
// },
//   location: {
//     city: 'Virudhunagar',
//     Country: 'India'
//   }
// });


//Removing
  // database.ref('isSingle').remove().then(() => {
  //   console.log('Data removed');
  // }).catch((e) => {
  //   console.log('Did not remove data',e)
  // });

  //Updating
  // database.ref().update({
  //   stresslevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Chennai'
  // });