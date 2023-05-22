import React from 'react';
import { Carousel, Row, Col, Checkbox, Image, Rate, Mentions, Form, Input } from 'antd';
import './style.css'
import { CarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Header from '../layout/layoutPage/header';
import Footer from '../layout/layoutPage/footer';
import { useParams } from "react-router";
import { findProduct } from '../../api/axios';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

function ListProduct() {
    const [product, setProduct] = useState({});
    let { id } = useParams();

    const detailProduct = () => {
        findProduct(id).then((res) => {
            setProduct(res.data);
        });
    };

    useEffect(() => {
        detailProduct();
    }, []);

    console.log(product);
    return (
        <div>
            <Header />
            <div>
                <h3 className='reno-text'>{product["productName"]}</h3>
                <div className='reno'>
                    <div className='reno-1'>
                        <Carousel autoplay>
                            <Image src={product["image"]} alt='anh-1' />
                            {/* <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/01/12/image-removebg-preview-26.png' alt='anh-2' /> */}
                            {/* <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/01/12/image-removebg-preview-17.png' alt='anh-3' /> */}
                            {/* <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/01/12/image-removebg-preview-32.png' alt='anh-4' /> */}
                        </Carousel>
                    </div>
                    <div>
                        <div className='reno-line'>
                            <h3 className='text-2'>
                                <NumericFormat value={product["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ
                            </h3>
                            <del><NumericFormat value={product["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ</del>
                            <h5>| Giá đã bao gồm 10% VAT</h5>
                        </div>
                        <h5 className='reno-2'>Sản phẩm bán giá Hotsale với số lượng có hạn</h5>
                        <putton className='reno-putton'><CarOutlined className='icon-reno8T' />MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</putton>
                        <h5 className='reno-3'>Lựa chọn màu và xem địa chỉ còn hàng</h5>
                        <div className='reno8T'>
                            <div className='reno-line-2'>
                                <Row className='dt-line-3'>
                                    <Col span={9}>
                                        <Checkbox className='reno-checkbox' value="Realme">{product["color"]}</Checkbox>
                                    </Col>
                                </Row>
                                <h4><NumericFormat value={product["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ</h4>
                            </div>
                        </div>
                        <h3 className='reno8T-text'>KHUYẾN MÃI</h3>
                        <h5 className='reno8T-text-1'>Bộ quà Smartphone đặc biệt (Chi tiết liên hệ 1900.2091)</h5>
                        <div className='reno-putton-line'>
                            <div className='reno-putton-1'>
                                <putton className='reno8T-putton'>
                                    <CarOutlined />MUA NGAY</putton>
                                <h5>Giao tận nhà (COD)</h5>
                                <h5>Hoặc nhận tại cửa hàng</h5>
                            </div>
                            <div className='reno-putton-2'>
                                <Link to={'/gio-hang'}>
                                    <putton>
                                        <ShoppingCartOutlined className='icon-reno8T-1' />
                                        <h5>Thêm vào giỏ hàng</h5>
                                    </putton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reno8T-danhgia'>
                    <div className='danhgia-line'>
                        <h3 className='danhgia-text-1'>Đánh giá về {product["productName"]}</h3>
                        <Rate className='danhgia-rate' />
                    </div>
                    <div className='comment'>
                        <Form.Item className='comment-line'
                            rules={[{ required: true }]}>
                            <Mentions rows={3} placeholder="Nội dung" />
                        </Form.Item>
                        <div className='comment-input'>
                            <Input className='comment-input-1' placeholder="Họ tên" />
                            <Input className='comment-input-1' placeholder="Số điện thoại mua hàng" />
                            <Input className='comment-input-1' placeholder="Email" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListProduct