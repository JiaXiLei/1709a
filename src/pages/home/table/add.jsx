import React from 'react';

import { Form, Button, Input, Upload, message } from 'antd'
import { postAxios } from '@/utils/request'
import { api } from '@/utils/api'
export default @Form.create()
class Add extends React.Component {

    handelSubmit = e => {
        e.preventDefault()
        const { form } = this.props
        form.validateFields((err, values) => {
            if (!err) {

                if (values.upload[0].status === "done") {
                    const hospital = values.upload[0].response.data.url

                    const obj = {
                        name: values.name,
                        age: values.age,
                        msg: values.msg,
                        gender: values.gender,
                        // hospital: hospital.split('//')[1],
                        hospital: null,
                    }
                    console.log(obj)
                    postAxios('http://api.baxiaobu.com/index.php/home/v5/add', obj)
                        .then(res => {
                            console.log(res)
                        })
                } else {
                    message.warning('图片格式有误 不能上传！')
                }


            }
        })
    }
    normFile = e => {
        // console.log('Upload event:',e.fileList)
        if (Array.isArray(e)) {
            return e.fileList
        }
        return e && e.fileList
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="home-table-add">
                <Form onSubmit={this.handelSubmit} >
                    <Form.Item label='用户名'>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入用户名!' }]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label='年龄'>
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: '请输入年龄!' }]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label='价格'>
                        {getFieldDecorator('msg', {
                            rules: [{ required: true, message: '请输入价格!' }]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label='描述'>
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: '概括该商品' }]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item lable='上传图片'>
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload
                                name="file"
                                action="/urlapi/api/uploadFile"
                                listType="picture">
                                <Button>点击上传</Button>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="add-btn"> 提交</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}