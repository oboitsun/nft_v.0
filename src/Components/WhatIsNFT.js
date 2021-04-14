import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function WhatIsNFT() {
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
          viewBox='0 0 201.12 201.12'>
          <defs>
            <style>{`.cls-10{fill:none;stroke:#dd406d;stroke-miterlimit:10;stroke-width:2px;}`}</style>
          </defs>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_2-2' data-name='Layer 2'>
              <path
                className='cls-10'
                d='M39.85,180.69H76.28v9.72H39.85Zm85,9.72h36.43v-9.72H124.84Zm-19.42-29.14V98.13H95.7v63.14Zm68-72.85H27.71V1h145.7ZM86,20.43a4.88,4.88,0,0,0-4.86-4.86h-34a4.88,4.88,0,0,0-4.86,4.86v34a4.88,4.88,0,0,0,4.86,4.86h34A4.88,4.88,0,0,0,86,54.42ZM158.84,69A4.87,4.87,0,0,0,154,64.14H105.42a4.86,4.86,0,1,0,0,9.71H154A4.88,4.88,0,0,0,158.84,69Zm0-24.28A4.88,4.88,0,0,0,154,39.85H105.42a4.86,4.86,0,0,0,0,9.72H154A4.88,4.88,0,0,0,158.84,44.71Zm0-24.28A4.88,4.88,0,0,0,154,15.57H105.42a4.86,4.86,0,1,0,0,9.71H154A4.87,4.87,0,0,0,158.84,20.43ZM52,49.57H76.28V25.28H52ZM86,200.12h29.14V171H86Zm-85,0H30.14V171H1ZM171,171v29.14h29.14V171Z'
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
