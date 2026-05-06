import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    let strength = 0
    if (password.length >= 4) strength += 1
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1
    setPasswordStrength(Math.min(strength, 5))
  }, [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    
    setTimeout(() => {
      if (!login(password)) {
        setError('Invalid password. Please try again.')
        setIsVerifying(false)
      } else {
        navigate('/admin/dashboard')
      }
    }, 500)
  }

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card admin-login-mobile">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>
            🔐
          </div>
          <h2 style={{ fontSize: '20px', marginBottom: '4px' }}>Admin Panel</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Enter your password</p>
        </div>

        {error && (
          <div className="admin-error" style={{ marginBottom: '16px', padding: '12px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#dc2626', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label style={{ fontSize: '13px', fontWeight: '500', marginBottom: '6px', display: 'block' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); setIsVerifying(false) }}
              placeholder="Enter admin password"
              autoFocus
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                border: '1px solid #e2e8f0', 
                borderRadius: '10px', 
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                boxSizing: 'border-box'
              }}
            />
            {password.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ 
                      flex: 1, 
                      height: '4px', 
                      borderRadius: '2px', 
                      background: i <= passwordStrength 
                        ? passwordStrength <= 2 ? '#ef4444' : passwordStrength <= 3 ? '#f59e0b' : '#22c55e' 
                        : '#e2e8f0',
                      transition: 'background 0.2s'
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: '11px', color: passwordStrength <= 2 ? '#ef4444' : passwordStrength <= 3 ? '#f59e0b' : '#22c55e' }}>
                  {passwordStrength === 0 && 'Enter password'}
                  {passwordStrength === 1 && 'Weak'}
                  {passwordStrength === 2 && 'Fair'}
                  {passwordStrength === 3 && 'Good'}
                  {passwordStrength === 4 && 'Strong'}
                  {passwordStrength === 5 && 'Very Strong'}
                </span>
              </div>
            )}
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isVerifying}
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              padding: '16px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              opacity: isVerifying ? 0.7 : 1
            }}
          >
            {isVerifying ? (
              <>
                <span style={{ 
                  width: '18px', 
                  height: '18px', 
                  border: '2px solid rgba(255,255,255,0.3)', 
                  borderTopColor: '#fff', 
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }} />
                Verifying...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          Sri Sakthi Power Systems
        </p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .admin-login-mobile {
          max-width: 360px;
          width: 100%;
          padding: 32px 24px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        @media (max-width: 400px) {
          .admin-login-mobile {
            padding: 24px 20px;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  )
}