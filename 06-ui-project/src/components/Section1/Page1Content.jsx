import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='px-18  flex gap-10 h-[90vh]  py-10'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content