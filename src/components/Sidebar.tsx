import { Link, useLocation } from 'react-router-dom'
import '../styles/Sidebar.css'

function Sidebar() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true
    if (path !== '/dashboard' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Abridge</h2>
      </div>
      <nav className="sidebar-nav">
        <Link 
          to="/dashboard" 
          className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}
        >
          <span className="icon">📊</span>
          Overview
        </Link>
        <Link 
          to="/dashboard/reminders" 
          className={`nav-item ${isActive('/dashboard/reminders') ? 'active' : ''}`}
        >
          <span className="icon">⏰</span>
          Reminders
        </Link>
        <Link 
          to="/dashboard/settings" 
          className={`nav-item ${isActive('/dashboard/settings') ? 'active' : ''}`}
        >
          <span className="icon">⚙️</span>
          Settings
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
