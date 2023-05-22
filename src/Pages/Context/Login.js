import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/axios'; 
import Cookies from "js-cookie";
import './context.css';

function Login() {
    const navigate = useNavigate();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    //api
    const onFinish = (values) => {
        login(values).then((res) => {
            if (res.data?.success === true) {
                Cookies.set("jwt", res.data?.data?.jwt);
                navigate("/");
            }
        });
    }

    return (
        <div className='login-content'>
            <div className='login-line'>
                <h2 className='login-text'>Đăng nhập trang Smartphone</h2>
                <div className='login-line-2'>
                    <div style={{ marginTop: '25px' }}>
                        <Form
                            name="basic" labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item label="Email" name="userName"
                                rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Mật khẩu" name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                                {/* <Link to="/forgotpassword">
                                    <h5 style={{ fontWeight: 'unset', color: 'blue', margin: '7px 0 0 95px' }}>Quên mật khẩu ?</h5>
                                </Link> */}
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                {/* <Link to={'/'}> */}
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                                {/* </Link> */}
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className='login-line-3'>
                    <h5 style={{ fontWeight: 'unset' }}>Chưa có tài khoản ?</h5>
                    <Link to="/resigter" style={{ textDecoration: 'none' }}>
                        <h5 className='login-text-1'>Đăng kí tại đây</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login