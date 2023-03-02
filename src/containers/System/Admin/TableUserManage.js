import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import './TableUserManage.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}


class TableUserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersArr: '',
            // users: ''
        };
    }

    componentDidMount() {
        this.props.getAllUsersStart();
        this.props.getAllUsersStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//cap nhat state
        // /render => didupdate
        // hien taau (this) va qua khu (previous)
        //[] [3] trc khi render

        // /render lai 
        // [3] [3]
        if(prevProps.UsersDataRedux !== this.props.UsersDataRedux) {
            let arrUsers = this.props.UsersDataRedux
            this.setState({
                usersArr: arrUsers,
                // users: arrUsers && arrUsers.length>0 ? arrUsers[0].key :''//set select mac dinh
            })
        }
    }

    handleDeleteUser = async (user) => {
        this.props.deleteUserStart(user.id)
    };
    handleUpdateUser = async (user) => {
        this.props.handleUpdateUser(user)
    }

    render() {
        let users = this.state.usersArr
        return (
            <div>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                <div className="users-container">
                    <div className='title text-center'>Manage user with NTNHAT</div>
                    <div className='user-table mt-4 mx-1'>                
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last name</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.map((user, index) => 
                                    {
                                        return (
                                            <tr key={index}>
                                                <td>{user.email}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.address}</td>
                                                <td>
                                                    <button className='btn-action' onClick={() => this.handleUpdateUser(user)}>
                                                        <i className="fas fa-user-edit icon-edit"></i>
                                                    </button>
                                                    <button className='btn-action' onClick={() => this.handleDeleteUser(user)}>
                                                        <i className="fas fa-trash icon-delete"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>  
            </div>
        );
    }
}
        
    


const mapStateToProps = state => {
    return {
        UsersDataRedux : state.admin.usersData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUserStart: (userId) => dispatch(actions.DeleteUserStart(userId)),//fire action
        getAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),//fire action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUserManage);
