import React from 'react'
import { Input } from 'antd';
import {
    CarOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';

function Header(query) {
    const navigate = useNavigate();
    const { Search } = Input;
    const [condition, setCondition] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const onSearch = (value) => {
        navigate("/search/" + value);
    };

    const onSearchChange = (e) => {
        setSearchKey(e.currentTarget.value);
    }

    return (
        <div className='header'>
            <div className='header-line'>
                <h3 className='header-text-one'>Chào mừng đến với thế giới smartphone với muôn ngàn ưu đãi</h3>
            </div>
            <div className='header-line-1'>
                <div className='logo'>
                    <Link to={'/'}>
                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/344287970_1865581070472074_2327929001103548366_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=13sgCU1zkEcAX_EXbYo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQxR6rHOFlTCYj1H-xNpugz6pBfeVoBEJOD8scV5pw-BQ&oe=647C9A4F'
                            alt='Logo'
                            className='Lo-go' />
                    </Link>
                </div>
                <h2 className='header-text'>Smart</h2>
                <h2 className='header-text-1'>phone</h2>
                <Search className='input' placeholder="Hôm nay bạn cần gì" value={searchKey} onChange={onSearchChange} onSearch={onSearch} />
                <Link to={'/kiem-tra-don-hang'}>
                    <putton className={'putton-one'}><CarOutlined className={'icon'} />
                        Kiểm tra đơn hàng
                    </putton>
                </Link>
                <Link to={'/gio-hang'}>
                    <ShoppingCartOutlined className='icon-1' />
                </Link>
                <a href='/login'>
                    <UserOutlined className='icon-2' />
                </a>
            </div>
            <div className='header-menu' >
                <Link to='/dien-thoai'><h3 className='text-header' activeHeading >ĐIỆN THOẠI</h3></Link>
                <Link to='/iphone'><h3 className='text-header' activeHeading >IPHONE</h3></Link>
                <Link to='/sam-sung'><h3 className='text-header' activeHeading >SAMSUNG</h3></Link>
                <Link to='/oppo'><h3 className='text-header' activeHeading >OPPO</h3></Link>
                <Link to='/realme'><h3 className='text-header' activeHeading >REALME</h3></Link>
                <Link to='/redmi'><h3 className='text-header' activeHeading >REDMI</h3></Link>
            </div>
        </div>
    )
}

export default Header