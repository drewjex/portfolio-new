import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.tsx'
import App3 from './App3.tsx'
import App from './App.tsx'
import App4 from "./App4.tsx"
import './index2.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>,
)
