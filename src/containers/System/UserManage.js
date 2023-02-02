import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
import { rest } from 'lodash';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        let respon = await getAllUsers('ALL');
        console.log('res:', respon);
        if(respon && respon.errCode === 0) {
            this.setState({
                arrUsers: respon.users,
            })
        }
    }


    render() {
        console.log('check render:', this.state);
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers);
        return (
            <div className="text-center">
                <div className='title text-center'>Manage user with NTNHAT</div>
                <div className='user-table mt-4 mx-1'>                
                    <table id="customers">
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
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button className='btn-action'>
                                            <i class="fas fa-user-edit icon-edit"></i>
                                        </button>
                                        <button className='btn-action'>
                                            <i class="fas fa-trash icon-delete"></i>
                                        </button>
                                    </td>
                                </tr>

                                )
                            }
                        )
                    }
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
