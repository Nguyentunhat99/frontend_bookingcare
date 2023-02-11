import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserProduct extends Component {

    constructor(props) {
        super(props) ;
            this.state = {

            }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <div className="title" >UserRedux</div>
                <div className='user-redux-body'></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProduct);
