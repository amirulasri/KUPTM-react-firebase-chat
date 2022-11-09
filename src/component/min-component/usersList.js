import React, { Component } from 'react';
import { Loading, Text } from '@nextui-org/react';
import "../../style/style.css";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            activeItem: "chatRoom"
        }
    }

    selectUser = (user) => {
        // console.log(user)
        if (this.props.loadingData) { return }
        if (user === "chatRoom") {
            this.props.getMessageFromRoom(user)
            this.setState({ activeItem: user });
        } else {
            this.props.selectUser(user)
            this.setState({ activeItem: user.uid })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="userlistouter">
                    <div className="userlistinner">
                        {!this.props.usersList.length > 0
                            ?
                            <div>
                                <Loading color="primary"></Loading>
                            </div>
                            :
                            <React.Fragment>
                                <div className='eachuserlist' onClick={() => this.selectUser("chatRoom")}>
                                    <div
                                        className='userlist'
                                        //variantColor={this.state.activeItem === "chatRoom" ? "red" : "orange"}
                                        style={this.state.activeItem === "chatRoom" ? {backgroundColor: 'rgb(249, 255, 196)'} : {backgroundColor: 'rgb(255, 229, 196)'}}
                                    >
                                        <Text>Common Group</Text>
                                        <Loading style={{ display: this.props.loadingData && this.state.activeItem === "chatRoom" ? "block" : "none" }} />
                                    </div>
                                </div>
                                {this.props.usersList.map(user => {
                                    return (user.uid !== this.props.userId)
                                        ?
                                        <div className='eachuserlist' key={user.uid} onClick={() => this.selectUser(user)}>
                                            <div
                                                className='userlist'
                                                //variantColor={this.state.activeItem === user.uid ? "red" : "orange"}
                                                style={this.state.activeItem === user.uid ? {backgroundColor: 'rgb(249, 255, 196)'} : {backgroundColor: 'rgb(255, 229, 196)'}}
                                            >
                                                <img
                                                    className='userlistprofilepic'
                                                    src={user.img}
                                                />
                                                <Text>{user.name}</Text>
                                                <Loading style={{ display: this.props.loadingData && this.state.activeItem === user.uid ? "block" : "none" }} />
                                            </div>
                                        </div>
                                        : ""
                                })}
                            </React.Fragment>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UsersList;