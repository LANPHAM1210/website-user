import React from 'react'
import { Input } from 'antd'
import Header from '../../components/layout/layoutPage/header'
import Footer from '../../components/layout/layoutPage/footer'

function OrderCheck() {
  return (
    <div>
        <Header />
        <div className='kiem-tra-don-hang'>
            <h2 className='ktdh-text'>Kiểm tra đơn hàng của bạn</h2>
            <Input className='ktdh-input' placeholder="Vui lòng nhập đơn hàng của bạn" />
            <putton className='ktdh-putton'>TRA CỨU</putton>
        </div>
        <Footer />
    </div>
  )
}

export default OrderCheck