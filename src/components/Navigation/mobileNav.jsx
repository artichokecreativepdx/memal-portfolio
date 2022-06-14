import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './mobileNav.css';
export default class MobileNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu_mobile">
        <Menu fluid fixed="bottom">
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="./about"
            name="about"
            active={activeItem === 'web'}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="./illustration"
            name="illustration"
            active={activeItem === 'illustration'}
            onClick={this.handleItemClick}
          >
            Illustration
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
