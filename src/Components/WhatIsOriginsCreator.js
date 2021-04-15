import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function WhatIsOriginsCreator() {
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
    <section className='flex justify-center relative  items-center text-white font-mont pb-10 md:pb-16 lg:pb-24  xl:pb-36 2xl:pb-44 md:px-16 lg:px-28 xl:px-36 w-full overflow-hidden'>
      <motion.div
        key={2}
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        variants={move}
        className='z-1 max-w-prose lg:max-w-full lg:w-full  flex-shrink flex flex-col items-start  '>
        <h3 className='text-2xl md:text-4xl  2xl:text-6xl xl:pb-4 font-extrabold text-turq uppercase leading-snug'>
          What is origins
        </h3>
        <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl flex flex-col text-left whitespace-pre-line leading-tight pb-10'>
          <span>
            A new type of
            <span className=' text-gold leading-none'> NFT marketplace</span>
          </span>
          <span>
            catered to you, the <span className='font-bold text-gold'>creator</span>.<br />{' '}
            <span className='text-gold'>Customize</span> your profile, your auction pages,
            <br /> and how your NFTs are displayed to your followers.
          </span>
        </p>
        <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl flex flex-col text-left whitespace-pre-line leading-tight'>
          We help you promote your unique persona,
          <br /> maintain your online identity, and sell your unique NFTs.
          <br /> Our platform is easy to use and gives you a new way <br />
          to market yourself and sell your content.
        </p>
      </motion.div>
      <motion.div
        animate={controls}
        initial='hidden'
        transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
        variants={move2}
        className='z-0 hidden sm:flex absolute top-0 right-auto transform   md:top-0 lg:right-10%  flex-shrink sm:w-1/3 lg:w-1/4  lg:h-1/3 '>
        <svg
          className='w-full opacity-40 lg:opacity-100'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 218.4 275.87'>
          <defs>
            <style>{`.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:url(#linear-gradient-7);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-101{fill:url(#linear-gradient-10);}.cls-11{fill:url(#linear-gradient-11);}.cls-12{fill:url(#linear-gradient-12);}.cls-13{fill:url(#linear-gradient-13);}.cls-14{fill:url(#linear-gradient-14);}`}</style>
            <linearGradient
              id='linear-gradient'
              x1='113.94'
              y1='1.35'
              x2='104.46'
              y2='27.38'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#f9d885' />
              <stop offset='1' stopColor='#dd406d' />
            </linearGradient>
            <linearGradient
              id='linear-gradient-2'
              x1='65.65'
              y1='16.44'
              x2='57.91'
              y2='37.7'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-3'
              x1='29.55'
              y1='54.96'
              x2='24.59'
              y2='68.61'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-4'
              x1='17.34'
              y1='101.03'
              x2='11.39'
              y2='117.37'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-5'
              x1='31.3'
              y1='144.99'
              x2='22.84'
              y2='168.24'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-6'
              x1='161.49'
              y1='13.67'
              x2='151.74'
              y2='40.47'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-7'
              x1='195.61'
              y1='50.15'
              x2='187.15'
              y2='73.4'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-8'
              x1='207.01'
              y1='101.03'
              x2='201.06'
              y2='117.37'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-9'
              x1='193.81'
              y1='149.79'
              x2='188.85'
              y2='163.44'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-10'
              x1='111.71'
              y1='253.27'
              x2='103.79'
              y2='275.02'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-11'
              x1='115.85'
              y1='191.52'
              x2='102.55'
              y2='228.04'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-12'
              x1='115.85'
              y1='220.25'
              x2='102.55'
              y2='256.78'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-13'
              x1='114.29'
              y1='104.26'
              x2='104.1'
              y2='132.27'
              xlinkHref='#linear-gradient'
            />
            <linearGradient
              id='linear-gradient-14'
              x1='130.92'
              y1='49.77'
              x2='79.04'
              y2='192.32'
              xlinkHref='#linear-gradient'
            />
          </defs>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_2-2' data-name='Layer 2'>
              <path
                className='cls-1'
                d='M115,23V5.75a5.75,5.75,0,0,0-11.5,0V23A5.75,5.75,0,0,0,115,23Z'
              />
              <path
                className='cls-2'
                d='M61.09,37.42a5.77,5.77,0,0,0,10-5.75h0l-8.62-15a5.77,5.77,0,0,0-10,5.75Z'
              />
              <path
                className='cls-3'
                d='M37.42,61.09l-15-8.62a5.77,5.77,0,0,0-5.75,10l15,8.62a5.77,5.77,0,0,0,5.75-10Z'
              />
              <path
                className='cls-4'
                d='M23,103.45H5.75a5.75,5.75,0,0,0,0,11.5H23a5.75,5.75,0,0,0,0-11.5Z'
              />
              <path
                className='cls-5'
                d='M31.67,147.31l-15,8.62a5.77,5.77,0,0,0,5.75,10l15-8.62a5.77,5.77,0,0,0-5.75-10Z'
              />
              <path
                className='cls-6'
                d='M157.31,37.42l8.62-15a5.77,5.77,0,0,0-10-5.75l-8.62,15a5.77,5.77,0,0,0,10,5.75Z'
              />
              <path
                className='cls-7'
                d='M183.92,71.84c2.06,0,1.38,0,17.81-9.37a5.77,5.77,0,0,0-5.74-10l-15,8.62a5.75,5.75,0,0,0,2.88,10.75Z'
              />
              <path
                className='cls-8'
                d='M212.65,103.45H195.41a5.75,5.75,0,0,0,0,11.5h17.24a5.75,5.75,0,0,0,0-11.5Z'
              />
              <path
                className='cls-9'
                d='M201.68,155.93l-15-8.62a5.77,5.77,0,0,0-5.75,10l15,8.62a5.77,5.77,0,0,0,5.75-10Z'
              />
              <path
                className='cls-101'
                d='M109.2,275.87a17.24,17.24,0,0,0,17.24-17.24H92A17.24,17.24,0,0,0,109.2,275.87Z'
              />
              <path
                className='cls-11'
                d='M140.81,201.16H77.59a8.62,8.62,0,0,0,0,17.24h63.22a8.62,8.62,0,0,0,0-17.24Z'
              />
              <path
                className='cls-12'
                d='M140.81,229.89H77.59a8.63,8.63,0,0,0,0,17.25h63.22a8.63,8.63,0,0,0,0-17.25Z'
              />
              <path
                className='cls-13'
                d='M109.19,103.36a14.91,14.91,0,1,0,14.9,14.9A14.9,14.9,0,0,0,109.19,103.36Z'
              />
              <path
                className='cls-14'
                d='M172.25,101.5A63.38,63.38,0,1,0,57,144.89a100,100,0,0,1,17.25,45.69c4-1.26,5.74-.92,23-.92h24.31c17.24,0,18.85,0,23,.92C149.6,147.59,176.9,140.18,172.25,101.5Zm-25.88,16.76v2.66l-10.28,1.55a26.87,26.87,0,0,1-1.5,5.6l8.13,6.47-2.67,4.62-9.68-3.8a27.68,27.68,0,0,1-4.08,4.09l3.8,9.67-4.61,2.67L119,143.66a26.34,26.34,0,0,1-5.59,1.5l-1.55,10.27h-5.32L105,145.16a26.27,26.27,0,0,1-5.6-1.5l-6.47,8.13-4.62-2.67,3.81-9.67a27.34,27.34,0,0,1-4.1-4.09l-9.67,3.8-2.67-4.62,8.12-6.47a27.64,27.64,0,0,1-1.48-5.6L72,120.94v-5.35l10.28-1.54a27.37,27.37,0,0,1,1.48-5.59L75.67,102l2.67-4.61,9.67,3.8a26.88,26.88,0,0,1,4.1-4.09L88.3,87.41l4.62-2.67,6.47,8.12a27.5,27.5,0,0,1,5.6-1.5l1.55-10.28h5.32l1.55,10.28a27.59,27.59,0,0,1,5.59,1.5l6.48-8.12,4.61,2.67-3.8,9.67a27.2,27.2,0,0,1,4.08,4.09l9.68-3.8,2.67,4.61-8.13,6.48a26.78,26.78,0,0,1,1.5,5.59l10.28,1.54Z'
              />
            </g>
          </g>
        </svg>
      </motion.div>
    </section>
  )
}
