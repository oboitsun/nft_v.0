import React, { Component } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function WhatIsOrigins() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const move = {
    visible: { x: 0, opacity: 1 },
    hidden: { opacity: 0, x: '-90%' },
  }
  const move2 = {
    visible: { x: 0, opacity: 1 },
    hidden: { opacity: 0, x: '90%' },
  }
  return (
    <section className='flex justify-center  items-center text-white font-mont pb-10 md:pb-16 lg:pb-24  xl:pb-36 2xl:pb-44 md:px-5 lg:px-10 xl:px-36'>
      <motion.div
        key={2}
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        variants={move}
        className=' sm:w-2/3 xl:w-3/4  flex-shrink flex flex-col items-start  float-left'>
        <h3 className='text-2xl md:text-4xl  2xl:text-6xl xl:pb-4 font-extrabold text-turq uppercase leading-snug'>
          What is origins
        </h3>
        <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl flex flex-col text-left whitespace-pre-line leading-tight'>
          <span>
            A new type of
            <span className='font-extrabold text-gold leading-none'> NFT marketplace</span>
          </span>
          <span>
            {` catered to you, the user.`}
            <br className='hidden lg:flex' />
            {` Follow creators, friends,`}
            <br className='hidden lg:flex' />
            {` and categories to make sure`}
            <br className='hidden lg:flex' />
            {` you never miss out on a drop!`}
            <br className='hidden lg:flex' />
            {` Tackle this new world of`}
            <br className='hidden lg:flex' />
            {` virtual collectibles `}
            <span className='italic text-gold'>your way</span>.
          </span>
        </p>
      </motion.div>
      <motion.div
        animate={controls}
        initial='hidden'
        transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
        variants={move2}
        className='hidden sm:flex flex-shrink sm:w-1/3 lg:w-1/4  '>
        <svg className='w-full ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 442.19 427.49'>
          <defs>
            <style>{`.cls-1{isolation:isolate;}.cls-2{opacity:0.8;mix-blend-mode:color-dodge;}.cls-3{fill:#0af;}`}</style>
          </defs>
          <g className='cls-1'>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_2-2' data-name='Layer 2'>
                <g className='cls-2'>
                  <path
                    className='cls-3'
                    d='M433.68,201.16H170.05a8.51,8.51,0,0,0,0,17H433.68a8.51,8.51,0,1,0,0-17Z'
                  />
                  <path
                    className='cls-3'
                    d='M170.05,73.6H433.68a8.51,8.51,0,1,0,0-17H170.05a8.51,8.51,0,0,0,0,17Z'
                  />
                  <path
                    className='cls-3'
                    d='M128.72,187.89,92,182.54,75.66,149.28a8.51,8.51,0,0,0-15.22,0L44,182.54,7.28,187.89a8.51,8.51,0,0,0-4.67,14.55L29.14,228l-6.29,36.57a8.51,8.51,0,0,0,12.33,8.93l32.82-17,32.83,17a8.5,8.5,0,0,0,12.33-8.93L106.87,228l26.53-25.51a8.51,8.51,0,0,0-4.68-14.55Z'
                  />
                  <path
                    className='cls-3'
                    d='M128.72,43.32,92,38,75.66,4.71a8.5,8.5,0,0,0-15.22,0L44,38,7.28,43.32A8.5,8.5,0,0,0,2.61,57.86L29.14,83.38l-6.29,36.56a8.5,8.5,0,0,0,12.33,8.93l32.82-17,32.83,17a8.5,8.5,0,0,0,12.33-8.93l-6.29-36.56L133.4,57.86a8.5,8.5,0,0,0-4.68-14.54Z'
                  />
                  <path
                    className='cls-3'
                    d='M128.72,341,92,335.61,75.66,302.36a8.5,8.5,0,0,0-15.22,0L44,335.61,7.28,341a8.5,8.5,0,0,0-4.67,14.54L29.14,381l-6.29,36.57a8.51,8.51,0,0,0,12.33,8.93l32.82-17,32.83,17a8.5,8.5,0,0,0,12.33-8.93L106.87,381l26.53-25.51A8.5,8.5,0,0,0,128.72,341Z'
                  />
                  <path
                    className='cls-3'
                    d='M433.68,354.23H170.05a8.51,8.51,0,0,0,0,17H433.68a8.51,8.51,0,1,0,0-17Z'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
    </section>
  )
}
