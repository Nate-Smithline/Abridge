import '../styles/Header.css'

interface HeaderProps {
  onLogout: () => void
}

function Header({ onLogout }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <button className="btn-secondary" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
