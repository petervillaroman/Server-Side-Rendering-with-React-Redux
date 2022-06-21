/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
	class RequireAuth extends Component {
		render() {
			switch (this.props.auth) {
				case false:
				case null:

				default:
					return <ChildComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps({ auth }) {
		return { auth };
	}

	connect(mapStateToProps)(RequireAuth);
};
