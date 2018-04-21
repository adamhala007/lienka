import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';

import "../css/Menu.css";

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

const menuStyle = {
    backgroundColor: color4, borderRadius: "10px 10px 0 0",
};

const menuItemStyle = {
    backgroundColor: color4,
};

const buttonStyle = {
    backgroundColor: color2,
    labelColor: color5
};

const style = {margin: 5};
const iconStyles = {
    marginLeft: 24,
    hoverColor: blue300,
};


export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar
                style={menuStyle}>

                <ToolbarGroup firstChild={true}>

                    <FontIcon className="logo" />

                </ToolbarGroup>



                <ToolbarGroup style={menuStyle}>

                    <Avatar size={35} style={style}>a</Avatar>
                    <ToolbarTitle text="adamhala007" />
                    <IconMenu style={menuItemStyle}
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon style={menuItemStyle} />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Nastavenia" style={menuItemStyle} />
                        <MenuItem primaryText="Credits" style={menuItemStyle}/>
                    </IconMenu>
                    <ToolbarSeparator />
                    <IconButton iconClassName="connect"  style={iconStyles} />
                    <IconButton iconClassName="logout"  />


                </ToolbarGroup>
            </Toolbar>
        );
    }
}
/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
/*<div>Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/