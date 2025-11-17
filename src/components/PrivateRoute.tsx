import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

interface PrivateRouteProps {
  children: ReactNode
  isAuthenticated: boolean
}

function PrivateRoute({ children, isAuthenticated }: PrivateRouteProps) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

export default PrivateRoute
