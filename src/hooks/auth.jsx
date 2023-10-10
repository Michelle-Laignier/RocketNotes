import { createContext, useContext } from "react";

export const AuthContext = createContext({}) //(valor padrão)

function AuthProvider({ children }) {
  return(
    <AuthContext.Provider value={{ name: 'Michelle', email: 'michelle@email.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext) // (especificando qual pq pode ter mais de um contexto)
  return context
}

export { AuthProvider, useAuth }