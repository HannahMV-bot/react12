import React from "react"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5 py-3">
      <div className="container d-flex justify-content-between align-items-center">

      
        <span className="text-muted">
          © 2026 - Carrito de Compras
        </span>

       
        <div>
          <NavLink 
            to="/ayuda" 
            className="text-decoration-none text-muted me-3"
          >
            Ayuda
          </NavLink>

          <NavLink 
            to="/politicas" 
            className="text-decoration-none text-muted"
          >
           Políticas
          </NavLink>
        </div>

      </div>
    </footer>
  )
}