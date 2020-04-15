import React from 'react'
import PropTypes from 'prop-types'

import smee from '../../../assets/images/smee_logo.svg'
import logo from '../../../assets/images/parcel.png'
import styles from '../styles/App.module.scss'

function App({title}) {
  return (
    <div>
      <img src={smee} alt="smee logo" style={{width: '300px'}} />
      <h1 className={styles.title}>
        {title}
        <img src={logo} alt="parcel logo" />
      </h1>
    </div>
  )
}

App.defaultProps = {
  title: 'Hello from React!!! and Parcel 📦',
}

App.propTypes = {
  title: PropTypes.string,
}

export default App
