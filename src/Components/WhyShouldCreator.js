import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function WhyShouldCreator() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const move = {
    visible: { x: 0, opacity: 1 },
    hidden: { opacity: 0 },
  }
  const move2 = {
    visible: {
      scale: [1, 0.5, 1],
      rotate: [0, 30, 0],

      transition: {
        delay: 0,
        repeatDelay: 0.5,
        repeatType: 'mirror',
        repeat: 'Infinity',
        ease: 'easeOut',
        duration: 5,
      },

      hidden: { opacity: 0, x: '90%' },
    },
  }
  return (
    <section className='font-mont relative text-white flex justify-start px-2 pb-10 md:pb-16 lg:pb-24  xl:pb-36 2xl:pb-44 md:px-16 lg:px-24  w-full overflow-hidden'>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={move}
        className='flex-col flex flex-grow w-full m-auto  max-w-7xl items-start z-1 tracking-tighter'>
        <h3 className='w-full uppercase text-turq font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl pb-4 z-1 text-left'>
          WHY SHOULD I SELL ONE?
        </h3>
        <p className='text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-left pb-4  md:pb-8 lg:pb-14 z-1'>
          NFTs have never been
          <br />
          more profitable and
          <br />
          the industry is thriving.
          <br />
        </p>
        <p className='text-xl sm:text-3xl lg:text-5xl text-left leading-tight tracking-tight z-1 '>
          NFTs are a great way for you
          <br />
          to <span className='text-gold'>sell</span> your content in a{' '}
          <span className='text-gold'>new way</span>
          <br />
          and reach a <span className='text-gold'>bigger</span> audience.
        </p>
        <motion.div
          animate={controls}
          initial='hidden'
          variants={move2}
          className='sm:opacity-50 absolute top-0  right-0  w-1/3 z-0 '>
          <svg className='w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 508.72 508.68'>
            <defs>
              <style>{`.cls-b1{fill:none;stroke-width:1.47px;}.cls-b1,.cls-b2{stroke:#36367f;stroke-miterlimit:10;}.cls-b2,.cls-b3{fill:#36367f;}.cls-b2{stroke-width:0.8px;}`}</style>
            </defs>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_2-2' data-name='Layer 2'>
                <path
                  className='cls-b1'
                  d='M373.15,82.28a4.11,4.11,0,0,1-3.89-2.8l-7.66-23-14.86-7.43a4.1,4.1,0,0,1,0-7.33l14.69-7.35,7.74-30.93c.91-3.65,7-3.65,7.95,0l7.74,30.93,14.69,7.35a4.1,4.1,0,0,1,0,7.33L384.7,56.51l-7.66,23A4.11,4.11,0,0,1,373.15,82.28ZM357.73,45.41l9,4.53a4.15,4.15,0,0,1,2.06,2.37l4.31,12.92,4.3-12.92a4.15,4.15,0,0,1,2.06-2.37l9.06-4.53-9.05-4.53a4.07,4.07,0,0,1-2.15-2.67l-4.22-16.87-4.22,16.88a4.07,4.07,0,0,1-2.15,2.67Z'
                />
                <path
                  className='cls-b1'
                  d='M455.07,172.39a4.12,4.12,0,0,1-3.89-2.8l-7.66-23-14.86-7.43a4.09,4.09,0,0,1,0-7.32l14.7-7.35,7.73-30.94c.91-3.64,7-3.64,8,0l7.73,30.94,14.7,7.35a4.09,4.09,0,0,1,0,7.32l-14.86,7.43-7.66,23A4.11,4.11,0,0,1,455.07,172.39Zm-15.42-36.86,9.06,4.53a4.1,4.1,0,0,1,2.05,2.37l4.3,12.92,4.31-12.92a4.1,4.1,0,0,1,2.05-2.37l9.05-4.53L461.42,131a4.1,4.1,0,0,1-2.14-2.67l-4.22-16.88-4.22,16.88a4.12,4.12,0,0,1-2.15,2.67Z'
                />
                <path
                  className='cls-b1'
                  d='M266.65,221.55a4.11,4.11,0,0,1-3.89-2.8l-7.66-23-14.86-7.43a4.09,4.09,0,0,1,0-7.32l14.69-7.35,7.74-30.93c.91-3.65,7-3.65,7.95,0l7.74,30.93L293.05,181a4.09,4.09,0,0,1,0,7.32l-14.86,7.43-7.66,23A4.11,4.11,0,0,1,266.65,221.55Zm-15.42-36.87,9,4.53a4.12,4.12,0,0,1,2.06,2.37l4.3,12.92,4.3-12.92a4.15,4.15,0,0,1,2.06-2.37l9.05-4.53L273,180.15a4.12,4.12,0,0,1-2.15-2.67l-4.22-16.87-4.22,16.87a4.08,4.08,0,0,1-2.14,2.67Z'
                />
                <path
                  className='cls-b2'
                  d='M45.46,483.7a4.1,4.1,0,0,1-4.1-4.09V209.73a29,29,0,0,1,28.72-29.14h172a4.1,4.1,0,1,1,0,8.19h-172a20.76,20.76,0,0,0-20.53,20.95V479.61A4.09,4.09,0,0,1,45.46,483.7Z'
                />
                <path
                  className='cls-b2'
                  d='M463.27,483.7a4.09,4.09,0,0,1-4.1-4.09V250.22a4.1,4.1,0,1,1,8.19,0V479.61A4.09,4.09,0,0,1,463.27,483.7Z'
                />
                <path
                  className='cls-b2'
                  d='M479.67,508.28H29.06A28.69,28.69,0,0,1,.4,479.62a4.1,4.1,0,0,1,4.1-4.09l204.8,0v8.19h90.12a4.1,4.1,0,1,1,0-8.19H504.23a4.09,4.09,0,0,1,4.09,4.1A28.69,28.69,0,0,1,479.67,508.28Z'
                />
                <path
                  className='cls-b2'
                  d='M291.23,491.89H217.5a12.3,12.3,0,0,1-12.29-12.28,4.1,4.1,0,1,1,8.19,0,4.1,4.1,0,0,0,4.1,4.09h73.73a4.1,4.1,0,0,0,4.09-4.09,4.1,4.1,0,1,1,8.2,0A12.3,12.3,0,0,1,291.23,491.89Z'
                />
                <path
                  className='cls-b2'
                  d='M70,254.32a4.1,4.1,0,0,1-4.09-4.1v-41a4.1,4.1,0,0,1,4.09-4.1H324a4.1,4.1,0,0,1,0,8.2H74.13v36.86A4.1,4.1,0,0,1,70,254.32Z'
                />
                <path
                  className='cls-b2'
                  d='M438.69,459.12H70A4.09,4.09,0,0,1,65.94,455V364.91a4.1,4.1,0,0,1,8.19,0v86H434.59V250.22a4.1,4.1,0,1,1,8.19,0V455A4.09,4.09,0,0,1,438.69,459.12Z'
                />
                <path
                  className='cls-b2'
                  d='M504.23,254.32H324a4.1,4.1,0,0,1-4.1-4.1V151.91a4.09,4.09,0,0,1,4.1-4.09H449.61a4.1,4.1,0,0,1,0,8.19H328.09v90.11h172V156H460.54a4.1,4.1,0,1,1,0-8.19h43.69a4.09,4.09,0,0,1,4.09,4.09v98.31A4.1,4.1,0,0,1,504.23,254.32Z'
                />
                <path
                  className='cls-b1'
                  d='M340.38,131.43a12.29,12.29,0,1,1,12.29-12.29A12.31,12.31,0,0,1,340.38,131.43Zm0-16.38a4.1,4.1,0,1,0,4.1,4.09A4.11,4.11,0,0,0,340.38,115.05Z'
                />
                <path
                  className='cls-b1'
                  d='M160.15,156a12.29,12.29,0,1,1,12.29-12.29A12.3,12.3,0,0,1,160.15,156Zm0-16.39a4.1,4.1,0,1,0,4.1,4.1A4.12,4.12,0,0,0,160.15,139.62Z'
                />
                <path
                  className='cls-b1'
                  d='M238,90.47a16.39,16.39,0,1,1,16.38-16.38A16.4,16.4,0,0,1,238,90.47Zm0-24.58a8.2,8.2,0,1,0,8.19,8.2A8.2,8.2,0,0,0,238,65.89Z'
                />
                <path
                  className='cls-b3'
                  d='M414.11,229.74a4.09,4.09,0,0,1-4.09-4.1v-8.19a4.1,4.1,0,0,1,8.19,0v8.19A4.1,4.1,0,0,1,414.11,229.74Z'
                />
                <path
                  className='cls-b3'
                  d='M414.11,188.78a4.1,4.1,0,0,1-4.09-4.1v-8.19a4.1,4.1,0,1,1,8.19,0v8.19A4.11,4.11,0,0,1,414.11,188.78Z'
                />
                <path
                  className='cls-b3'
                  d='M414.11,221.55a12.31,12.31,0,0,1-12.29-12.29,4.1,4.1,0,1,1,8.2,0,4.1,4.1,0,1,0,4.09-4.1,4.1,4.1,0,0,1,0-8.19,12.29,12.29,0,0,1,0,24.58Z'
                />
                <path
                  className='cls-b3'
                  d='M414.11,205.16a12.29,12.29,0,1,1,12.29-12.29,4.1,4.1,0,1,1-8.19,0,4.1,4.1,0,1,0-4.1,4.1,4.1,4.1,0,1,1,0,8.19Z'
                />
                <path
                  className='cls-b2'
                  d='M324,188.78H291.23a4.1,4.1,0,1,1,0-8.19H324a4.1,4.1,0,0,1,0,8.19Z'
                />
                <path
                  className='cls-b1'
                  d='M135.57,319.86a45.06,45.06,0,1,1,45.06-45.06A45.11,45.11,0,0,1,135.57,319.86Zm0-81.93a36.87,36.87,0,1,0,36.87,36.87A36.91,36.91,0,0,0,135.57,237.93Z'
                />
                <path
                  className='cls-b1'
                  d='M414.11,319.86H209.3a4.1,4.1,0,0,1,0-8.2H414.11a4.1,4.1,0,0,1,0,8.2Z'
                />
                <path
                  className='cls-b1'
                  d='M176.53,434.55H94.61a4.1,4.1,0,0,1-4.09-4.1V348.53a4.1,4.1,0,0,1,4.09-4.1h81.92a4.1,4.1,0,0,1,4.1,4.1v81.92A4.1,4.1,0,0,1,176.53,434.55Zm-77.82-8.19h73.73V352.62H98.71Z'
                />
                <path
                  className='cls-b1'
                  d='M307.61,401.78H217.5a4.1,4.1,0,0,1-4.1-4.1V348.53a4.1,4.1,0,0,1,4.1-4.1h90.11a4.11,4.11,0,0,1,4.1,4.1v49.15A4.11,4.11,0,0,1,307.61,401.78Zm-86-8.19h81.93v-41H221.59Z'
                />
                <path
                  className='cls-b1'
                  d='M414.11,434.55H217.5a4.1,4.1,0,1,1,0-8.19H414.11a4.1,4.1,0,1,1,0,8.19Z'
                />
                <path
                  className='cls-b1'
                  d='M414.11,377.2H340.38a4.1,4.1,0,1,1,0-8.19h73.73a4.1,4.1,0,1,1,0,8.19Z'
                />
                <path
                  className='cls-b1'
                  d='M414.11,278.89H209.3a4.1,4.1,0,0,1,0-8.19H414.11a4.1,4.1,0,1,1,0,8.19Z'
                />
                <path
                  className='cls-b2'
                  d='M70,328.05a4.1,4.1,0,0,1-4.09-4.1V283a4.1,4.1,0,1,1,8.19,0v41A4.1,4.1,0,0,1,70,328.05Z'
                />
              </g>
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
