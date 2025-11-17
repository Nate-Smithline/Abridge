import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../styles/DashboardLayout.css'

interface DashboardLayoutProps {
  children: ReactNode
  onLogout: () => void
}

function DashboardLayout({ children, onLogout }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header onLogout={onLogout} />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
