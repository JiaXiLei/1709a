import React from 'react';

import './style.less'
import { connect } from 'react-redux'
import { Input, Button, Icon, message, Form } from 'antd'; //引用antd插件
import { api } from '@/utils/api'
import { postAxios } from '@/utils/request'
import { getUser } from '@/action/login'

export default @connect(state => {
    const { home, login } = state
    return {
        home,
        login,
    }
}, {
    getUser
})
@Form.create()
class Login extends React.Component {

    handelSubmit = e => {
        e.preventDefault()  //取消默认事件 默认刷新页面

        const { form } = this.props

        form.validateFields((err, values) => {
            if (!err) {
                postAxios(api.login, values)
                    .then(res => {
                        if (res.data.status === '200') {
                            message.success(res.data.message)
                            this.props.getUser(res.data.data)
                            setTimeout(() => {
                                this.props.history.push('/home')
                            }, 2000);
                        } else {
                            message.warning(res.data.message)
                        }
                    })
            }
        })
    }
    histo = () => {
        this.props.history.push('/registered')
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='pages-ligon'>
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
                        <p className="login-btn">
                            <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                            <a onClick={this.histo}>暂无账号 注册！</a>
                        </p>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}