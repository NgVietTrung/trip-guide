import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBWWlaPaH2hP7ljPMmIQGqmQXIV6cjE32o',
	authDomain: 'trip-guide-ac9ee.firebaseapp.com',
	projectId: 'trip-guide-ac9ee',
	storageBucket: 'trip-guide-ac9ee.appspot.com',
	messagingSenderId: '880801761353',
	appId: '1:880801761353:web:a7105c1961f95f522e9798',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;
