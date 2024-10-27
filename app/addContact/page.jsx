'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

function page() {
  const Router = useRouter();
  return (
    <div className='w-[90%] md:w-[30rem] mx-auto my-[5rem] border border-gray-500 bg-white/10 rounded-md p-6'>
      <button onClick={()=> Router.push('/')} className='bg-blue-600/50 hover:bg-blue-700/50 px-2 py-3 rounded-md absolute left-12 top-12'>Go Back</button>
    </div>
  )
}

export default page