import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="App__navbar">
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ideas/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Ideas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ideas/Archived"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Archived Ideas
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar