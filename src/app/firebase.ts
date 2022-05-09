import 'dotenv/config';

import * as firebase from 'firebase-admin';

const app = firebase.initializeApp({
  credential: firebase.credential.applicationDefault(),
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);

export default {
  firestore,
  auth,
};
