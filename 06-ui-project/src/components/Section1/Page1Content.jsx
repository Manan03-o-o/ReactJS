import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='px-18  flex justify-between items-center h-[90vh] bg-amber-900 py-10'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content