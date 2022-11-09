import React, { Component } from "react";
import { logokuptm } from "../../assets/logokuptm.png";
import { Box, Flex, Avatar, Button, Text, Stack, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/core";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className="headerchat">
                    <Box w="100%" p={4}>
                        <div>
                            <img
                                className="logomain"
                                src={logokuptm}
                            />
                            <Text fontWeight={600} color="orange.300">
                                KUPTM Chat
                            </Text>
                        </div>
                    </Box>
                    <Box w="100%" p={4} display="flex" flexDirection="row-reverse">
                        <Menu>
                            <MenuButton as={Button} rightIcon="chevron-down" paddingLeft=".5rem">
                                <Avatar
                                    size="sm"
                                    marginRight="5px"
                                    src={this.props.profile_picture}
                                />
                                {this.props.fullName}
                            </MenuButton>
                            <MenuList onClick={this.props.logout}>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;