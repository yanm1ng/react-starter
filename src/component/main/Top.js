import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="React Starter App"
                        iconElementRight={<FlatButton label="LOGIN" onTouchTap={this.handleState}/>}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}
