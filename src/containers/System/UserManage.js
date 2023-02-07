import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService ,UpdateUserService } from '../../services/userService';
// import { rest } from 'lodash';
import { ModalEditUser, ModalUser, ModalDeleteUser } from './Modal';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            userInfo: {},
            userIdDel: {},
            isOpenModalUser: false, 
            isOpenModalEditUser: false, 
            isOpenModalDeleteUser: false, 
            message: '',
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let respon = await getAllUsers('ALL');
        //console.log('res:', respon);
        if(respon && respon.errCode === 0) {
            this.setState({
                arrUsers: respon.users,
            })
        }
    }

    handleShowModal = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    handleHideModal = () => {
         this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    handleHideEditModal = () => {
         this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    handleHideDeleteModal = () => {
         this.setState({
            isOpenModalDeleteUser: !this.state.isOpenModalDeleteUser,
        })
    }
    //callapi
    handleCreateNewUser = async (data) => {//data tryen tu component xcon ModalUser
        try {
            let respon = await createNewUserService(data);
            if (respon && respon.errCode !== 0) {
                alert(respon.errMessage);
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false,
                    message: respon.errMessage
                })
            }
            
            } catch (error) {
            console.log(error);
        }
    }
    handleUpdateUser = async (user) => {
        this.setState({
            userInfo: user,
            isOpenModalEditUser: true,
        })
    }

    handleUpdateUserManage = async (data) => {//data tryen tu component xcon ModalUser
        try {
            console.log('data', data);
            let respon = await UpdateUserService(data);
            console.log('respon', respon);
            if (respon && respon.errCode !== 0) {
                alert(respon.errMessage);
            } else {
                await this.getAllUsersFromReact();
                setInterval(() => {
                    this.setState({
                        isOpenModalEditUser: false,
                    })
                    this.setState({message: respon.errMessage});
                    
                }, 500);
            } 
            
        } catch (error) {
            console.log(error);
        }
    }
    
    handleDeleteUser = async (user) => {
        console.log('user: ', user);
        this.setState({
            userIdDel: user,
            isOpenModalDeleteUser: true
        })
    };
    
    handleDeleteUserManage = async (user) => {
        try {
            let respon = await deleteUserService(user.id);
            if (respon && respon.errCode !== 0) {
                alert(respon.errMessage);
            } else {
                await this.getAllUsersFromReact();
                setInterval(() => {
                    this.setState({
                        isOpenModalDeleteUser: false,
                    })
                    this.setState({message: respon.errMessage});
                    
                }, 500);
            }
        } catch (error) {
            console.log(error);
        }

    }
    



    render() {
        console.log('check render:', this.state);
        let arrUsers = this.state.arrUsers;
        //console.log(arrUsers);
        return (
            <div className="users-container">
                <ModalUser 
                    isOpen = {this.state.isOpenModalUser}
                    handleHideModal= {this.handleHideModal}
                    handleCreateNewUser = {this.handleCreateNewUser}      
                />
                { this.state.isOpenModalEditUser &&
                    <ModalEditUser 
                    isOpen = {this.state.isOpenModalEditUser}
                    userInfo = {this.state.userInfo}
                    handleHideEditModal= {this.handleHideEditModal}
                    handleUpdateUserManage = {this.handleUpdateUserManage}
                />}
                { this.state.isOpenModalDeleteUser && 
                    <ModalDeleteUser 
                        isOpen = {this.state.isOpenModalDeleteUser}
                        userIdDel = {this.state.userIdDel}
                        handleHideDeleteModal= {this.handleHideDeleteModal}
                        handleDeleteUserManage = {this.handleDeleteUserManage}
                    />
                }
                <div className='title text-center'>Manage user with NTNHAT</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleShowModal()}
                    >
                        <i className='fas fa-plus'></i>
                          ADD NEW USER</button>
                </div>
                <h3 style={{color:'red'}}>{this.state.message}</h3>
                <div className='user-table mt-4 mx-1'>                
                    <table id="customers">
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                            {arrUsers && arrUsers.map((user, index) => 
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
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
