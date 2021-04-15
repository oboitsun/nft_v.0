import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function WhatIsNFTCreator() {
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
    visible: {
      scale: [1, 1, 1],
      x: [0, -2, 2, 0],
      y: [0, -2, 2, 0],
      transition: {
        delay: 0,
        repeatDelay: 0.5,
        repeatType: 'loop',
        repeat: 'Infinity',
        ease: 'easeOut',
        duration: 2,
      },

      hidden: { opacity: 0, x: '90%' },
    },
  }
  return (
    <section className='font-mont text-white relative py-20 pb-44 '>
      <div className='absolute opacity-30 lg:opacity-60 2xl:opacity-100   md:w-40 md:h-40  2xl:w-52 2xl:h-52  lg:top-10% 2xl:top-0  lg:left-10% z-0'>
        <motion.svg
          animate={controls}
          initial='hidden'
          variants={move2}
          className='w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 220.04 220.04'>
          <defs>
            <style>{`.cls-1{fill:none;stroke:#dd406d;stroke-miterlimit:10;stroke-width:2px;}`}</style>
          </defs>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_2-2' data-name='Layer 2'>
              <path
                className='cls-1'
                d='M49.45,44.61H97.91a4.85,4.85,0,0,0,0-9.69H49.45a4.85,4.85,0,0,0,0,9.69Z'
              />
              <path
                className='cls-1'
                d='M30.07,68.84h87.22a4.85,4.85,0,0,0,0-9.7H30.07a4.85,4.85,0,0,0,0,9.7Z'
              />
              <path
                className='cls-1'
                d='M30.07,93.06h87.22a4.85,4.85,0,1,0,0-9.69H30.07a4.85,4.85,0,0,0,0,9.69Z'
              />
              <path
                className='cls-1'
                d='M214.2,88.22H202.08V54.3h7.27a4.86,4.86,0,0,0,4.85-4.85V25.23a4.86,4.86,0,0,0-4.85-4.85h-7.27V5.85a4.85,4.85,0,1,0-9.69,0V20.38h-7.26a4.86,4.86,0,0,0-4.85,4.85V49.45a4.86,4.86,0,0,0,4.85,4.85h7.26V88.22H180.28a4.87,4.87,0,0,0-4.85,4.84v12.12H151.21V5.85A4.86,4.86,0,0,0,146.36,1H5.85A4.86,4.86,0,0,0,1,5.85V192.39a4.86,4.86,0,0,0,4.85,4.85H122.14a4.82,4.82,0,0,0,3.39-1.45l24.22-24.23a4.79,4.79,0,0,0,1.46-3.39v-53.3h24.22V127a4.87,4.87,0,0,0,4.85,4.85h12.11v33.91h-7.26a4.86,4.86,0,0,0-4.85,4.85v24.23a4.86,4.86,0,0,0,4.85,4.84h7.26V214.2a4.85,4.85,0,0,0,9.69,0V199.66h7.27a4.86,4.86,0,0,0,4.85-4.84V170.59a4.86,4.86,0,0,0-4.85-4.85h-7.27V131.83H214.2A4.86,4.86,0,0,0,219,127V93.06A4.86,4.86,0,0,0,214.2,88.22Zm-92.06,97.39V168.17h17.44Zm19.38-27.13H117.29a4.86,4.86,0,0,0-4.85,4.84v24.23H10.69V10.69H141.52ZM190,44.61V30.07h14.54V44.61Zm14.54,130.82V190H190V175.43Zm4.84-53.29H185.13V97.91h24.22Z'
              />
            </g>
          </g>
        </motion.svg>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        variants={move}
        className='flex flex-col items-center z-2'>
        <h3 className='text-gold uppercase font-extrabold text-2xl md:text-4xl lg:text-6xl 2xl:text-90 z-2 '>
          Whats an nft?
        </h3>
        <div className=' flex flex-col text-2xl md:text-4xl lg:text-5xl 2xl:text-5xl italic z-2 tracking-tighter'>
          <span className='z-2'>
            An NFT<span className='not-italic '> (or Non Fungible Token)</span>
          </span>
          <span className='z-2'>
            can be thought of as a{' '}
            <span className='text-turq font-bold not-italic z-2'>digital collectible</span>.
          </span>
          <span className='z-2'>
            A unique piece of data, <span className='font-bold not-italic z-2'>backed </span>
            and <span className='font-bold not-italic z-2'>authenticated</span>
          </span>
          <span className='z-2'>through our blockchain technology,</span>
          <span className='z-2'>
            that can be <span className='font-bold not-italic'>owned</span>,
            <span className='font-bold not-italic z-2'> sold</span>, or
            <span className='font-bold not-italic z-2'> traded</span>.
          </span>
        </div>
      </motion.div>
    </section>
  )
}
