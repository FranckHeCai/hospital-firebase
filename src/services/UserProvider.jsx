import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState("")
  const [tasks, setTasks] = useState([])
  return (
    <AppContext.Provider value={{email, setEmail, password, setPassword, user, setUser, userId, setUserId, tasks, setTasks}}>
      {children}
    </AppContext.Provider>
  );
}

export default UserProvider;