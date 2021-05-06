import React from 'react'
import Navbar from './navbar'


export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2021 - Chris Waters</p>
      </footer>
    </div>
  )
}
