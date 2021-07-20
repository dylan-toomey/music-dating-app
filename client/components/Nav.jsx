import { logOff } from 'authenticare/client'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions'
import { IfAuthenticated } from './Authenticated'
import { IoIosLogOut } from 'react-icons/io'
import { MdQueueMusic } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { RiChatNewLine, RiChat4Line } from 'react-icons/ri'

function Nav (props) {
  const { notifiactions } = props
  function logout () {
    logOff()
    props.dispatch(logoutUser())
  }

  function Navigation () {
    const pathname = window.location.href
    switch (pathname) {
      case 'http://localhost:3000/#/':
      case 'http://localhost:3000/#':
        return (
          <>
            <div>
              <NavLink className='img-size' to="/profile"><CgProfile /></NavLink>
              <NavLink className='pre-title' to='/matching'><MdQueueMusic /></NavLink>
              <NavLink to="/" onClick={logout}><IoIosLogOut /></NavLink>
            </div>
          </>
        )
      case 'http://localhost:3000/#/matching':
        return (
          <>
            <div>
              <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
            </div>
            <div>
              <NavLink className='img-size' to="/profile"><CgProfile /></NavLink>
              <NavLink className={`img-size ${notifiactions ? 'notify' : ''}`} to="/chat">{notifiactions ? <RiChatNewLine /> : <RiChat4Line /> }</NavLink>
              <NavLink to="/" onClick={logout}><IoIosLogOut /></NavLink>
            </div>
          </>
        )
      case 'http://localhost:3000/#/chat':
        return (
          <>
            <div>
              <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
            </div>
            <div>
              <NavLink className='pre-title' to='/matching'><MdQueueMusic /></NavLink>
              <NavLink className='img-size' to="/profile"><CgProfile /></NavLink>
              <NavLink to="/" onClick={logout}><IoIosLogOut /></NavLink>
            </div>
          </>
        )
      case 'http://localhost:3000/#/profile':
        return (
          <>
            <div>
              <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
            </div>
            <div>
              <NavLink className='pre-title' to='/matching'><MdQueueMusic /></NavLink>
              <NavLink className={`img-size ${notifiactions ? 'notify' : ''}`} to="/chat">{notifiactions ? <RiChatNewLine /> : <RiChat4Line /> }</NavLink>
              <NavLink to="/" onClick={logout}><IoIosLogOut /></NavLink>
            </div>
          </>
        )
      default:
        return (
          <>
            <div>
              <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
            </div>
            <div>
              <NavLink className='img-size' to="/profile"><CgProfile /></NavLink>
              <NavLink className='pre-title' to='/matching'><MdQueueMusic /></NavLink>
              <NavLink className={`img-size ${notifiactions ? 'notify' : ''}`} to="/chat">{notifiactions ? <RiChatNewLine /> : <RiChat4Line /> }</NavLink>
              <NavLink to="/" onClick={logout}><IoIosLogOut /></NavLink>
            </div>
          </>
        )
    }
  }

  return (
    <>
      <IfAuthenticated>
        <nav className='nav-container'>
          <Navigation />
        </nav>
      </IfAuthenticated>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    notifiactions: globalState.notifiactions
  }
}

export default connect(mapStateToProps)(Nav)
