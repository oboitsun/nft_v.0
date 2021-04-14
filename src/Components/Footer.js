import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='py-5 sm:py-10 xl:pt-24 xl:pb-48 flex justify-center '>
        <div className='flex flex-col text-turq text-4xl items-start leading-snug'>
          <a href='mailto:info@originsnft.com'>info@originsnft.com</a>
          <a href='tel:+13056634453'>+1 (305) 663 4453</a>
          <a href='mailto:matiaslirman@originsnft.com'>matiaslirman@originsnft.com</a>
        </div>
      </footer>
    )
  }
}
