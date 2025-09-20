import React from 'react'

const PatientTabs = () => {
  return (
    <>
      <div className='flex gap-4 flex-wrap pt-4'>
        <button className='bg-[var(--primary-color)] text-white px-4 py-2.5 rounded-lg lora lg:text-[16px]'>Medical Consultation</button>
        <button className='bg-[var(--primary-color)] text-white px-4 py-2.5 rounded-lg lora lg:text-[16px]'>Video Consultation</button>
        <button className='bg-[var(--primary-color)] text-white px-4 py-2.5 rounded-lg lora lg:text-[16px]'>SOS Response</button>
        <button className='bg-[var(--primary-color)] text-white px-4 py-2.5 rounded-lg lora lg:text-[16px]'>Treatment Plan</button>
        <button className='bg-[var(--primary-color)] text-white px-4 py-2.5 rounded-lg lora lg:text-[16px]'>Action</button>
      </div>
    </>
  )
}

export default PatientTabs
