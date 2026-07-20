import './App.css'
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Display from './pages/Display.jsx'
import Settings from './pages/Settings.jsx'

function App() {
  const location = useLocation()
  const isSettings = location.pathname === '/settings'
  const switchTo = isSettings ? '/display' : '/settings'
  const iconName = isSettings ? 'desktop_mac' : 'settings'
  const ariaLabel = isSettings ? 'Go to display' : 'Go to settings'

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/display" replace />} />
        <Route path="/display" element={<Display />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Link to={switchTo} className="page-switch-tab" aria-label={ariaLabel}>
        <span className="material-symbols-rounded">{iconName}</span>
      </Link>
    </>
  )
}

export default App
