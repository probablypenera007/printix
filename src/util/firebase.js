import { initializeApp, getApps, getApp } from "firebase/app";

let app;
if (getApps().length === 0) {
  // Initialize Firebase app
  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
} else {
  // Use existing app if already initialized
  app = getApp();
}

export const firebaseApp = app;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD4-hTvjUhxShhuA7zH-TQqYwygHhKYRoU",
//   authDomain: "printix-72f6c.firebaseapp.com",
//   projectId: "printix-72f6c",
//   storageBucket: "printix-72f6c.appspot.com",
//   messagingSenderId: "119978508758",
//   appId: "1:119978508758:web:de6c1f12f235cd41746477",
//   measurementId: "G-KWXRHDMYW0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);