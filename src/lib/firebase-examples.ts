/**
 * Firebase Usage Examples
 * 
 * This file contains examples of how to use Firebase services in your application.
 * Import the services from './firebase' and use them as shown below.
 */

// Example: Authentication
/*
import { auth } from './firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

// Sign in
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    console.error(error);
  });

// Sign out
signOut(auth);

// Listen to auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});
*/

// Example: Firestore Database
/*
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc,
  updateDoc,
  deleteDoc 
} from 'firebase/firestore';

// Add a document
const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Read documents
const getData = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });
};
*/

// Example: Storage
/*
import { storage } from './firebase';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// Upload a file
const uploadFile = async (file: File) => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};
*/

// Example: Analytics
/*
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

if (analytics) {
  logEvent(analytics, 'page_view', {
    page_path: window.location.pathname
  });
}
*/
