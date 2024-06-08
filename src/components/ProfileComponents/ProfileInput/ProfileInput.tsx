import React, { ChangeEvent } from 'react'

interface ProfileInputProps {
    disabled: boolean,
    value: string,
    type: string,
    placeholder: string | null,
    name: string,
    id: string,
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
}

const ProfileInput = ({disabled, value, type, placeholder, name, id, onChange} : ProfileInputProps) => {
  return (
    <div className="w-full focus-within:bg-strokeBlue bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0.1)] text-white p-[1px] rounded-[35px]"> 
    <div className="bg-gradient-to-br text-sm from-[rgba(47,54,97,1)] to-[rgb(47,54,97)]  text-white rounded-[35px] transition-all">
            <input
            name={name}
            id={id}
            onChange={onChange}
            type={type}
            className='disabled:opacity-30 py-[6px] px-4 bg-gradient-to-br from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] w-full bg-transparent rounded-[35px] border-0 outline-none focus:outline-none transition-all'
            value={value}
            disabled={disabled}
            placeholder={placeholder ?? ""}
            />
    </div>
    </div>
  )
}

export default ProfileInput
