import React from 'react'
import MessageComponent from '../Message/MessageComponent'
import Search from './Search'

function Contacts() {
  return (
    <div>
        <div className='w-[470px] min-h-screen rounded-2xl bg-[#F3F3F3]'>
            <div className='p-5'>
                <Search />
            </div>
            <div className=''>
                <MessageComponent />
                <MessageComponent />
                <MessageComponent />
                <MessageComponent />
            </div>
            
        </div>
    </div>
  )
}

export default Contacts