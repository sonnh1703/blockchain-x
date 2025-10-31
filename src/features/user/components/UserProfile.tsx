import { useAuthStore } from '../../../store'

/**
 * User Profile Component
 */
export function UserProfile() {
  const { user, isAuthenticated, logout } = useAuthStore()

  if (!isAuthenticated || !user) {
    return <div>Not logged in</div>
  }

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
