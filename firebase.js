const firebaseConfig = {
    apiKey: "AIzaSyDbudKZiIoJ0uA9qzj8jnH3aqrsKyqpqGU",
    authDomain: "literaturuli-klubi.firebaseapp.com",
    databaseURL: "https://literaturuli-klubi-default-rtdb.firebaseio.com",
    projectId: "literaturuli-klubi",
    storageBucket: "literaturuli-klubi.appspot.com",
    messagingSenderId: "743192993134",
    appId: "1:743192993134:web:72fccaf7a15c07483c357f",
    measurementId: "G-073EXFFK1J"
  };
firebase.initializeApp(firebaseConfig);

function randomID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateFirebaseItem(ID, value) {
  return {
    userid: ID,
    data: value,
  };
}

function addElementInFirebase(REF, data) {
  firebase
    .database()
    .ref(REF + randomID())
    .set(data);
}

function getArrayFromFirebase(REF) {
  let tempArray = [];
  firebase
    .database()
    .ref(REF)
    .on("value", (response) => {
      response.forEach((element) => {
        tempArray.push(generateFirebaseItem(element.key, element.val()));
      });
    });
  return tempArray;
}

function removeRefFromFirebase(REF) {
  firebase.database().ref(`${REF}`).remove();
}

function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}

function getElementFromFirebaseByID(REF, id) {
  const tempArray = getArrayFromFirebase(REF);
  let temp = {};
  tempArray.forEach((element) => {
    if (element.userid === id) {
      temp = element;
    }
  });
  console.log(temp);
  return temp;
}

function changeDataOnFirebaseByID(REF, ID, data) {
  firebase
    .database()
    .ref(REF + "/" + ID)
    .set(data);
}