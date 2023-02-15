import React from 'react'

const Button = ({children, onChange}) => {
  return (
    <button onChange={onChange}>
      {children}
    </button>
  )
}
export default Button;