import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeAuth, indexedDBLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH_JoJxqYCJwpm0Gm9fSeW8Tr7JOFzCQo",
    authDomain: "foodo-1a8f3.firebaseapp.com",
    projectId: "foodo-1a8f3",
    storageBucket: "foodo-1a8f3.appspot.com",
    messagingSenderId: "824831505155",
    appId: "1:824831505155:web:b954f23d55cca71a0aef36",
    measurementId: "G-K4YSPPM3PV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
export const auth = initializeAuth(app, {
    persistence: indexedDBLocalPersistence
});
// Create database reference
export const database = getDatabase(app);
// Reference to posts in Realtime DB
export const postsRef = ref(database, "posts");
// Reference to users in Realtime DB
export const usersRef = ref(database, "users");
// Get reference to specific post using post id
export function getPostRef(postId) {
    return ref(database, "posts/" + postId);
}
// Get reference to specific user using user id
export function getUserRef(userId) {
    return ref(database, "users/" + userId);
}

// Reference to the storage service
export const storage = getStorage(app);