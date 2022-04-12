import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';
import './desktopNav.css';

export default class Desktop extends Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu_desktop">
        <Grid.Column width={4} only="tablet computer">
          <Menu fluid vertical tabular>
            <Menu.Item
              as={NavLink}
              to="/"
              name="Home"
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to="/about"
              name="About"
              active={activeItem === 'Web'}
              onClick={this.handleItemClick}
            />
            {/* <Menu.Item
              as={NavLink}
              to="/design"
              name="Design"
              active={activeItem === 'Design'}
              onClick={this.handleItemClick}
            /> */}
            <Menu.Item
              as={NavLink}
              to="/illustration"
              name="Illustration"
              active={activeItem === 'Illustration'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
      </div>
    );
  }
}
