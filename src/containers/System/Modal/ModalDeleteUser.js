import React, { Component, createRef } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
        };
        
    }
    
    async componentDidMount() {
        let user = this.props.userIdDel;
        console.log('user: ', user);
        if (user && !_.isEmpty(user)) {
            this.setState({
                id:  user.id,
            })
        }
    }

    toggle = () => {
        this.props.handleHideDeleteModal()
    };

    handleDeleteUser = () => {
        // console.log('this.state.id:',this.state);
        this.props.handleDeleteUserManage(this.state);//goij toi tk cha/ tryten dl state u con sang chaa         
    }

    render() {
        console.log('Check child props', this.props);
        console.log('Check child open modal', this.props.isOpen);
        // console.log('this.props.userIdDel',this.props.userIdDel);
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => {this.toggle()}}  
                className={'modal-container'}
                sizes="lg"
                centered 
            >
                <ModalHeader toggle={() => {this.toggle()}}>Confirm user deletion</ModalHeader>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {this.handleDeleteUser()}}
                    >
                        confirm
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


