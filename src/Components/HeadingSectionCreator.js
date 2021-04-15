import React, { Component } from 'react'
import { motion } from 'framer-motion'
import SignUp from './SignUp'
export default class HeadingSectionCreator extends Component {
  render() {
    const container = {
      hide: {},
      show: { transition: { delay: 0.2, staggerChildren: 0.4 } },
    }
    const item = {
      hide: { opacity: 0, y: '-100%' },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }
    return (
      <section className='xl:h-90vh py-10 lg:py-14 lg:pt-12 xl:pt-24 2xl:pt-36  text-white flex flex-col lg:justify-center xl:justify-start items-center'>
        <motion.h1
          variants={container}
          initial='hide'
          animate='show'
          style={{ lineHeight: '85%' }}
          className='flex flex-col items-start  text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-150 tracking-tight font-semibold'>
          <motion.span
            variants={item}
            className='text-gold font-extrabold text-left md:text-center tracking-wide '>
            <span className='text-white font-semibold'>Mint </span>
            <span className='tracking-tight'>N</span>FT
            <span className='relative 2xl:-left-3'>s</span>
          </motion.span>
          <motion.span variants={item} className='text-left md:text-center tracking-tighter  '>
            without sacrificing
          </motion.span>
          <motion.span variants={item} className='text-left md:text-center tracking-tighter '>
            your digital brand.
          </motion.span>
        </motion.h1>
        <motion.div
          className='mt-5 xl:mt-8 2xl:mt-16'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}>
          <SignUp />
        </motion.div>
      </section>
    )
  }
}
