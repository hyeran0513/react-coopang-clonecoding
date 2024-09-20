import classNames from 'classnames'
import React from 'react'

import styles from './Devider.module.scss'

const Devider = ({
  space = 22,
  color = '#ccc',
  className = '',
  ...restProps
}) => {
const style = {
  marginTop: space,
  marginBottom: space,
  background: color,
}

  return (
    <div
      role="presentation"
      className={classNames(styles.line, className)}
      style={style}
      {...restProps}
    />
  )
}

export default Devider