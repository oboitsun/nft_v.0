import React, { Component } from 'react'
import { motion } from 'framer-motion'
export default class HeadingSection extends Component {
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
      <section className='max-h-screen py-10 md:py-16 lg:py-8 lg:pt-12 xl:pt-14 2xl:pt-36 lg:pb-36 text-white flex flex-col justify-between  items-center'>
        <motion.h1
          variants={container}
          initial='hide'
          animate='show'
          style={{ lineHeight: '85%' }}
          className='flex flex-col items-start  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-150 2xl:text-180 tracking-tight font-semibold'>
          <motion.span
            variants={item}
            className='text-gold font-extrabold text-left md:text-center tracking-tighter '>
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
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className='font-mont text-gold font-extrabold  py-6 px-24 bg-btnred rounded-full mt-10 xl:mt-8 2xl:mt-16 sm:text-sm md:text-sm lg:text-xl 2xl:text-5xl leading-none uppercase'>
          sign up
        </motion.button>
      </section>
    )
  }
}
