import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component { 
    componentDidMount() {
        // this.props.fetchUsers()
    }
    render() { 
        return (
            <div> Here's a big list of users:

            </div>
        );
    }
}

function mapStateToProps(state) { 
    return {users: state.users};

}

export default connect(mapStateToProps, {fetchUsers})(UsersList);