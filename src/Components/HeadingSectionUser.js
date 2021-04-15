import React, { Component } from 'react'
import { motion } from 'framer-motion'
import SignUp from './SignUp'
export default class HeadingSectionUser extends Component {
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
      <section className='max-h-screen py-10  lg:py-8 lg:pt-12 xl:pt-14 2xl:pt-36 lg:pb-36 text-white flex flex-col justify-between  items-center'>
        <motion.h1
          variants={container}
          initial='hide'
          animate='show'
          style={{ lineHeight: '85%' }}
          className='flex flex-col items-start  text-4xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-150 2xl:text-180 tracking-tight font-semibold'>
          <motion.span
            variants={item}
            className='text-gold font-extrabold text-left md:text-center tracking-wide '>
            <span className='tracking-tight'>N</span>FT
            <span className='relative 2xl:-left-3'>s</span>
          </motion.span>
          <motion.span variants={item} className='text-left md:text-center tracking-tighter  '>
            have never been
          </motion.span>
          <motion.span variants={item} className='text-left md:text-center tracking-tighter '>
            more accessible.
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
