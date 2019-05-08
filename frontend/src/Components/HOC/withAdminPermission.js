import React, { Component } from 'react'
import PermissionDenied from '../Molecules/PermissionDenied';

/**
 * 
 * @param {*} WrappedComponent 
 */
function withAdminPermission(WrappedComponent) {
  return class extends Component {
    render() {
      return !(localStorage.user && JSON.parse(localStorage.user).admin) 
        ? <PermissionDenied />
        : <WrappedComponent {...this.props} />
    }
  }
}

export default withAdminPermission
