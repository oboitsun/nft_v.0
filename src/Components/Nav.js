import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className='w-full  flex justify-between items-center pb-7 text-xs border-b-30 border-gray-900 text-white'>
          <div className='flex flex-shrink logo w-20 sm:w-40 md:w-60 lg:w-80  '>LOGO</div>
          <div className='w-full  flex items-center justify-between bg-gradient-to-l from-lghtbl to-transparent h-24'>
            <button className='h-14 flex flex-shrink  w-20 sm:w-40 md:w-60 lg:w-80 justify-center items-center  py-4 mr-1   leading-none box-border border border-gold'>
              <span className='leading-none text-xs sm:text-base lg:text-xl 2xl:text-xl'>USER</span>
            </button>
            <button className='h-14 flex flex-shrink w-20 sm:w-40 md:w-60 lg:w-80 justify-center items-center py-4 ml-1  2xl:text-2xl bg-gold leading-none mr-auto'>
              <span className='leading-none text-xs sm:text-base md:text-xl 2xl:text-xxl'>
                Change to CREATOR
              </span>
            </button>
            <div className='flex flex-col h-20 justify-around flex-shrink pl-2 pr-2 md:pr-10   break-normal'>
              <button className='h-9 bg-btnred rounded px-2'>
                <span className='w-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-lg  px-2 md:px-5 lg:px-5 leading-none uppercase'>
                  sign up
                </span>
              </button>
              <button className='h-9 bg-btnred rounded '>
                <span className='leading-none text-xs sm:text-base lg:text-xl   uppercase'>
                  login
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
