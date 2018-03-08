import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu className='topmenu' borderless>
          <Container>
            <div className="logo" />
            <Menu.Item position={'right'} href='#'>Home</Menu.Item>
            <Menu.Item href='#'>Hotels</Menu.Item>
            <Menu.Item href='#'>Casinos</Menu.Item>
            <Menu.Item href='#'>Live</Menu.Item>
            <Menu.Item href='#'>Shop</Menu.Item>
            <Menu.Item href='#'>Blog</Menu.Item>
            <Menu.Item href='#'>Rewards</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
