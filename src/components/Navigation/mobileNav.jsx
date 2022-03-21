import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './mobileNav.css';
export default class MobileNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu_mobile">
        <Menu compact icon="labeled">
          <Menu.Item
            as={NavLink}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name="handshake" />
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="./design"
            name="design"
            active={activeItem === 'design'}
            onClick={this.handleItemClick}
          >
            <Icon name="hand rock" />
            Design
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="./illustration"
            name="illustration"
            active={activeItem === 'illustration'}
            onClick={this.handleItemClick}
          >
            <Icon name="hand paper" />
            Illustration
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="./web"
            name="web"
            active={activeItem === 'web'}
            onClick={this.handleItemClick}
          >
            <Icon name="hand scissors" />
            Web
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
