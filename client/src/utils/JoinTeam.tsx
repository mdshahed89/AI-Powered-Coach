import Link from 'next/link'
import React from 'react'

const JoinTeam = () => {
  return (
    <div className=' max-w-[1400px] mx-auto px-3 bg-gradient-to-r from-[#103580] to-[#004FCE] py-[4rem] rounded-2xl '>
        <div className=' text-[#fff] space-y-3 text-center font-Manrope '>
        <h2 className=' text-[2rem] leading-tight '>Ready to Hire Smarter?</h2>
        <p className=' text-sm text-[#b9bdc7] '>Unlock Exclusive Insights Subscribe to Our Newsletter</p>
        </div>
        <div className=' flex justify-center mt-[2rem] '>
        <Link href={`/`} className=' bg-[#FCE38A] px-8 py-3 rounded-full '>Join Now</Link>
        </div>
    </div>
  )
}

export default JoinTeam