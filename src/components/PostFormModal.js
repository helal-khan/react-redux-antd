import React, { Component } from 'react';
import { Form, Modal, Button, Input } from 'antd';
import '../App.css';
import {connect} from 'react-redux';
import { createPost } from '../actions/postActions';

const FormItem = Form.Item;

class PostFormModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            visible: false,
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
                this.setState({ loading: true });
                const post = {
                    title: this.state.title,
                    body: this.state.body
                };
                this.props.createPost(post);
                this.setState({ loading: false,visible: false });
            }
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
            title: '',
            body: ''
        });
    }
    
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        const { TextArea } = Input;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showModal} icon="form">
                    Add new post
                </Button>
                <Modal
                    visible={visible}
                    title="Add new post"
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <form onSubmit={this.onSubmit}>
                        <FormItem>
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please write title here!' }],
                            })(
                                <Input name="title" placeholder="Title" onChange={this.onChange} value={this.state.title} />
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
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
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
        loading: state.posts.loading,
        showModal: state.posts.showModal
    };
};

export default connect(mapStateToProps,{createPost})(WrappedPostFormModal);