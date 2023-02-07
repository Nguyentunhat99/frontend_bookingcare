import React, { Component, createRef } from 'react';

// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalEdittUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            firstName:'',
            lastName:'',
            phonenumber:'',
            address:'',
            id:'',
        };
        
    }
    
    

    async componentDidMount() { 
        let user = this.props.userInfo;
        if (user && !_.isEmpty(user)) {
            this.setState({
                firstName:user.firstName,
                lastName:user.lastName,
                phonenumber:user.phonenumber,
                email:user.email,
                address:user.address,
                id:user.id, 
            })
        }
    }

    toggle = () => {
        this.props.handleHideEditModal();
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['firstName','lastName','phonenumber','address'];
        for (let i = 0; i < arrInput.length; i++) {// chi can chua nhap dl 1 oo thif se dunf lai ngay lap tuc
            console.log('arrInput', arrInput[i]);
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('You have not entered data '+arrInput[i])
                break;
            }
        }
        return isValid
    };  
 
    handlefocusInput = () => {
        // this.inputRef.current.focus();
    }

    handleOnchangeInput = (e, data) => {
        console.log(e.target.value, data);
        //bad code modify state ( anhr huowrng den hieu nang)
        /**
         * this.state[data] === e.target.value
         * this.setState({
         * ...this.state
         * }, () => {
         *  console.log('check bad state:', this.state);
         * })
         */


        //good code 
        let copyState = {...this.state};
        copyState[data] = e.target.value;
        console.log('copyState:', copyState);
        this.setState({
            ...copyState
        })
    }

    handleUpdateUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            this.props.handleUpdateUserManage(this.state);//goij toi tk cha/ tryten dl state u con sang chaa
            this.setState({
                email:'',
                firstName:'',
                lastName:'',
                phonenumber:'',
                address:'',
                password:'',
                id:'',
            })      
        }
    }
    render() {
        console.log('Check child props', this.props);
        console.log('Check child open modal', this.props.isOpen);
        console.log('Check userInfo', this.props.userInfo);
        // let user = this.props.userInfo;
        return (
            <Modal 
                isOpen={this.props.isOpen}
                toggle={() => {this.toggle()}}  
                className={'modal-container'}
                sizes="lg"
                centered 
            >
                <ModalHeader toggle={() => {this.toggle()}}>Update User</ModalHeader>
                <ModalBody>
                    <div className="form-container">
                        <div className="form-row">
                            <div className="col-12 text-center heading"><b>Update user:</b></div>
                            <form>
                                <div className="form-container">
                                    <div className="form-content">
                                        <label htmlFor="">First name (*):</label><br />
                                        <input 
                                            ref={this.inputRef}
                                            className="" 
                                            type="text" 
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'firstName')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Last name (*):</label><br />
                                        <input 
                                            className="" 
                                            type="text" 
                                            name="lastName" 
                                            value={this.state.lastName}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'lastName')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Email (*):</label><br />
                                        <input 
                                            className="" 
                                            type='email'
                                            name="email" 
                                            value={this.state.email}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'email')} }
                                            disabled
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Phone number (*):</label><br />
                                        <input 
                                            className="" 
                                            type="number" 
                                            name="phonenumber" 
                                            value={this.state.phonenumber}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'phonenumber')} }
                                        />
                                    </div>
                                    <div className="form-content">
                                        <label htmlFor="">Address (*):</label><br />
                                        <input 
                                            className="" 
                                            type="text" 
                                            name="address" 
                                            value={this.state.address}
                                            onChange={(e) => { this.handleOnchangeInput(e, 'address')} }
                                                                                    
                                        />
                                    </div>
                                    {/* <div className="form-group col-md-12"><button type="submit" className="btn btn-primary">Submit</button></div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {this.handleUpdateUser()}}
                    >
                        Update
                    </Button>
                    <Button 
                        color="secondary" 
                        onClick={() => {this.toggle()}}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdittUser);


