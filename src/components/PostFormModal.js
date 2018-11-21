import React, { Component } from 'react';
import { Form, Modal, Button, Input } from 'antd';
import '../App.css';
import {connect} from 'react-redux';
import { createPost,visibleToggle } from '../actions/postActions';

const FormItem = Form.Item;

class PostFormModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const post = {
                    title: this.state.title,
                    body: this.state.body
                };
                this.props.createPost(post);
            }
        });
    }

    showModal = () => {
        this.props.visibleToggle(!this.props.visible);
        this.props.form.setFieldsValue({
            title: '',
            body:''
        });
    }
    
    handleCancel = () => {
        this.props.visibleToggle(!this.props.visible);
    }

    render() {
        const { TextArea } = Input;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showModal} icon="form">
                    Add new post
                </Button>
                <Modal
                    visible={this.props.visible}
                    title="Add new post"
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <form onSubmit={this.onSubmit}>
                        <FormItem>
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please write title here!' }],
                            })(
                                <Input name="title" placeholder="Title" onChange={this.onChange} />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('body', {
                                rules: [{ required: true, message: 'Please write body here!' }],
                            })(
                                <TextArea name="body" placeholder="Write post here" onChange={this.onChange} rows={4}/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.btnLoader}>
                                Submit
                            </Button>
                            <Button key="back" onClick={this.handleCancel}>Close</Button>
                        </FormItem>
                    </form>
                </Modal>
            </div>
        );
    }
}

const WrappedPostFormModal = Form.create()(PostFormModal);

const mapStateToProps = state => {
    return {
        btnLoader: state.posts.btnLoader,
        visible: state.posts.visible

    };
};

export default connect(mapStateToProps,{createPost,visibleToggle})(WrappedPostFormModal);