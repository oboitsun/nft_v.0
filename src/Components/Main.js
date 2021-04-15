import React, { Component } from 'react'
import Footer from './Footer'
import FooterDevider from './FooterDevider'
import HeadingSectionCreator from './HeadingSectionCreator'
import HeadingSectionUser from './HeadingSectionUser'

import Nav from './Nav'
import HowToUser from './HowToUser'
import WhatIsNFTUser from './WhatIsNFTUser'
import WhatIsOriginsUser from './WhatIsOriginsUser'
import WhatMakesUser from './WhatMakesUser'
import WhyShouldUser from './WhyShouldUser'
import HowToCreator from './HowToCreator'
import WhatIsNFTCreator from './WhatIsNFTCreator'
import WhatIsOriginsCreator from './WhatIsOriginsCreator'
import WhatMakesCreator from './WhatMakesCreator'
import WhyShouldCreator from './WhyShouldCreator'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: true,
      style: this.user
        ? {
            background: `linear-gradient(180deg,rgba(50, 126, 202, 1) 0%,rgba(8, 19, 35, 1) 35%,rgba(21, 62, 102, 1) 70%,rgba(33, 102, 163, 1) 77%,rgba(8, 19, 35, 1) 100%) `,
            minHeight: '100vh',
            height: 'fit-content',
          }
        : {
            background: `linear-gradient(180deg,rgba(89, 87, 97, 1) 0%,rgba(8, 19, 15, 1) 35%,rgba(89, 87, 97, 1) 70%,rgba(89, 87, 97, 1) 77%,rgba(8, 19, 15, 1) 100%) `,
            minHeight: '100vh',
            height: 'fit-content',
          },
    }
  }

  creator() {
    console.log('changed to creator')
    this.setState({
      style: {
        background: `linear-gradient(180deg,rgba(89, 87, 97, 1) 0%,rgba(8, 19, 15, 1) 35%,rgba(89, 87, 97, 1) 70%,rgba(89, 87, 97, 1) 77%,rgba(8, 19, 15, 1) 100%) `,
        minHeight: '100vh',
        height: 'fit-content',
      },
      user: false,
    })
    console.log(this.state)
  }
  user() {
    console.log('changed to user')
    this.setState({
      style: {
        background: `linear-gradient(180deg,rgba(50, 126, 202, 1) 0%,rgba(8, 19, 35, 1) 35%,rgba(21, 62, 102, 1) 70%,rgba(33, 102, 163, 1) 77%,rgba(8, 19, 35, 1) 100%) `,
        minHeight: '100vh',
        height: 'fit-content',
      },
      user: true,
    })
  }
  render() {
    return (
      <>
        <div style={this.state.style} className='w-full px-2 top-0  pt-7 font-mont'>
          <Nav
            agent={this.state.user}
            creator={this.creator.bind(this)}
            user={this.user.bind(this)}
          />
          {this.state.user ? <HeadingSectionUser /> : <HeadingSectionCreator />}
          {this.state.user ? <WhatIsOriginsUser /> : <WhatIsOriginsCreator />}
          {this.state.user ? <WhatIsNFTUser /> : <WhatIsNFTCreator />}
          {this.state.user ? <WhyShouldUser /> : <WhyShouldCreator />}
          {this.state.user ? <WhatMakesUser /> : <WhatMakesCreator />}
          {this.state.user ? <HowToUser /> : <HowToCreator />}
          <FooterDevider />
          <Footer />
        </div>
      </>
    )
  }
}
