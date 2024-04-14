import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const GitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the state", currentUser);
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,

    loading,
    createUser,
    signIn,
    logOut,
    GoogleSignIn,
    GitHubSignIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
