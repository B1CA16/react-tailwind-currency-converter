import React from 'react'

const InputAmount = () => {
  return (
    <div className="relative">
      <input
        className='outline-none dark:bg-neutral-900 pl-7 p-3 rounded-lg dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 w-full'
        type="number"
        placeholder='Amount'
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none">$</span>
    </div>
  )
}

export default InputAmount
