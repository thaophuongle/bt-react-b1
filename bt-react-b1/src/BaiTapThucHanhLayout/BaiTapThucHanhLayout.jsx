import React from 'react'
import { Header } from './Header'
import { Body } from './Body'

import { Footer } from './Footer'

export const BaiTapThucHanhLayout = () => {
  return (
    <div>
        <Header></Header>
        <div className="py-5">
        <Body></Body>
        </div>
        <Footer></Footer>
    </div>
  )
}
