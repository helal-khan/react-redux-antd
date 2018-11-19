import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

class Header extends Component {
    render() {
        const { Header} = Layout;
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Post</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                    <Menu.Item key="4">Contact</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default Header;