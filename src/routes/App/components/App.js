import React from 'react'
// import smeeLogo from './smee_logo.svg'
import logo from '../../../assets/svg/smee_logo.svg'
import styles from '../styles/App.module.scss'

export default function App() {
  return (
    <div>
      <img src={logo} alt="smee logo" style={{width: '300px'}} />
      <h1 className={styles.title}>Hello from React!</h1>
    </div>
  )
}
