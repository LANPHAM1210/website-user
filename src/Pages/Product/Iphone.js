import React from 'react'
import { Row, Col } from 'antd'
import { AppleOutlined } from '@ant-design/icons'
import './style.css'
import Header from '../../components/layout/layoutPage/header'
import Footer from '../../components/layout/layoutPage/footer'
import { getProduct } from '../../api/axios'
import { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom'

function Iphone() {
  const [data, setData] = useState([]);
  const condition = {
    "page": 0,
    "size": 20,
    "manufacturer": "Apple"
  };
  const listProduct = () => {
    getProduct(condition).then((res) => {
      setData(res.data.data.listItem);
    });
  };

  function getListProduct() {
    const productList = data?.map(item =>
      <Col className="gutter-row-1" span={4}>
        <div>
          <Link to={'/prod/' + item["productId"]} >
            <img src={item["image"]} alt='anh-1' className='anh' />
          </Link>
          <h4>{item["productName"]}</h4>
          <ul className='text-1'>
            <h3 className='text-2'>
              <NumericFormat value={item["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ
            </h3>
            <del><NumericFormat value={item["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ</del>
          </ul>
        </div>
      </Col>
    )

    return (
      <Row gutter={22}>
        {productList}
      </Row>
    );
  }

  useEffect(() => {
    listProduct();
  }, []);
  
  return (
    <div>
      <Header />
      <div className='content-iphone-line'>
        <h2 className='iphone-text'>IPHONE</h2>
      </div>

      <div className='content-line-4'>
        {getListProduct()}
        {/* <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/06/apple-iphone-12-mini-2.png' alt='anh-1' className='anh' />
              <h4>iPhone 12 (128GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>15,900,000₫</h3><del>26,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/iphone%2011%20(2).png' alt='anh-2' className='anh' />
              <h4>iPhone 11 (128GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>11,990,000₫</h3><del>21,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-12.png' alt='anh-3' className='anh' />
              <h4>iPhone 13 (512GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>21,790,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/01/22/image-removebg-preview.png' alt='anh-4' className='anh' />
              <h4>Apple iPhone X - 64GB - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>9,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/08/anh-chup-man-hinh-2022-09-08-luc-01-57-13-removebg-preview.png' alt='anh-5' className='anh' />
              <h4>iPhone 14 (512GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>24,950,000₫</h3>
              </ul>
            </div>
          </Col>
        </Row> */}
      </div>
      {/* 
      <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-16.png' alt='anh-1' className='anh' />
              <h4>iPhone 13 Pro (1TB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>26,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-11.png' alt='anh-2' className='anh' />
              <h4>iPhone 13 mini (512GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>22,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-15.png' alt='anh-3' className='anh' />
              <h4> iPhone 13 Pro (512GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>24,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/06/apple-iphone-12-mini.png' alt='anh-4' className='anh' />
              <h4>iPhone 12 mini (256GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>19,950,000₫</h3><del>25,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/06/iphone-12-pro-max-2.png' alt='anh-5' className='anh' />
              <h4>iPhone 12 Pro Max - 256GB - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>30,490,000₫</h3><del>37,990,000₫</del>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/08/44444.png' alt='anh-1' className='anh' />
              <h4>iPhone 14 Pro (128GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>24,750,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/12/8Plus-White.png' alt='anh-2' className='anh' />
              <h4>iPhone 8 Plus - 128GB - Chính hãng (VN/A)</h4>
              <ul className='text-1'>
                <h3 className='text-2'>13,050,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/06/iphone-12-pro-max.png' alt='anh-3' className='anh' />
              <h4> iPhone 12 Pro - 256GB - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>26,990,000₫</h3><del>34,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/iPhone%2011%20Pro%20(5).png' alt='anh-4' className='anh' />
              <h4>iPhone 11 Pro - 256GB - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>25,990,000₫</h3><del>30,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/03/08/14plus-yellow.png' alt='anh-5' className='anh' />
              <h4> iPhone 14 Plus (256GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>24,490,000₫</h3>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/08/33333.png' alt='anh-1' className='anh' />
              <h4>iPhone 14 Pro (512GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>31,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-16.png' alt='anh-2' className='anh' />
              <h4>iPhone 13 Pro (1TB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>26,990,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/06/apple-iphone-12-mini-4.png' alt='anh-3' className='anh' />
              <h4>iPhone 12 (64GB) - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>12,590,000₫</h3><del>12,400,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/07/image-removebg-preview-4.png' alt='anh-4' className='anh' />
              <h4>iPhone 11 Pro - 256GB - Chính hãng VN/A sản phẩm cũ</h4>
              <ul className='text-1'>
                <h3 className='text-2'>25,990,000₫</h3><del>30,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <h6 className='icon-ip'><AppleOutlined /> Aurthorised Reseller</h6>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/iPhone%2011%20Pro%20(5).png' alt='anh-5' className='anh' />
              <h4>iPhone 11 Pro Max - 256GB - Chính hãng VN/A</h4>
              <ul className='text-1'>
                <h3 className='text-2'>28,990,000₫</h3>
              </ul>
            </div>
          </Col>
        </Row>
      </div> */}
      <Footer />
    </div>
  )
}

export default Iphone