import { useState } from 'react'
import '../styles/Settings.css'

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailReminders: false,
    darkMode: false,
    language: 'en'
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    })
  }

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <div className="settings-section">
        <h3>Notifications</h3>
        <div className="setting-item">
          <div>
            <h4>Push Notifications</h4>
            <p>Receive push notifications for reminders</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <div>
            <h4>Email Reminders</h4>
            <p>Receive email notifications for reminders</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.emailReminders}
              onChange={() => handleToggle('emailReminders')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <div className="setting-item">
          <div>
            <h4>Dark Mode</h4>
            <p>Use dark theme</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Account</h3>
        <div className="setting-item">
          <button className="btn-secondary">Change Password</button>
        </div>
        <div className="setting-item">
          <button className="btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
