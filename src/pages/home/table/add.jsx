import React from 'react';

import { Form, Button, Input, Upload } from 'antd'

export default @Form.create()
class Add extends React.Component {

    handelSubmit = e => {
        e.preventDefault()
        const { form } = this.props
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
    }
    normFile = e => {
        // console.log('Upload event:',e.fileList)
        if (Array.isArray(e)) {
            return e
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