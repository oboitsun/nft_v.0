import React, { Component } from 'react'

export default class WhyShould extends Component {
  render() {
    return (
      <section className='font-mont relative text-white flex pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-44'>
        <div className='empty hidden md:flex flex-shrink w-0 md:w-1/12 2xl:w-1/6'></div>
        <div className='flex-col flex flex-grow w-full  max-w-7xl items-start z-1 px-2 sm:px-6'>
          <h3 className='uppercase text-turq font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl pb-4 z-1'>
            Why should i buy one
          </h3>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-left pb-4  md:pb-8 lg:pb-14 z-1'>
            Buy to collect, buy to invest,
            <br /> buy to show off - the choice is yours.
          </p>
          <p className='text-xl sm:text-3xl lg:text-5xl text-left leading-tight tracking-tight z-1 '>
            Just like regular collectibles,
            <br /> NFTs gain their value through
            <br /> <span className='text-gold'>popularity</span> and{' '}
            <span className='text-gold'>scarcity</span>.
            <br /> The more desirable something is,
            <br /> the more its worth - and the blockchain
            <br /> guarantees that <span className='text-gold'>fakes</span> and{' '}
            <span className='text-gold'>forgery</span>
            <br /> <span className='text-gold'>will never devalue your NFTs</span>.
          </p>
          <div className='sm:opacity-50 absolute lg:bottom-10%  lg:right-40 w-1/2  lg:w-5/12 z-0 '>
            <svg className='w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 717.38 717.38'>
              <defs>
                <style>{`.cls-why{fill:none;stroke:#36367f;stroke-miterlimit:10;stroke-width:3px;}`}</style>
              </defs>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_2-2' data-name='Layer 2'>
                  <path
                    className='cls-why'
                    d='M703.56,321.74H654.3A12.33,12.33,0,0,0,642,334.06v12.31H469.54V309.42a12.51,12.51,0,0,0-1.11-4.85,10.18,10.18,0,0,0-.66-1.21,11.6,11.6,0,0,0-2.42-3c-.22-.19-.32-.49-.54-.66s-.27-.1-.37-.18a12.08,12.08,0,0,0-4.21-2.06l-.44-.1h0L371,275.18V75.4h12.31a12.33,12.33,0,0,0,12.32-12.32V13.82A12.33,12.33,0,0,0,383.32,1.5H334.06a12.33,12.33,0,0,0-12.32,12.32V63.08A12.33,12.33,0,0,0,334.06,75.4h12.31V275.18l-88.75,22.2a.12.12,0,0,0-.08,0l-.39.1a12.1,12.1,0,0,0-4.21,2.07c-.13.07-.27.1-.37.17s-.32.47-.54.67a14.56,14.56,0,0,0-3.08,4.18,12.33,12.33,0,0,0-1.11,4.83v36.95H75.4V334.06a12.33,12.33,0,0,0-12.32-12.32H13.82A12.33,12.33,0,0,0,1.5,334.06v49.26a12.33,12.33,0,0,0,12.32,12.32H63.08A12.33,12.33,0,0,0,75.4,383.32V371H247.84V408a12.33,12.33,0,0,0,9.33,12l89.2,22.29V642H334.06a12.33,12.33,0,0,0-12.32,12.32v49.26a12.33,12.33,0,0,0,12.32,12.32h49.26a12.33,12.33,0,0,0,12.32-12.32V654.3A12.33,12.33,0,0,0,383.32,642H371V442.2l89.2-22.29a12.33,12.33,0,0,0,9.33-12V371H642v12.31a12.33,12.33,0,0,0,12.32,12.32h49.26a12.33,12.33,0,0,0,12.32-12.32V334.06A12.33,12.33,0,0,0,703.56,321.74ZM346.37,26.13H371V50.77H346.37ZM50.77,371H26.13V346.37H50.77ZM371,691.25H346.37V666.61H371ZM358.69,297.5l47.74,11.92-47.74,11.93L311,309.42Zm-86.22,27.71,73.9,18.48v73.14l-73.9-18.48Zm172.44,73.12L371,416.8V343.66l73.9-18.47ZM691.25,371H666.61V346.37h24.64Z'
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
    )
  }
}
