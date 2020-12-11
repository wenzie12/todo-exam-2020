import React from 'react'

const CustomButton = ({ children, className, ...otherProps }) => {
  return (
    <button className={className} {...otherProps}>
      { children }
    </button>
  )
}

export default CustomButton
