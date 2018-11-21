import React, { Component } from 'react';
import { Row, Col, Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import Header from './components/Header';
import Posts from './components/Posts';
import PostFormModal from './components/PostFormModal';
import store from './store';

class App extends Component {


  render() {
    const { Content, Footer } = Layout;
    return (
      <Provider store={store}>
        <Layout className="layout">
          <Header />
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Post</Breadcrumb.Item>
            </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Row>
                  <Col span={8}>
                      <h2>List of all posts</h2>
                  </Col>
                  <Col span={3} offset={13}>
                      <PostFormModal/>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Posts />
                  </Col>
                </Row>
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Simple react app ©2018 Created by Helal
          </Footer>
        </Layout>
      </Provider>
    );
  }
}

export default App;
