import {
  useState,
  useEffect,
} from "react"
import {
  User,
  signOut,
  updateProfile,
  UserCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { useNavigate } from "react-router-dom"

import { auth } from "../../firebase"
import { AuthContext } from "./AuthContext"
import { AuthProviderProps } from "./types"
import { useGlobalContext } from "../GlobalContext"
import { getUserFromUidService } from "../../service"

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [showAccountConfig, setShowAccountConfig] = useState<boolean>(false)
  const { setGameTag, setLoading } = useGlobalContext();

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email)
  }

  function updateUserProfile({
    photoURL,
    displayName,
  }: {
    photoURL?: string | null | undefined;
    displayName?: string | null | undefined;
  }): Promise<void> | undefined {
    if (user) {
      return updateProfile(user, { displayName, photoURL })
    }
  }

  const signOutUser = async (): Promise<void> => {
    await signOut(auth);
    navigate('/sign-in')
  }

  const getGameTag = async () => {
    if (user?.uid) {
      setLoading(true)
      const result = await getUserFromUidService({ uid: user.uid || '' })
      const gameTag = result?.result?.gameTag;
      if (gameTag) {
        setGameTag(gameTag)
        navigate('/games');
        setLoading(false);
      } else {
        setLoading(false);
        setShowAccountConfig(true)
        //todo go to create profile or add consoles
      }
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    })
    return unsubscribe
  }, []);

  useEffect(() => {
    if (user) {
      getGameTag()
    }
  }, [user])


  const values = {
    user,
    auth,
    signUp,
    signIn,
    signOutUser,
    resetPassword,
    showAccountConfig,
    updateUserProfile,
    setShowAccountConfig,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}