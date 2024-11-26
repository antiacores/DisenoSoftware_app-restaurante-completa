"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AppSidebar } from "./components/AppSidebar"
import { Login } from "./components/Login"

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                  <h1 className="text-xl font-bold text-center mb-4">Inicia Sesión</h1>
                  <Login onLogin={handleLogin} />
                </div>
              </div>
            )
          }
        />

        {/* Rutas Protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div className="flex">
                <AppSidebar />
                <div className="flex-grow p-4">
                  <h1>Bienvenido a Mar & Olivo</h1>
                  <p>Aquí estará el contenido principal de la aplicación.</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}