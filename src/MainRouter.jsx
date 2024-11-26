import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { AppSidebar } from "./components/AppSidebar"

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AppSidebar />} />
      </Routes>
    </Router>
  )
}