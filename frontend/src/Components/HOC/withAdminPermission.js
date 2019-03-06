import React, { Component } from 'react'
import PermissionDenied from '../Molecules/PermissionDenied';

function withAdminPermission(WrappedComponent) {
  return class extends Component {
    render() {
      return !(localStorage.currentUser && JSON.parse(localStorage.currentUser).name === 'admin') 
        ? <PermissionDenied />
        : <WrappedComponent {...this.props} />
    }
  }
}

export default withAdminPermission
