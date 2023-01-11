import React from 'react'
import { Navigate } from 'react-router-dom';
import useSecurity from '../hooks/useSecurity';

function Protected({ isSignedIn, children }) {
    const {isLoggedIn} = useSecurity();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected