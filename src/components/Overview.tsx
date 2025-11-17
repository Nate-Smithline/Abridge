import '../styles/Overview.css'

function Overview() {
  return (
    <div className="overview">
      <h2>Welcome to Abridge</h2>
      <p className="subtitle">Your AI-powered reminder assistant</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Reminders</h3>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <h3>Active</h3>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <h3>Completed Today</h3>
          <p className="stat-value">0</p>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">
            <span className="icon">➕</span>
            Create Reminder
          </button>
          <button className="action-btn">
            <span className="icon">🤖</span>
            AI Assistant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview
