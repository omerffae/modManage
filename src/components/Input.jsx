
import React from 'react'

const Input = ({value,type,placeholder,id,name,onChange}) => {
  return (
    <div>
      <input value={value} className='h-10 w-full border rounded-md p-2 outline-none mt-3 '
      type={type} placeholder={placeholder} id={id} name={name} onChange={onChange}/>
    </div>
  )
}

export default Input;
