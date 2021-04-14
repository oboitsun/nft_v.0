import React, { Component } from 'react'

export default class FooterDevider extends Component {
  render() {
    return (
      <div className='h-16 w-full px-1 flex text-white items-center justify-between'>
        <div className='w-80'>LOGO</div>
        <div className='w-full h-full flex  justify-between bg-gradient-to-l from-lghtbl to-transparent  '></div>
      </div>
    )
  }
}
