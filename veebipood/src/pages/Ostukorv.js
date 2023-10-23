import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/lisa">
        <button>Lisa mõni toode ostukorvi</button>
      </Link>
    </div>
  )
}

export default Ostukorv