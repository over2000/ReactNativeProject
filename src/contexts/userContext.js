import { createContext, useState } from 'react'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState({})

  function login(email, senha) {
    if (email === 'teste@teste.com' && senha === 'teste') {
      setUser({
        name: 'Teste',
        email: email,
        address: 'Brasília',
        phone: '(11) 99999-9999',
      })
      return 'ok'
    } else {
      return 'email ou senha incorretos'
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
