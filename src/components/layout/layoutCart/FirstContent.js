import { Radio } from 'antd'
import React, { useState } from 'react'
import './styleCart.css';

function FirstContent() {
    const [count, setCount] =useState(0);

  return (
    <div>
        <div className='first-content'>
            <div className='first-line-1'>
                <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/01/12/image-removebg-preview-16.png' alt='anh-1' className='anh-first'/>
                <h4>Reno8 T 5G - Chính hãng</h4>
                <ul className='text-1'>
                    <h3 className='text-2'>9.990.000</h3><del>9.990.000</del>
                </ul>
                <div className='first-dem-so'>
                    <button className='demso-1' onClick={() => setCount(0)}>-</button>
                    <p>{count}</p>
                    <button className='demso-1' onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>

            <div className='first-line-2'>
                <div><putton className='first-1'>KM1</putton></div>
                <div className='first-2'>
                    <putton>
                        <Radio>Tặng phiếu mua hàng 100đ</Radio>
                    </putton>
                </div>
                <div><putton className='first-1'>KM2</putton></div>
                <div className='first-2'>
                    <putton>
                        <Radio>Giảm đến 500đ khi thanh toán bằng ZaloPay</Radio>
                    </putton>
                </div>
            </div>
        </div>

        <div className='first-content'>
            <div className='first-line-1'>
                <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/08/44444.png' alt='anh-1' className='anh-first'/>
                <h4>IPhone 14 Pro Max (128GB)</h4>
                <ul className='text-1'>
                    <h3 className='text-2'>26.790.000</h3>
                </ul>
                <div className='first-dem-so'>
                    <button className='demso-1' onClick={() => setCount(0)}>-</button>
                    <p>{count}</p>
                    <button className='demso-1' onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>

            <div className='first-line-2'>
                <div><putton className='first-1'>KM1</putton></div>
                <div className='first-2'>
                    <putton>
                        <Radio>Tặng phiếu mua hàng 100đ</Radio>
                    </putton>
                </div>
                <div><putton className='first-1'>KM2</putton></div>
                <div className='first-2'>
                    <putton>
                        <Radio>Giảm đến 500đ khi thanh toán bằng ZaloPay</Radio>
                    </putton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstContent