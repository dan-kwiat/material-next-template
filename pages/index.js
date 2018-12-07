import React, { useState } from 'react'
import Head from 'next/head'
import { AppBar, AppContent, Drawer } from '../components'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import '../index.scss'

const AppLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Material Next</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='desktop-drawer-container'>
        <Drawer
          isOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <div className='desktop-drawer-app-content'>
          <AppBar
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <TopAppBarFixedAdjust>
            <AppContent />
          </TopAppBarFixedAdjust>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 840px) {
          .desktop-drawer-container {
            display: flex;
            flex-direction: row;
            height: 100vh;
            overflow: hidden;
          }
          .desktop-drawer-app-content {
            flex: auto;
            overflow: auto;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          background: #10171e;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          color: rgba(255,255,255,.84);
          font-size: 1.2em;
          letter-spacing: .02em;
          line-height: 1.5em;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}

export default AppLayout
