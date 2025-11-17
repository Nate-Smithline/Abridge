import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Overview from '../components/Overview'
import Reminders from '../components/Reminders'
import Settings from '../components/Settings'

interface DashboardProps {
  onLogout: () => void
}

function Dashboard({ onLogout }: DashboardProps) {
  return (
    <DashboardLayout onLogout={onLogout}>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  )
}

export default Dashboard
