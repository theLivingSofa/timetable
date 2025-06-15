import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDITHje73Z5N7sGLvXA5EjirlkAw9zH9e0", // replace this
  authDomain: "parktt-f6432.firebaseapp.com",
  projectId: "parktt-f6432",
  appId: "1:677444333587:web:3fe21b60752b7fdeb4cfe6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
