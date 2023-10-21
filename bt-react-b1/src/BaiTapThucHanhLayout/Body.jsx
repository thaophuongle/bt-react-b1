import React from 'react'
import { Banner } from './Banner'
import { Item } from './Item'

export const Body = () => {
  return (
    <div className='body container px-lg-5'>
        <Banner></Banner>
        <Item></Item>
    </div>
  )
}
