import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { AppBar, Drawer } from '../components'
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'
import '../index.scss'

class Layout extends React.Component {
  state = {
    isDrawerOpen: false,
  }
  setIsDrawerOpen = isDrawerOpen => {
    this.setState({ isDrawerOpen })
  }
  render () {
    return (
      <div>
        <div className='desktop-drawer-container'>
          <Drawer
            isOpen={this.state.isDrawerOpen}
            setIsDrawerOpen={this.setIsDrawerOpen}
          />
          <div className='desktop-drawer-app-content'>
            <AppBar
              setIsDrawerOpen={this.setIsDrawerOpen}
            />
            <TopAppBarFixedAdjust>
              {this.props.children}
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
      </div>
    )
  }
}

class AppLayout extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Material Next</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default AppLayout
