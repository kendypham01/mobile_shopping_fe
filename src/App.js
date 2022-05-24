import React from 'react'
import './App.css'
import Main from './app/routes'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
    return (
        <div>
          <ReactNotifications/>
          <Main/>
        </div>
    )
}

export default App
