import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebaseConfig";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState({
    signupError: null,
    loginError: null,
  });
  const navigate = useNavigate();
  
  const loginWithGoogle = () =>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {navigate('/store/pag/1')})
      .catch(error => console.log(error))
  } 

  const login = (email, password) => {
    setError({...error,loginError: null,})
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredencial) => {
        // const user = userCredencial.user
        navigate('/store/pag/1')
      })
      .catch((error) => {console.log("[ERROR LOGIN] => ",error); setError({...error, loginError: error.message})})
  }
  
  const signup = (email, password) => {
    setError({...error,signupError: null})
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/store/pag/1') )
      .catch((error) => {console.log("[ERROR] => ",error);setError({...error, signupError: error.message})})
  }

  const logout = () => {
    signOut(auth)
    navigate('/login')
  }

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const updateUser = (data) => {
    return updateProfile(auth.currentUser, data)
    .then(() => {return {type: 'success'}})
    .catch((error) => {return {type: 'error'}})
  }

  useEffect( () => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if(currentUser == null){navigate('/login')}
    });
  }, [])
  return (
    <AuthContext.Provider value={{error, signup, user, logout, loginWithGoogle, resetPassword, login, updateUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;