import React, { Component } from 'react'
import Footer from './Footer'
import FooterDevider from './FooterDevider'
import HeadingSection from './HeadingSection'
import HowTo from './HowTo'
import Nav from './Nav'
import WhatIsNFT from './WhatIsNFT'
import WhatIsOrigins from './WhatIsOrigins'
import WhatMakes from './WhatMakes'
import WhyShould from './WhyShould'

export default class Main extends Component {
  render() {
    return (
      <>
        <div className='w-full px-2 top-0  pt-7 font-mont'>
          <Nav />
          <HeadingSection />
          <WhatIsOrigins />
          <WhatIsNFT />
          <WhyShould />
          <WhatMakes />
          <HowTo />
          <FooterDevider />
          <Footer />
        </div>
      </>
    )
  }
}
