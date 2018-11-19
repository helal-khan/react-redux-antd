import React, { Component } from 'react';
import { Input, Button } from 'antd';
import '../App.css';
import Axios from "axios";

//const axios = require('axios');

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        this.setState({ loading: true });
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => this.setState({ loading: false }, console.log(data))
        );
    }

    render() {
        const { TextArea } = Input;
        return (
            <div>
                <h2>Add new post</h2>
                <form onSubmit={this.onSubmit}>
                    <Input name="title" placeholder="Title" onChange={this.onChange} /><br /><br />
                    <TextArea name="body" placeholder="Write post here" onChange={this.onChange} rows={4} /><br /><br />
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default PostForm;
