import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import frauncesStyles from '@fontsource-variable/fraunces/soft.css?inline'
import instrumentSansStyles from '@fontsource-variable/instrument-sans/standard.css?inline'
import appStyles from './index.css?inline'
import App from './App.tsx'

const INLINE_STYLE_ID = 'app-inline-styles'
const styleElement = document.getElementById(INLINE_STYLE_ID) ?? document.createElement('style')

styleElement.id = INLINE_STYLE_ID
styleElement.textContent = `${instrumentSansStyles}\n${frauncesStyles}\n${appStyles}`

if (!styleElement.parentNode) {
  document.head.appendChild(styleElement)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
