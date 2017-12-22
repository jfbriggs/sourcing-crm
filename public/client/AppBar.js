import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from './AppMenu';

const TopBar = () => (
  <AppBar
    title='Sizzl - An obnoxiously simple CRM.'
    style={{
      backgroundColor: '#FF5722'
    }}
    iconElementRight={<AppMenu />}
  />
);

export default TopBar;