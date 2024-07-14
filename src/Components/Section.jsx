import React from 'react'

const Section = ({children, className,id}) => {
  return (
    <div className={`${className ? className:''} text-white w-full bg-zinc-800 `} id={id}>
        {children}
    </div>
  )
}

export default Section