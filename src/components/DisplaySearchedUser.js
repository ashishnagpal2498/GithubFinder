import React, {Component} from 'react';
import PropTypes from 'prop-types'
class DisplaySearchedUser extends Component {
    static  propTypes ={
        searchedUser: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div>
                <h3>You have searched for : </h3> {this.props.searchedUser}
            </div>
        );
    }
}

export default DisplaySearchedUser;