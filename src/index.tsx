import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyAZhAo4ozanWNEvTbAap-P1kcf5qOJWlnw",
  authDomain: "trusty-spanner-370709.firebaseapp.com",
  projectId: "trusty-spanner-370709",
  storageBucket: "trusty-spanner-370709.appspot.com",
  messagingSenderId: "32473887623",
  appId: "1:32473887623:web:34b5a0f32650750e51d922",
  measurementId: "G-SRRFWYNLDQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
