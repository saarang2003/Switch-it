import React from 'react'
import Wrapper from './Wrapper'

function Input() {
  return (
    <Wrapper>
      <div className="w-full max-w-sm min-w-[200px]  px-2 py-1 rounded-xl shadow-xl bg-base-200">
        <div className="mx-3 my-2">
          <div className="relative">
            <input
              type="email"
              className="w-full bg-transparent placeholder:text-neutral-content text-base-content text-sm border border-base-300 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-base-400 hover:border-base-300 shadow-sm focus:shadow"
              placeholder="Email Address"
            />
            <button
              className="absolute right-1 top-1 rounded bg-base-content py-1 px-2.5 border border-transparent text-center text-sm text-primary-content transition-all shadow-sm hover:shadow focus:bg-primary focus:shadow-none active:bg-primary hover:bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Invite
            </button>
          </div>
        
        </div>
      </div>

    </Wrapper>
  )
}

export default Input
