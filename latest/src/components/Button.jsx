import React from 'react'

function Button({label, onClick ,className=""}) {
  return (
    <button
    className={`cursor-pointer px-5 py-2.5 border-2 border-accent h-full  flex item-center justify-center hover:bg-transparent hover:border-primary hover:text=primary rounded-full transition-all duration-300 ${className}`}
    onClick={onClick}>
        {label}
    </button>
    
      
  )
}
export default Button
