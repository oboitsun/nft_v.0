import React, { Component } from 'react'

export default class HowTo extends Component {
  render() {
    return (
      <section className='font-mont relative text-white flex justify-end lg:mr-10 py-5 lg:py-10 2xl:pt-24 2xl:pb-20'>
        <div className='absolute top-1/2 transform lg:transform-none -translate-y-1/2 left-1/2 -translate-x-1/2 lg:top-15% 2xl:top-0 lg:left-10% md:w-1/4 lg:w-1/3 '>
          <svg
            className='md:w-full lg:w-2/3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 391.9 505.07'>
            <defs>
              <style>{`.cls-1001{opacity:0.1;}.cls-2002{fill:#fff;}`}</style>
            </defs>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_2-2' data-name='Layer 2'>
                <g className='cls-1001'>
                  <path
                    className='cls-2002'
                    d='M168.36,263q15.34-22.69,44.7-49.95,20.26-18.85,30-31.78t9.78-27.59q0-20.26-17.11-32.49T191.41,109q-27.94,0-50.65,13.27a101.72,101.72,0,0,0-36.67,37L0,103.39Q28.64,54.51,81,27.24T207.48,0q83.11,0,133.77,34.58t50.65,96.75q0,28.65-9.78,50.65t-23.4,37a426.05,426.05,0,0,1-35.28,33.88q-23.76,20.28-34.93,34.58a52.37,52.37,0,0,0-11.18,33.18H153Q153,285.72,168.36,263Zm-9.78,220.75q-22.37-21.3-22.36-52,0-31.44,22-51.7t56.93-20.26q34.92,0,57.28,20.26t22.36,51.7q0,30.73-22.36,52t-57.28,21.31Q180.93,505.07,158.58,483.76Z'
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className='max-w-1380 w-full flex flex-col items-center xl:flex-row xl:justify-between'>
          <div className='flex flex-col   text-xl sm:text-3xl md:text-4xl lg:text-5xl text-left tracking-tighter'>
            <h3 className=' text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-turq uppercase leading-tight '>
              how to get started
            </h3>
            <p className='pb-4 md:pb-16 lg:pb-32'>
              All you need to do to get started
              <br />
              is to make an account.
              <br />
              Click the sign up button
              <br />
              and you’ll be on your way!
            </p>
            <p className=''>
              To bid on NFTs you’ll need to set up
              <br />a wallet but well get to that later!
            </p>
          </div>
          <div className='px-10 flex  flex-shrink justify-center items-center'>
            <button className='font-mont text-gold font-extrabold text-2xl md:text-3xl lg:text-5xl py-4 px-6 md:px-12 lg:px-24 bg-btnred rounded-full mt-4  md:mt-12 lg:mt-24 uppercase'>
              sign up
            </button>
          </div>
        </div>
      </section>
    )
  }
}
