import React, { Component } from 'react';
import {  Collapse, Spin } from 'antd';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {


    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
            
        }
    }
    
    render() {
        const Panel = Collapse.Panel;
        const postItem = this.props.posts.map(post => (
            <Panel header={post.title} key={post.id}>
                <p>{post.body}</p>
            </Panel>
        ));
        return (
            <div>
                <Spin spinning={this.props.loading}><center></center></Spin>
                <div style={{ marginTop: 16 }}>
                    <Collapse bordered={false} key="collapse">
                        {postItem}
                    </Collapse>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        newPost: state.posts.item,
        loading: state.posts.loading
    };
};

export default connect(mapStateToProps, {fetchPosts})(Posts) ;