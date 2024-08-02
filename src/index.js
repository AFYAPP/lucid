

import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { Overlay } from './Overlay'
// import { Portal } from './Portal'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<span>loading...</span>}>
    <App />
    <Overlay />
    {/* <Portal /> */}
  </Suspense>,
   
)
