import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({}) //(valor padrão)

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) { /* se nã tiver {} vai ter que ser exatamente nessa ordem */
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data
      console.log(user, token);

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      // o axios atualizou a forma como armazena o token:
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
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

  function signOut() {
    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")

    setData({})
    // pra refletir nas rotas que vai mudar o estado e automaticamente sair do <AppRoutes/> e ir pro <AuthRoutes/>.
  }

  // Pra atualizar os dados do usuário precisamos receber os dados do usuário através de um objeto chamado user.
  async function updateProfile({ user }) {
    try {
      /*await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      // Se a chave já existir no localStorage, usar o setItem pela segunda vez substitui o valor dela.
      setData({ user, token:data.token })*/

      // Pra senha não aparecer no localStorage:
      const updatedUserResponse = await api.put('/users', user);
      const updatedUser = updatedUserResponse.data;
      localStorage.setItem('@rocketnotes:user', JSON.stringify(updatedUser));
      setData({ user: updatedUser, token: data.token });

      alert("Perfil atualizado! :D")
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil. :(")
      }
    }
  }

  useEffect(() => {
    // o que vai ser executado após a renderização do componente
  }, [])
  /* [ estado que quando mudar dispara o useEffect novamente ] */
  // no nosso caso, como não queremos deixar nenhum estado dependente a princípio, deixamos vazio.
  // significa que vai ser recerregado uma vez depois da renderização do nosso componente.

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user:data.user, }}> {/* user:data.user === dados do usuário */}
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext) // (especificando qual pq pode ter mais de um contexto)
  return context
}

export { AuthProvider, useAuth }