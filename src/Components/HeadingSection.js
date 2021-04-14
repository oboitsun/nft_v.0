import React, { Component } from 'react'

export default class HeadingSection extends Component {
  render() {
    return (
      <section className=' py-10 md:py-16 lg:py-10 2xl:py-32 lg:pb-44 text-white flex flex-col  items-center'>
        <h1 className='flex flex-col items-start  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-180 leading-none tracking-tight font-semibold'>
          <span className='text-gold font-extrabold tracking-wider  text-left md:text-center'>
            <span className='tracking-tight'>N</span>FT
            <span className='relative 2xl:-left-3'>s</span>
          </span>
          <span className='text-left md:text-center'>have never been</span>
          <span className='text-left md:text-center'>more accessible.</span>
        </h1>
        <button className='font-mont text-gold font-extrabold  py-6 px-24 bg-btnred rounded-full mt-10 lg:mt-12 2xl:mt-24  sm:text-sm md:text-sm lg:text-xl 2xl:text-5xl leading-none uppercase'>
          sign up
        </button>
      </section>
    )
  }
}
