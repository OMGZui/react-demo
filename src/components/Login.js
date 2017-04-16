/**
 * 登录
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, Card} from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.history.push('/index')
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div key="1" className="absolute-middle" style={{width: 400, height: 400}}>
                <Card title="react">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input prefix={<Icon type="lock"/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

const Login = Form.create()(LoginForm);
export default Login;
