import React from 'react';

import '@/pages/login/style.less'
import { Input, Button, Icon, message, Form } from 'antd'; //引用antd插件
import { api } from '@/utils/api'
import { postAxios } from '@/utils/request'

export default @Form.create()
class registered extends React.Component {

    handelSubmit = e => {
        e.preventDefault()  //取消默认事件 默认刷新页面
        const { form } = this.props
        form.validateFields((err, values) => {
            if (!err) {
                if (values.password === values.passwords) {

                    const obj = {
                        username: values.username,
                        password: values.password,
                    }
                    postAxios(api.register, obj)
                        .then(res => {
                            console.log(res)
                            if (res.data.status === "200") {
                                message.success('注册成功')
                                setInterval(() => {
                                    this.props.history.push('/login')
                                }, 2000);

                            } else {
                                message.warning('该账户已存在')
                            }
                        })
                } else {
                    message.warning('两次密码输入不一致')
                }
            }
        })
    }
    histo = () => {
        this.props.history.push('/login')
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='pages-regisered'>
                <Form
                    layout='vertical'
                    onSubmit={this.handelSubmit}
                    className='login-from'
                >
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入账号'
                                }
                            ]
                        })(
                            <Input placeholder='Username' />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码'
                                },
                                {
                                    min: 6,
                                    message: '最小长度不小于6'
                                }
                            ]
                        })(
                            <Input.Password
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('passwords', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码'
                                }
                            ]
                        })(
                            <Input.Password
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Passwords"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <p className="login-btn">
                            <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                            <a onClick={this.histo}>已有账号 登陆！</a>
                        </p>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}