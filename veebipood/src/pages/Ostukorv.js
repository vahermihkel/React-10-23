import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/lisa-toode">
        <button>Lisa mõni toode ostukorvi</button>
      </Link>
    </div>
  )
}

export default Ostukorv