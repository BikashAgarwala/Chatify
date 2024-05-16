import React from 'react'
import QuestionLabel from '../Label/QuestionLabel'
import HelpWantedLabel from '../Label/HelpWantedLabel'
import SomeContent from '../Label/SomeContent'

function MessageComponent() {
  return (
    <div className=' hover:bg-[#615EF0]/10 active:bg-[#615EF0]/10 p-[16px] m-5 rounded-2xl w-[24vw]'>
        <div className='flex gap-[18px]'>
            <div>
                <img src="" alt="" className=' h-[56px] w-[56px] bg-[#D8D8D8] rounded-xl' />
            </div> 
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className=' text-[16px] font-bold'>Full Name here</div>
                    <div className='text-[14px] text-[#000000]/40 self-end'>12m</div>
                </div>
                
                <div className='text-[14px] text-[#000000]/40'>Enter your message here</div>
                <div className='flex gap-[14px] mt-[14px]'>
                    <QuestionLabel />
                    <HelpWantedLabel />
                    {/* <SomeContent /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageComponent