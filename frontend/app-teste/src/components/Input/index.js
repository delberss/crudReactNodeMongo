import React from 'react'

const Input = ({onChange, name, placeholder, required,type }) => {
  return (
    <input 
        onChange={onChange} 
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}/>
  )
}
export default Input;