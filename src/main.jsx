import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"
import theme from './styles/theme'

import { myContext } from './myContext'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/*Passamos o tema aqui*/}
      <GlobalStyles />
      <myContext.Provider value={{ name: 'Michelle Laignier', email: 'michelle@email.com' }}>
        <Routes/>
      </myContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
