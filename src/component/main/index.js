import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Main = () => (
    <MuiThemeProvider>
        <AppBar title="My AppBar" />
    </MuiThemeProvider>
);

export default Main;
