import React, { Component } from 'react'

export default class WhatMakes extends Component {
  render() {
    return (
      <section className='font-mont relative text-white flex items-center justify-center pb-12 md:pb-24  xl:pb-48 2xl:pb-96 md:pr-5 lg:pr-10'>
        <div className='absolute opacity-50 xl:opacity-100 xl:static flex h-60 ml-auto lg:mr-20 z-0'>
          <svg className='h-60 ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 175.78 240.78'>
            <defs>
              <style>{`.cls-what{fill:none;stroke:#dd406d;stroke-miterlimit:10;}.cls-what2{fill:url(#linear-gradient);}`}</style>
              <linearGradient
                id='linear-gradient'
                x1='70.01'
                y1='54.28'
                x2='94.59'
                y2='11.7'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0' stopColor='#f9d885' />
                <stop offset='1' stopColor='#dd406d' />
              </linearGradient>
            </defs>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_2-2' data-name='Layer 2'>
                <path
                  className='cls-what'
                  d='M24.57,131.58a24.11,24.11,0,0,1-20.94-36h0a24.12,24.12,0,1,1,20.94,36ZM8.85,98.53a18.12,18.12,0,1,0,24.7-6.83,18.14,18.14,0,0,0-24.7,6.83Z'
                />
                <path
                  className='cls-what'
                  d='M25.77,204.55a24.84,24.84,0,0,1-6.21-.8,24.37,24.37,0,0,1-15-11.33h0a24.52,24.52,0,1,1,21.22,12.13Zm-16-15.17A18.56,18.56,0,0,0,35.14,196a18.58,18.58,0,0,0,6.6-25.42,18.57,18.57,0,1,0-32,18.83Z'
                />
                <path
                  className='cls-what'
                  d='M88.79,240.28a24.58,24.58,0,0,1-.19-49.15h.2A24.58,24.58,0,0,1,89,240.28Zm0-43.15h-.16a18.58,18.58,0,0,0,.15,37.15h.15a18.58,18.58,0,0,0-.14-37.15Z'
                />
                <path
                  className='cls-what'
                  d='M150.73,203.08a24.11,24.11,0,0,1-20.95-36h0a24.12,24.12,0,1,1,20.95,36ZM135,170a18.12,18.12,0,1,0,24.7-6.83A18.14,18.14,0,0,0,135,170Z'
                />
                <path
                  className='cls-what'
                  d='M150.74,131.05a24.88,24.88,0,0,1-6.21-.79,24.49,24.49,0,1,1,6.21.79Zm-.07-43.15a18.57,18.57,0,1,0,16,9.16h0A18.59,18.59,0,0,0,150.67,87.9Z'
                />
                <path
                  className='cls-what2'
                  d='M87.15,49.15A24.58,24.58,0,0,1,69.64,7.34,24.42,24.42,0,0,1,87,0l0,3,0-3h.2a24.58,24.58,0,0,1,24.57,24.38A24.57,24.57,0,0,1,87.35,49.14Z'
                />
                <path
                  className='cls-what'
                  d='M88.09,167.59a24.13,24.13,0,0,1-21-36h0a24.11,24.11,0,1,1,21,36Zm.06-42.26a18.23,18.23,0,0,0-15.79,9.2h0a18.08,18.08,0,1,0,15.79-9.2Z'
                />
              </g>
            </g>
          </svg>
        </div>
        <div className='z-1 px-2  md:px-10 lg:px-0  flex flex-col items-start max-w-1380'>
          <h3 className='uppercase text-gold font-extrabold text-2xl md:text-5xl lg:text-7xl pb-5 lg:pb-10 text-left'>
            WHAT MAKES ORIGINS DIFFERENT?
          </h3>
          <p className='text-left text-xl md:text-3xl lg:text-5xl leading-tight pb-5 lg:pb-10 z-1'>
            {`Our goal is to create a social marketplace where`}
            <br className='hidden xl:flex' />
            {` you can interact with your friends and`}
            <br className='hidden xl:flex' />
            {` the content creators alike and purchase collectibles`}
            <br className='hidden xl:flex' />
            {` that will last a lifetime.`}
          </p>
          <p className='text-left text-xl md:text-3xl lg:text-5xl leading-tight pb-4 z-1'>
            {` Our platform will allow you to follow`}
            <br className='hidden xl:flex' />
            {` the latest trends in the NFT space`}
            <br className='hidden xl:flex' />
            {` and bid on items from some of the biggest`}
            <br className='hidden xl:flex' />
            {` names in digital collectibles.`}
          </p>
        </div>
      </section>
    )
  }
}