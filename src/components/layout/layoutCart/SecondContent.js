import { Checkbox, Form, Input, Mentions, Radio } from 'antd'
import React from 'react'
import './styleCart.css';

function SecondContent() {
  return (
    <div className='second-content'>
        <h4 className='second-text'>Bạn cần nhập đầy đủ các trường thông tin có dấu *</h4>
        <div className='second-input'>
            <Input className='second-input-1' placeholder="Họ và tên *" />
            <Input className='second-input-1' placeholder="Số điện thoại *" />
            <Input className='second-input-1' placeholder="Email *" />
        </div>
        <div className='second-line'>
            <h5>Hình thức nhận hàng</h5>
            <div className='second-line-2'>
                <putton className='second-putton'>
                    <Radio>Nhận hàng tại nhà</Radio>
                </putton>
                <putton className='second-putton'>
                    <Radio>Nhận hàng tại cửa hàng</Radio>
                </putton>
            </div>
            <h5>Nơi nhận hàng</h5>
            <Form.Item className='second-line-3'
                rules={[ { required: true } ]}>
                <Mentions rows={3} placeholder="Ghi chú" />
            </Form.Item>
            <Checkbox>Yêu cầu xuất hoá đơn (Vui lòng điền email để nhận hoá đơn VAT)</Checkbox>
        </div>
    </div>
  )
}

export default SecondContent