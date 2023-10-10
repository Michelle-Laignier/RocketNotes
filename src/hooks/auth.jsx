import { createContext, useContext, useState } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({}) //(valor padrão)

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) { /* se nã tiver {} vai ter que ser exatamente nessa ordem */
    try {
      const response = await api.post("/sessions", { email, password })
      const { user , token } = response.data
      console.log(user, token);
      api.defaults.headers.authorization = `Bearer ${token}`
      // inserimos um token do tipo Bearer de autenticação no cabeçalho, por padrão, de todas as
      // requisições que o usuário vai fazer.
      // guardamos as infos do user e do token em um estado (useState com o setData)
      setData({ user, token })
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, user:data.user }}> {/* user:data.user === dados do usuário */}
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext) // (especificando qual pq pode ter mais de um contexto)
  return context
}

export { AuthProvider, useAuth }