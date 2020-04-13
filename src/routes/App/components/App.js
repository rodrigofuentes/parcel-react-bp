import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../../assets/svg/smee_logo.svg'
import styles from '../styles/App.module.scss'

export default function App({title}) {
  return (
    <div>
      <img src={logo} alt="smee logo" style={{width: '300px'}} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}
