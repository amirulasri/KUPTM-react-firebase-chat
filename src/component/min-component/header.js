import React, { Component } from "react";
import { logokuptm } from "../../assets/logokuptm.png";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    openactionprofile = (key) => {
        if(key === 'logout'){
            this.props.logout();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="headerchat">
                    <div className="headeritem">
                        <div style={{marginRight: '15px'}}>
                            <Text h3>
                                KUPTM Chat
                            </Text>
                        </div>
                        {/* <Menu>
                            <MenuButton as={Button} rightIcon="chevron-down" paddingLeft=".5rem">
                                <Avatar
                                    size="sm"
                                    as="button"
                                    color="secondary"
                                    src={this.props.profile_picture}
                                />
                                {this.props.fullName}
                            </MenuButton>
                            <MenuList onClick={this.props.logout}>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu> */}
                        <Dropdown placement="bottom-left">
                            <Dropdown.Trigger>
                                <Avatar
                                    size="md"
                                    color="secondary"
                                    bordered
                                    src={this.props.profile_picture}
                                />
                            </Dropdown.Trigger>
                            <Dropdown.Menu color="secondary" aria-label="Avatar Actions" onAction={(key) => { this.openactionprofile(key) }}>
                                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as {this.props.fullName}
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    My Settings
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" color="error">
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;