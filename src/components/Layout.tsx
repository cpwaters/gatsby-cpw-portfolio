import React from 'react'
import Navbar from './navbar'

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* content from each page will be injected here */}
      </div>
      <footer>
        <p>Copyright 2021 - Chris Waters</p>
      </footer>
    </div>
  )
}
