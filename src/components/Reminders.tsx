import { useState } from 'react'
import '../styles/Reminders.css'

interface Reminder {
  id: number
  title: string
  description: string
  time: string
  completed: boolean
}

function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newReminder, setNewReminder] = useState({
    title: '',
    description: '',
    time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const reminder: Reminder = {
      id: Date.now(),
      title: newReminder.title,
      description: newReminder.description,
      time: newReminder.time,
      completed: false
    }
    setReminders([...reminders, reminder])
    setNewReminder({ title: '', description: '', time: '' })
    setShowForm(false)
  }

  const toggleComplete = (id: number) => {
    setReminders(reminders.map(r => 
      r.id === id ? { ...r, completed: !r.completed } : r
    ))
  }

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter(r => r.id !== id))
  }

  return (
    <div className="reminders">
      <div className="reminders-header">
        <h2>Reminders</h2>
        <button 
          className="btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ New Reminder'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="reminder-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={newReminder.title}
              onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
              placeholder="Reminder title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={newReminder.description}
              onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
              placeholder="Reminder description"
              rows={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="datetime-local"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Create Reminder
          </button>
        </form>
      )}

      <div className="reminders-list">
        {reminders.length === 0 ? (
          <p className="empty-state">No reminders yet. Create your first reminder!</p>
        ) : (
          reminders.map(reminder => (
            <div key={reminder.id} className={`reminder-card ${reminder.completed ? 'completed' : ''}`}>
              <div className="reminder-content">
                <h3>{reminder.title}</h3>
                <p>{reminder.description}</p>
                <span className="reminder-time">
                  {new Date(reminder.time).toLocaleString()}
                </span>
              </div>
              <div className="reminder-actions">
                <button 
                  className="btn-icon"
                  onClick={() => toggleComplete(reminder.id)}
                  title={reminder.completed ? 'Mark incomplete' : 'Mark complete'}
                >
                  {reminder.completed ? '↩️' : '✓'}
                </button>
                <button 
                  className="btn-icon delete"
                  onClick={() => deleteReminder(reminder.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Reminders
